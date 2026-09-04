import { integer, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { createId } from "@paralleldrive/cuid2";
import { userRoleEnum } from "./enums";
// NOTE: this import path is relative to /db/schema/users.ts once split out
 
export const users = pgTable("users", {
  id: text("id").primaryKey().$defaultFn(() => createId()),
  clerkId: text("clerk_id").notNull().unique(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  role: userRoleEnum("role").notNull().default("STUDENT"),
  courseYear: text("course_year"), // e.g. "3rd Year" — optional per schema
  reputation: integer("reputation").notNull().default(0),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});
 
export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;