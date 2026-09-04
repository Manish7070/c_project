 
import {
  integer as pgInteger,
  pgTable as pgTableAcademic,
  text as pgText,
  timestamp as pgTimestamp,
  unique,
  index,
} from "drizzle-orm/pg-core";
import { createId as createIdAcademic } from "@paralleldrive/cuid2";
import { moderationStatusEnum } from "./enums";
import { users } from "./users";
 
export const universities = pgTableAcademic("universities", {
  id: pgText("id").primaryKey().$defaultFn(() => createIdAcademic()),
  name: pgText("name").notNull().unique(),
  createdAt: pgTimestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});
 
export const courses = pgTableAcademic(
  "courses",
  {
    id: pgText("id").primaryKey().$defaultFn(() => createIdAcademic()),
    name: pgText("name").notNull(),
    universityId: pgText("university_id")
      .notNull()
      .references(() => universities.id, { onDelete: "cascade" }),
  },
  (table) => [unique("courses_university_name_unique").on(table.universityId, table.name)],
);
 
export const semesters = pgTableAcademic(
  "semesters",
  {
    id: pgText("id").primaryKey().$defaultFn(() => createIdAcademic()),
    number: pgInteger("number").notNull(),
    courseId: pgText("course_id")
      .notNull()
      .references(() => courses.id, { onDelete: "cascade" }),
  },
  (table) => [unique("semesters_course_number_unique").on(table.courseId, table.number)],
);
 
export const subjects = pgTableAcademic(
  "subjects",
  {
    id: pgText("id").primaryKey().$defaultFn(() => createIdAcademic()),
    name: pgText("name").notNull(),
    // lower-cased, whitespace-collapsed — used for dedupe checks per §16
    normalizedName: pgText("normalized_name").notNull(),
    semesterId: pgText("semester_id")
      .notNull()
      .references(() => semesters.id, { onDelete: "cascade" }),
    status: moderationStatusEnum("status").notNull().default("PENDING"),
    proposedById: pgText("proposed_by_id").references(() => users.id, {
      onDelete: "set null",
    }),
    createdAt: pgTimestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (table) => [
    unique("subjects_semester_normalized_name_unique").on(
      table.semesterId,
      table.normalizedName,
    ),
    index("subjects_status_idx").on(table.status),
  ],
);
 
export const units = pgTableAcademic(
  "units",
  {
    id: pgText("id").primaryKey().$defaultFn(() => createIdAcademic()),
    name: pgText("name").notNull(),
    order: pgInteger("order").notNull(),
    subjectId: pgText("subject_id")
      .notNull()
      .references(() => subjects.id, { onDelete: "cascade" }),
  },
  (table) => [unique("units_subject_order_unique").on(table.subjectId, table.order)],
);
 
export const topics = pgTableAcademic(
  "topics",
  {
    id: pgText("id").primaryKey().$defaultFn(() => createIdAcademic()),
    name: pgText("name").notNull(),
    unitId: pgText("unit_id")
      .notNull()
      .references(() => units.id, { onDelete: "cascade" }),
  },
  (table) => [unique("topics_unit_name_unique").on(table.unitId, table.name)],
);
 
export type University = typeof universities.$inferSelect;
export type NewUniversity = typeof universities.$inferInsert;
export type Course = typeof courses.$inferSelect;
export type NewCourse = typeof courses.$inferInsert;
export type Semester = typeof semesters.$inferSelect;
export type NewSemester = typeof semesters.$inferInsert;
export type Subject = typeof subjects.$inferSelect;
export type NewSubject = typeof subjects.$inferInsert;
export type Unit = typeof units.$inferSelect;
export type NewUnit = typeof units.$inferInsert;
export type Topic = typeof topics.$inferSelect;
export type NewTopic = typeof topics.$inferInsert;
 