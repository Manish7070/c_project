import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "StudySync — Find the Right Resources for Your Syllabus",
  description:
    "StudySync helps students discover, use, and share syllabus-aligned academic resources organized by subject, unit, and topic.",
};

export default function MarketingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}