"use client";

import React from "react";
import { testimonials } from "../mock/landingData";
import { Container } from "../ui/index";
import { WavyLine } from "../ui/WavyLine";
import { Quote, Heart } from "lucide-react";

export const TestimonialsSection = () => {
  return (
    <section className="py-8 lg:py-10 bg-white">
      <Container className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-orange-600 text-sm font-bold uppercase tracking-wider mb-2">
            <span>Loved by students</span>
            <Heart size={16} className="fill-orange-500 text-orange-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 leading-tight">
            What our campus{" "}
            <span className="relative inline-block text-orange-600 font-serif">
              says about us.
              <WavyLine className="absolute -bottom-2 left-0 w-full h-3" color="#EA580C" />
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, idx) => (
            <div 
              key={idx} 
              className="bg-amber-50/30 rounded-3xl p-6 sm:p-8 border border-amber-200/70 shadow-xs hover:shadow-md transition-shadow relative flex flex-col justify-between"
            >
              <Quote className="absolute top-6 right-6 text-orange-200/60 w-12 h-12 -z-0" />
              
              <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed italic mb-8 relative z-10">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3.5 relative z-10 pt-4 border-t border-amber-200/60">
                <div className="w-11 h-11 bg-amber-100 text-amber-900 rounded-full flex items-center justify-center font-bold text-base shrink-0 border border-amber-200">
                  {t.avatar || t.author.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-base text-slate-900">{t.author}</div>
                  <div className="text-xs sm:text-sm text-slate-500 font-semibold">{t.major}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
};
