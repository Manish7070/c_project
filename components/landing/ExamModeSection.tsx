"use client";

import React from "react";
import { Container, Button } from "../ui/index";
import { WavyLine } from "../ui/WavyLine";
import { Sparkles, Star, Clock, ArrowRight } from "lucide-react";

export const ExamModeSection = () => {
  return (
    <section className="py-8 lg:py-10 bg-white">
      <Container className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-xl flex flex-col lg:flex-row items-center">
          
          {/* Left Dark Column */}
          <div className="flex-1 p-8 sm:p-12 lg:p-14 text-white">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-orange-500/20 rounded-full text-orange-400 font-bold text-xs sm:text-sm mb-5 border border-orange-500/30">
              <Sparkles size={16} />
              <span>Exam Prep Special</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-5 leading-tight">
              Exams coming up? <br />
              <span className="relative inline-block text-orange-400 font-serif">
                Find what matters most.
                <WavyLine className="absolute -bottom-2 left-0 w-full h-3" color="#FB923C" />
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 font-normal mb-8 leading-relaxed max-w-lg">
              Quickly switch to exam-focused mode: access formula sheets, previous year question papers, and high-yield notes verified by toppers.
            </p>

            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-slate-950 font-bold text-base px-8 py-3.5 rounded-xl gap-2 shadow-md">
              Try Exam Mode <ArrowRight size={18} />
            </Button>
          </div>
          
          {/* Right Card Column */}
          <div className="flex-1 w-full p-8 sm:p-12 lg:p-14 lg:pl-0">
            <div className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-6 sm:p-8 shadow-inner">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <div>
                  <div className="text-orange-400 text-xs font-bold uppercase tracking-wider mb-1">Quick Revision Mode</div>
                  <h3 className="text-xl lg:text-2xl font-bold text-white">High Yield Study Sets</h3>
                </div>
                <div className="w-11 h-11 bg-orange-500/20 text-orange-400 rounded-2xl flex items-center justify-center border border-orange-500/30">
                  <Clock size={24} />
                </div>
              </div>
              
              <div className="space-y-3.5">
                <ExamResource title="Previous Year Questions (PYQs)" rating={5} />
                <ExamResource title="Unit 1-5 Formula Sheets" rating={5} />
                <ExamResource title="Last 24 Hours Revision Notes" rating={4} />
                <ExamResource title="Important Question Bank" rating={5} />
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

const ExamResource = ({ title, rating }: { title: string; rating: number }) => (
  <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between hover:bg-white/10 transition-colors">
    <span className="text-white font-semibold text-sm sm:text-base">{title}</span>
    <div className="flex gap-1.5">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          size={14} 
          className={i < rating ? "text-orange-400 fill-orange-400" : "text-white/20"} 
        />
      ))}
    </div>
  </div>
);
