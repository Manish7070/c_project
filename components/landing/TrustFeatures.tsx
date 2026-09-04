"use client";

import React from "react";
import { features } from "../mock/landingData";
import { Container } from "../ui/index";
import { WavyLine } from "../ui/WavyLine";
import { cn } from "@/lib/utils";

export const TrustFeatures = () => {
  return (
    <section className="py-3 lg:py-4 bg-gradient-to-b from-background via-amber-50/30 to-amber-50/20">
      <Container className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-amber-200/80 shadow-xs p-4 sm:p-6 lg:p-7">
          
          <div className="text-center max-w-2xl mx-auto mb-4 lg:mb-5">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 leading-tight">
              Everything you need. <br />
              <span className="relative inline-block text-orange-600 font-serif">
                Organized around your syllabus.
                <WavyLine className="absolute -bottom-1.5 left-0 w-full h-2.5" color="#EA580C" />
              </span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 lg:gap-4">
            {features.map((feature, idx) => (
              <div 
                key={idx} 
                className="bg-gradient-to-b from-amber-50/60 to-white hover:from-amber-50 border border-amber-200/70 p-4 rounded-xl transition-all duration-200 hover:shadow-xs flex flex-col justify-between group"
              >
                <div>
                  <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center mb-2.5 transition-transform group-hover:scale-105 shadow-2xs border border-white", feature.color)}>
                    <feature.icon className={cn("w-5 h-5", feature.iconColor)} />
                  </div>
                  <h3 className="font-bold text-base text-slate-900 mb-1 leading-snug">{feature.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">{feature.description}</p>
                </div>

                <div className="mt-2.5 pt-2 border-t border-amber-100 flex items-center justify-between text-[11px] text-orange-600 font-bold">
                  <span>Explore Feature</span>
                  <span>→</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
};
