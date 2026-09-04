import React from "react";
import { badges } from "../mock/landingData";
import { Container, SectionHeading } from "../ui/index";

export const ReputationSection = () => {
  return (
    <Container className="py-24 border-t border-border">
      <SectionHeading 
        title="Your contribution matters."
        subtitle="StudySync rewards meaningful academic contributions that actually help students succeed."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {badges.map((badge, idx) => (
          <div key={idx} className="bg-white rounded-3xl border border-border p-8 text-center hover:shadow-md transition-shadow group">
            <div className="w-16 h-16 bg-muted-background/50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <badge.icon className={`w-8 h-8 ${badge.color}`} />
            </div>
            <h4 className="text-xl font-bold text-foreground mb-3">{badge.title}</h4>
            <p className="text-sm text-muted font-medium leading-relaxed">{badge.description}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-16 bg-muted-background/20 rounded-3xl p-8 flex flex-wrap justify-center gap-12 text-center">
         <div className="flex flex-col gap-1">
            <span className="text-2xl font-bold text-primary">+10</span>
            <span className="text-xs font-bold text-muted uppercase">Approved resource</span>
         </div>
         <div className="flex flex-col gap-1">
            <span className="text-2xl font-bold text-primary">+2</span>
            <span className="text-xs font-bold text-muted uppercase">Helpful vote</span>
         </div>
         <div className="flex flex-col gap-1">
            <span className="text-2xl font-bold text-primary">+5</span>
            <span className="text-xs font-bold text-muted uppercase">Subject Mastery</span>
         </div>
      </div>
    </Container>
  );
};
