import React from "react";
import { Container, Button, Badge } from "../ui/index";
import { Sparkles, Star, ChevronRight, Clock } from "lucide-react";

export const ExamModeSection = () => {
  return (
    <Container className="py-24">
      <div className="bg-foreground rounded-[60px] overflow-hidden flex flex-col lg:flex-row items-center">
        <div className="flex-1 p-8 md:p-16 text-white">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full text-primary font-bold text-xs uppercase tracking-widest mb-8">
            <Sparkles size={14} />
            P1 Roadmap Feature
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Exams coming up? <br />
            <span className="text-primary">Find what matters most.</span>
          </h2>
          <p className="text-lg text-white/60 font-medium mb-10 leading-relaxed max-w-lg">
            Quickly switch to exam-focused resources and prioritize revision material, previous-year questions, and high-value resources.
          </p>
          <Button size="lg" className="w-full sm:w-auto">
            Try Exam Mode
          </Button>
        </div>
        
        <div className="flex-1 w-full p-8 md:p-16 lg:pl-0">
          <div className="bg-white/10 backdrop-blur-md rounded-[40px] border border-white/10 p-8 shadow-2xl">
             <div className="flex items-center justify-between mb-8">
                <div>
                   <div className="text-primary text-[10px] font-bold uppercase tracking-widest mb-1">Active View</div>
                   <h3 className="text-2xl font-bold text-white">Exam Mode</h3>
                </div>
                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white">
                   <Clock size={24} />
                </div>
             </div>
             
             <div className="space-y-4">
                <ExamResource title="Previous Year Questions" rating={4} />
                <ExamResource title="Revision Notes" rating={5} />
                <ExamResource title="Important Concepts" rating={4} />
                <ExamResource title="Quick Revision Video" rating={5} />
             </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

const ExamResource = ({ title, rating }: { title: string; rating: number }) => (
  <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between hover:bg-white/10 transition-colors">
    <span className="text-white font-bold">{title}</span>
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          size={14} 
          className={i < rating ? "text-primary fill-primary" : "text-white/20"} 
        />
      ))}
    </div>
  </div>
);
