import { pgEnum } from "drizzle-orm/pg-core";
 
export const userRoleEnum = pgEnum("user_role", ["STUDENT", "ADMIN"]);
 
export const resourceTypeEnum = pgEnum("resource_type", [
  "VIDEO",
  "PLAYLIST",
  "WEBSITE",
  "DOCUMENT",
  "DRIVE",
]);
 
export const documentSubtypeEnum = pgEnum("document_subtype", [
  "NOTES",
  "PREVIOUS_YEAR_QUESTIONS",
  "STUDY_MATERIAL",
]);
 
export const moderationStatusEnum = pgEnum("moderation_status", [
  "PENDING",
  "APPROVED",
  "REJECTED",
]);
 
export const difficultyEnum = pgEnum("difficulty", [
  "BEGINNER",
  "INTERMEDIATE",
  "ADVANCED",
]);
 
export const examRelevanceEnum = pgEnum("exam_relevance", [
  "EXAM_FOCUSED",
  "CONCEPT_BUILDING",
  "REVISION",
]);