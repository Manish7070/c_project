"use client";

import React from "react";
import { badges } from "../mock/landingData";
import { Container } from "../ui/index";
import { WavyLine } from "../ui/WavyLine";

export const ReputationSection = () => {
  return (
    <section className="py-6 lg:py-8 bg-white border-t border-amber-100">
      <Container className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 leading-tight">
            Your contribution{" "}
            <span className="relative inline-block text-orange-600 font-serif">
              matters.
              <WavyLine className="absolute -bottom-2 left-0 w-full h-3" color="#EA580C" />
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium mt-2">
            StudySync rewards meaningful academic contributions that actually help students succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {badges.map((badge, idx) => (
            <div 
              key={idx} 
              className="bg-amber-50/30 rounded-3xl border border-amber-200/70 p-6 text-center hover:shadow-md transition-all group hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-white rounded-2xl border border-amber-200 flex items-center justify-center mx-auto mb-5 shadow-2xs group-hover:scale-105 transition-transform">
                <badge.icon className={`w-7 h-7 ${badge.color}`} />
              </div>
              <h4 className="text-lg lg:text-xl font-bold text-slate-900 mb-2">{badge.title}</h4>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">{badge.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-8 bg-amber-50/50 rounded-2xl p-6 border border-amber-200/60 flex flex-wrap justify-center gap-8 text-center">
          <div className="flex flex-col gap-0.5">
            <span className="text-2xl font-black text-orange-600">+10 pts</span>
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Approved Resource</span>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-2xl font-black text-orange-600">+2 pts</span>
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Helpful Vote</span>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-2xl font-black text-orange-600">+5 pts</span>
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Subject Mastery</span>
          </div>
        </div>

      </Container>
    </section>
  );
};
