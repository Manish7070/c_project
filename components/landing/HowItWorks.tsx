import React from "react";
import { Container, SectionHeading } from "../ui/index";
import { Search, FileText, GraduationCap, Share2, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Browse",
    description: "Explore subjects and units from your syllabus."
  },
  {
    icon: FileText,
    title: "Find Resources",
    description: "Search and filter the best resources shared by students."
  },
  {
    icon: GraduationCap,
    title: "Use & Learn",
    description: "Study with resources that match your exact academic context."
  },
  {
    icon: Share2,
    title: "Contribute",
    description: "Share helpful resources and help your community grow."
  }
];

export const HowItWorks = () => {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="bg-background rounded-[60px] p-8 md:p-16 border border-border">
          <SectionHeading 
            title="How StudySync works?"
            subtitle="Find. Study. Share. Succeed."
          />
          
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Connection Arrows (Desktop) */}
            <div className="hidden lg:block absolute top-12 left-[15%] right-[15%] h-[2px] border-t-2 border-dashed border-border -z-0" />
            
            {steps.map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-white rounded-3xl border border-border shadow-sm flex items-center justify-center mb-6 group-hover:border-primary transition-colors">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                  STEP {idx + 1}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted font-medium leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
