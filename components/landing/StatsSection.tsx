"use client";

import React from "react";
import { stats } from "../mock/landingData";
import { Container } from "../ui/index";
import { WavyLine } from "../ui/WavyLine";
import { cn } from "@/lib/utils";

export const StatsSection = () => {
  return (
    <section className="py-3 lg:py-4 bg-amber-50/40 border-y border-amber-200/60">
      <Container className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-xl mx-auto mb-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 leading-tight">
            Making learning better,{" "}
            <span className="relative inline-block text-orange-600 font-serif">
              together.
              <WavyLine className="absolute -bottom-1.5 left-0 w-full h-2.5" color="#EA580C" />
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">
            A growing community of learners and contributors.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="bg-white p-4 sm:p-5 rounded-xl border border-amber-200/80 shadow-2xs flex flex-col items-center text-center hover:shadow-xs transition-all"
            >
              <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center mb-2 text-white shadow-2xs", stat.color)}>
                <stat.icon className="w-5 h-5" />
              </div>
              <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-0.5">
                {stat.value}
              </div>
              <div className="text-xs text-slate-600 font-bold tracking-wider uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
};
