import React from "react";
import { subjects } from "../mock/landingData";
import { Container, Button } from "../ui/index";
import { ChevronRight, ArrowLeft, ArrowRight, BookOpen, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

export const BrowseSyllabus = () => {
  return (
    <Container className="py-24">
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        <div className="lg:w-1/3">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
            Browse resources by <br />
            <span className="text-primary">your syllabus</span>
          </h2>
          <p className="text-lg text-muted font-medium mb-8 leading-relaxed">
            Dive into subjects, units, videos, notes, previous-year questions, websites and more.
          </p>
          <Button variant="outline" className="gap-2">
            Browse All Subjects <ChevronRight size={18} />
          </Button>
          
          <div className="flex gap-4 mt-12">
             <button className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted hover:border-primary hover:text-primary transition-all">
                <ArrowLeft size={20} />
             </button>
             <button className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted hover:border-primary hover:text-primary transition-all">
                <ArrowRight size={20} />
             </button>
          </div>
        </div>
        
        <div className="lg:w-2/3 w-full overflow-x-auto pb-8 -mx-6 px-6 lg:mx-0 lg:px-0 scrollbar-hide">
          <div className="flex gap-6">
            {subjects.map((subject, idx) => (
              <div 
                key={idx} 
                className="flex-shrink-0 w-[280px] md:w-[320px] bg-white rounded-3xl border border-border p-8 hover:shadow-lg transition-all group"
              >
                <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110", subject.color)}>
                  <BookOpen className="w-7 h-7 text-foreground/70" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-6">{subject.name}</h3>
                <div className="flex items-center gap-6">
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-foreground">{subject.units}</span>
                    <span className="text-xs font-bold text-muted uppercase tracking-wider">Units</span>
                  </div>
                  <div className="w-[1px] h-8 bg-border" />
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-foreground">{subject.resources}</span>
                    <span className="text-xs font-bold text-muted uppercase tracking-wider">Resources</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};
