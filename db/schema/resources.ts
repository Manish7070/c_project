import {
  pgTable as pgTableRes,
  text as textRes,
  integer as intRes,
  timestamp as tsRes,
  unique as uniqueRes,
  index as indexRes,
} from "drizzle-orm/pg-core";
import { createId as createIdRes } from "@paralleldrive/cuid2";
import { difficultyEnum, documentSubtypeEnum, examRelevanceEnum, moderationStatusEnum, resourceTypeEnum } from "./enums";
import { users } from "./users";
import { subjects, topics, units } from "./academic";
 
export const resources = pgTableRes(
  "resources",
  {
    id: textRes("id").primaryKey().$defaultFn(() => createIdRes()),
    title: textRes("title").notNull(),
    type: resourceTypeEnum("type").notNull(),
    // Only meaningful when type = DOCUMENT — intentionally nullable, matching
    // the Prisma `DocumentSubtype?` field.
    documentSubtype: documentSubtypeEnum("document_subtype"),
    url: textRes("url").notNull(),
    description: textRes("description").notNull(),
    whyUseful: textRes("why_useful"),
    difficulty: difficultyEnum("difficulty"),
    examRelevance: examRelevanceEnum("exam_relevance"),
    status: moderationStatusEnum("status").notNull().default("PENDING"),
    rejectionReason: textRes("rejection_reason"),
    helpfulCount: intRes("helpful_count").notNull().default(0),
 
    submittedById: textRes("submitted_by_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    subjectId: textRes("subject_id")
      .notNull()
      .references(() => subjects.id, { onDelete: "cascade" }),
    unitId: textRes("unit_id")
      .notNull()
      .references(() => units.id, { onDelete: "cascade" }),
    topicId: textRes("topic_id").references(() => topics.id, {
      onDelete: "set null",
    }),
 
    createdAt: tsRes("created_at", { withTimezone: true }).notNull().defaultNow(),
    approvedAt: tsRes("approved_at", { withTimezone: true }),
  },
  (table) => [
    indexRes("resources_subject_unit_status_idx").on(
      table.subjectId,
      table.unitId,
      table.status,
    ),
    indexRes("resources_status_created_at_idx").on(table.status, table.createdAt),
  ],
);
 
export const resourceHelpful = pgTableRes(
  "resource_helpful",
  {
    id: textRes("id").primaryKey().$defaultFn(() => createIdRes()),
    userId: textRes("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    resourceId: textRes("resource_id")
      .notNull()
      .references(() => resources.id, { onDelete: "cascade" }),
    createdAt: tsRes("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [
    uniqueRes("resource_helpful_user_resource_unique").on(table.userId, table.resourceId),
  ],
);
 
export const bookmarks = pgTableRes(
  "bookmarks",
  {
    id: textRes("id").primaryKey().$defaultFn(() => createIdRes()),
    userId: textRes("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    resourceId: textRes("resource_id")
      .notNull()
      .references(() => resources.id, { onDelete: "cascade" }),
    createdAt: tsRes("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [uniqueRes("bookmarks_user_resource_unique").on(table.userId, table.resourceId)],
);
 
export type Resource = typeof resources.$inferSelect;
export type NewResource = typeof resources.$inferInsert;
export type ResourceHelpful = typeof resourceHelpful.$inferSelect;
export type NewResourceHelpful = typeof resourceHelpful.$inferInsert;
export type Bookmark = typeof bookmarks.$inferSelect;
export type NewBookmark = typeof bookmarks.$inferInsert;
 