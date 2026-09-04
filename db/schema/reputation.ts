import {
  pgTable as pgTableRep,
  text as textRep,
  integer as intRep,
  timestamp as tsRep,
  unique as uniqueRep,
} from "drizzle-orm/pg-core";
import { createId as createIdRep } from "@paralleldrive/cuid2";
import { users } from "./users";
 
export const reputationEvents = pgTableRep("reputation_events", {
  id: textRep("id").primaryKey().$defaultFn(() => createIdRep()),
  userId: textRep("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  points: intRep("points").notNull(),
  // "RESOURCE_APPROVED" | "RESOURCE_HELPFUL" | "MILESTONE" — kept as free text
  // to match the Prisma `String` field; narrow with a union type in app code
  // if you want compile-time safety on the reason values.
  reason: textRep("reason").notNull(),
  refId: textRep("ref_id"), // e.g. related Resource.id — no FK, matches Prisma
  createdAt: tsRep("created_at", { withTimezone: true }).notNull().defaultNow(),
});
 
export const badges = pgTableRep("badges", {
  id: textRep("id").primaryKey().$defaultFn(() => createIdRep()),
  // "FIRST_CONTRIBUTION" | "HELPFUL_SENIOR" | "TOP_CONTRIBUTOR" | "SUBJECT_EXPERT"
  code: textRep("code").notNull().unique(),
  name: textRep("name").notNull(),
  description: textRep("description").notNull(),
});
 
export const userBadges = pgTableRep(
  "user_badges",
  {
    id: textRep("id").primaryKey().$defaultFn(() => createIdRep()),
    userId: textRep("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    badgeId: textRep("badge_id")
      .notNull()
      .references(() => badges.id, { onDelete: "cascade" }),
    awardedAt: tsRep("awarded_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [uniqueRep("user_badges_user_badge_unique").on(table.userId, table.badgeId)],
);
 
export type ReputationEvent = typeof reputationEvents.$inferSelect;
export type NewReputationEvent = typeof reputationEvents.$inferInsert;
export type Badge = typeof badges.$inferSelect;
export type NewBadge = typeof badges.$inferInsert;
export type UserBadge = typeof userBadges.$inferSelect;
export type NewUserBadge = typeof userBadges.$inferInsert;
 