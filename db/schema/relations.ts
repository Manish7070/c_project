import { relations } from "drizzle-orm";
import { badges, reputationEvents, userBadges } from "./reputation";
import { users } from "./users";
import { bookmarks, resources, resourceHelpful} from "./resources";
import { universities, courses, semesters, subjects, units, topics } from "./academic";
 
export const usersRelations = relations(users, ({ many }) => ({
  resources: many(resources),
  helpfulVotes: many(resourceHelpful),
  bookmarks: many(bookmarks),
  reputationLog: many(reputationEvents),
  userBadges: many(userBadges),
  proposedSubjects: many(subjects),
}));
 
export const universitiesRelations = relations(universities, ({ many }) => ({
  courses: many(courses),
}));
 
export const coursesRelations = relations(courses, ({ one, many }) => ({
  university: one(universities, {
    fields: [courses.universityId],
    references: [universities.id],
  }),
  semesters: many(semesters),
}));
 
export const semestersRelations = relations(semesters, ({ one, many }) => ({
  course: one(courses, {
    fields: [semesters.courseId],
    references: [courses.id],
  }),
  subjects: many(subjects),
}));
 
export const subjectsRelations = relations(subjects, ({ one, many }) => ({
  semester: one(semesters, {
    fields: [subjects.semesterId],
    references: [semesters.id],
  }),
  proposedBy: one(users, {
    fields: [subjects.proposedById],
    references: [users.id],
  }),
  units: many(units),
  resources: many(resources),
}));
 
export const unitsRelations = relations(units, ({ one, many }) => ({
  subject: one(subjects, {
    fields: [units.subjectId],
    references: [subjects.id],
  }),
  topics: many(topics),
  resources: many(resources),
}));
 
export const topicsRelations = relations(topics, ({ one, many }) => ({
  unit: one(units, {
    fields: [topics.unitId],
    references: [units.id],
  }),
  resources: many(resources),
}));
 
export const resourcesRelations = relations(resources, ({ one, many }) => ({
  submittedBy: one(users, {
    fields: [resources.submittedById],
    references: [users.id],
  }),
  subject: one(subjects, {
    fields: [resources.subjectId],
    references: [subjects.id],
  }),
  unit: one(units, {
    fields: [resources.unitId],
    references: [units.id],
  }),
  topic: one(topics, {
    fields: [resources.topicId],
    references: [topics.id],
  }),
  helpfulVotes: many(resourceHelpful),
  bookmarks: many(bookmarks),
}));
 
export const resourceHelpfulRelations = relations(resourceHelpful, ({ one }) => ({
  user: one(users, {
    fields: [resourceHelpful.userId],
    references: [users.id],
  }),
  resource: one(resources, {
    fields: [resourceHelpful.resourceId],
    references: [resources.id],
  }),
}));
 
export const bookmarksRelations = relations(bookmarks, ({ one }) => ({
  user: one(users, {
    fields: [bookmarks.userId],
    references: [users.id],
  }),
  resource: one(resources, {
    fields: [bookmarks.resourceId],
    references: [resources.id],
  }),
}));
 
export const reputationEventsRelations = relations(reputationEvents, ({ one }) => ({
  user: one(users, {
    fields: [reputationEvents.userId],
    references: [users.id],
  }),
}));
 
export const badgesRelations = relations(badges, ({ many }) => ({
  userBadges: many(userBadges),
}));
 
export const userBadgesRelations = relations(userBadges, ({ one }) => ({
  user: one(users, {
    fields: [userBadges.userId],
    references: [users.id],
  }),
  badge: one(badges, {
    fields: [userBadges.badgeId],
    references: [badges.id],
  }),
}));
 