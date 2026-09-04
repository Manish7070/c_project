import { verifyWebhook } from "@clerk/nextjs/webhooks";
import { NextRequest } from "next/server";
import { eq, sql } from "drizzle-orm";

import { db } from "@/db";
import { users } from "@/db/schema";

export const dynamic = "force-dynamic";

// Health check
export async function GET() {
  try {
    await db.execute(sql`select 1`);

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Database health check failed:", error);

    return Response.json({ ok: false }, { status: 500 });
  }
}

// Clerk Webhook
export async function POST(req: NextRequest) {
  try {
    const evt = await verifyWebhook(req);

    switch (evt.type) {
      case "user.created": {
        const {
          id: clerkId,
          first_name,
          last_name,
          email_addresses,
          primary_email_address_id,
        } = evt.data;

        const primaryEmail = email_addresses.find(
          (email) => email.id === primary_email_address_id
        );

        if (!primaryEmail) {
          console.error(`No primary email found for Clerk user ${clerkId}`);

          return new Response("No primary email found", {
            status: 400,
          });
        }

        const name =
          [first_name, last_name].filter(Boolean).join(" ") ||
          primaryEmail.email_address.split("@")[0];

        await db
          .insert(users)
          .values({
            clerkId,
            name,
            email: primaryEmail.email_address,
          })
          .onConflictDoUpdate({
            target: users.clerkId,
            set: {
              name,
              email: primaryEmail.email_address,
            },
          });

        break;
      }

      case "user.updated": {
        const {
          id: clerkId,
          first_name,
          last_name,
          email_addresses,
          primary_email_address_id,
        } = evt.data;

        const primaryEmail = email_addresses.find(
          (email) => email.id === primary_email_address_id
        );

        const name = [first_name, last_name]
          .filter(Boolean)
          .join(" ");

        const updateData: {
          name?: string;
          email?: string;
        } = {};

        if (name) {
          updateData.name = name;
        }

        if (primaryEmail) {
          updateData.email = primaryEmail.email_address;
        }

        if (Object.keys(updateData).length > 0) {
          await db
            .update(users)
            .set(updateData)
            .where(eq(users.clerkId, clerkId));
        }

        break;
      }

      case "user.deleted": {
        const clerkId = evt.data.id;

        if (!clerkId) {
          console.error("Deleted Clerk user has no ID");

          return new Response("Missing Clerk user ID", {
            status: 400,
          });
        }

        await db
          .delete(users)
          .where(eq(users.clerkId, clerkId));

        break;
      }

      default:
        // Ignore webhook events we don't handle.
        break;
    }

    return new Response("Webhook processed", {
      status: 200,
    });
  } catch (error) {
    console.error("Clerk webhook error:", error);

    return new Response("Webhook failed", {
      status: 400,
    });
  }
}