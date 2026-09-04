import React from "react";
import { features } from "../mock/landingData";
import { Container } from "../ui/index";
import { cn } from "@/lib/utils";

export const TrustFeatures = () => {
  return (
    <Container className="pt-0 pb-16 md:pb-24">
      <div className="bg-white rounded-[40px] border border-border shadow-sm p-8 md:p-12">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything you need. <br />
            <span className="text-muted font-medium">Organized around your syllabus.</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-4 lg:gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col gap-4">
              <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center", feature.color)}>
                <feature.icon className={cn("w-6 h-6", feature.iconColor)} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted leading-relaxed font-medium">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
