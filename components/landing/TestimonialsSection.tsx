import React from "react";
import { testimonials } from "../mock/landingData";
import { Container, SectionHeading } from "../ui/index";
import { Quote, ArrowLeft, ArrowRight } from "lucide-react";

export const TestimonialsSection = () => {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="flex items-end justify-between mb-12">
          <SectionHeading 
            title="Loved by students."
            align="left"
            className="mb-0"
          />
          <div className="flex gap-4 hidden md:flex">
             <button className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted hover:border-primary hover:text-primary transition-all">
                <ArrowLeft size={20} />
             </button>
             <button className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted hover:border-primary hover:text-primary transition-all">
                <ArrowRight size={20} />
             </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-muted-background/30 rounded-[40px] p-10 relative">
              <Quote className="absolute top-8 right-8 text-primary/10 w-16 h-16 -z-0" />
              <div className="relative z-10">
                <p className="text-lg md:text-xl font-medium text-foreground mb-10 leading-relaxed italic">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center font-bold text-primary shadow-sm">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-foreground">{t.author}</div>
                    <div className="text-xs font-bold text-muted uppercase tracking-wider">{t.major}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
