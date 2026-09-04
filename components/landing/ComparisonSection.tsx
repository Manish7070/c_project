import React from "react";
import { Container, SectionHeading } from "../ui/index";
import { X, Check } from "lucide-react";

export const ComparisonSection = () => {
  return (
    <Container className="py-24">
      <SectionHeading title="Why search everywhere?" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Generic Search */}
        <div className="bg-white rounded-[40px] border border-border p-10 opacity-60">
          <h3 className="text-2xl font-bold text-foreground mb-8">Generic Search</h3>
          <ul className="space-y-6">
            <ComparisonItem icon={X} text="Thousands of results" color="text-red-500" />
            <ComparisonItem icon={X} text="No syllabus context" color="text-red-500" />
            <ComparisonItem icon={X} text="Random quality" color="text-red-500" />
            <ComparisonItem icon={X} text="Hard to know what helps" color="text-red-500" />
            <ComparisonItem icon={X} text="No contributor accountability" color="text-red-500" />
          </ul>
        </div>
        
        {/* StudySync */}
        <div className="bg-white rounded-[40px] border-2 border-primary p-10 shadow-xl relative scale-105">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest">
             Recommended
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-8">StudySync</h3>
          <ul className="space-y-6">
            <ComparisonItem icon={Check} text="Syllabus-aligned" color="text-primary" />
            <ComparisonItem icon={Check} text="Community submitted" color="text-primary" />
            <ComparisonItem icon={Check} text="Admin approved" color="text-primary" />
            <ComparisonItem icon={Check} text="Helpful votes" color="text-primary" />
            <ComparisonItem icon={Check} text="Contributor reputation" color="text-primary" />
          </ul>
        </div>
      </div>
    </Container>
  );
};

const ComparisonItem = ({ icon: Icon, text, color }: any) => (
  <li className="flex items-center gap-4">
    <div className={`w-6 h-6 rounded-full bg-muted-background flex items-center justify-center`}>
      <Icon size={14} className={color} strokeWidth={3} />
    </div>
    <span className="text-lg font-medium text-foreground">{text}</span>
  </li>
);
