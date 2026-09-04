import React from "react";
import { stats } from "../mock/landingData";
import { Container, SectionHeading } from "../ui/index";
import { cn } from "@/lib/utils";

export const StatsSection = () => {
  return (
    <Container className="bg-muted-background/30 rounded-[60px] my-16">
      <SectionHeading 
        title="Making learning better, together."
        subtitle="A growing community of students sharing resources that actually help."
      />
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center text-center group">
            <div className={cn("w-14 h-14 rounded-full flex items-center justify-center mb-6 transition-transform group-hover:scale-110", stat.color)}>
              <stat.icon className="w-7 h-7 text-white" />
            </div>
            <div className="text-4xl md:text-5xl font-extrabold text-foreground mb-2">
              {stat.value}
            </div>
            <div className="text-sm md:text-base text-muted font-bold tracking-wide uppercase">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};
