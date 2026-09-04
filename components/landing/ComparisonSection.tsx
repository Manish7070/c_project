"use client";

import React from "react";
import { Container } from "../ui/index";
import { WavyLine } from "../ui/WavyLine";
import { X, Check } from "lucide-react";

export const ComparisonSection = () => {
  return (
    <section className="py-8 lg:py-10 bg-amber-50/20">
      <Container className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 leading-tight">
            Why search{" "}
            <span className="relative inline-block text-orange-600 font-serif">
              everywhere?
              <WavyLine className="absolute -bottom-2 left-0 w-full h-3" color="#EA580C" />
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium mt-2">
            See how StudySync saves hours of unstructured searching.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          
          {/* Generic Search Card */}
          <div className="bg-white/90 rounded-3xl border border-slate-200 p-8 shadow-xs">
            <div className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">Old Way</div>
            <h3 className="text-xl lg:text-2xl font-bold text-slate-700 mb-6">Generic Internet Search</h3>
            <ul className="space-y-4">
              <ComparisonItem icon={X} text="Thousands of unverified search results" isPositive={false} />
              <ComparisonItem icon={X} text="Zero alignment with your college syllabus" isPositive={false} />
              <ComparisonItem icon={X} text="Outdated notes and random pdf quality" isPositive={false} />
              <ComparisonItem icon={X} text="Wasted hours finding relevant topics" isPositive={false} />
              <ComparisonItem icon={X} text="No peer feedback or community upvotes" isPositive={false} />
            </ul>
          </div>
          
          {/* StudySync Card */}
          <div className="bg-white rounded-3xl border-2 border-orange-500 p-8 shadow-md relative">
            <div className="absolute -top-3.5 right-8 bg-gradient-to-r from-orange-600 to-amber-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-2xs">
              Better Way
            </div>
            <div className="text-xs font-bold uppercase text-orange-600 tracking-wider mb-2">StudySync</div>
            <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-6">Syllabus-Centric Platform</h3>
            <ul className="space-y-4">
              <ComparisonItem icon={Check} text="Exact syllabus-aligned notes & PYQs" isPositive={true} />
              <ComparisonItem icon={Check} text="Curated & verified by university seniors" isPositive={true} />
              <ComparisonItem icon={Check} text="Upvoted resources filtered by unit & topic" isPositive={true} />
              <ComparisonItem icon={Check} text="Save 45+ minutes per study session" isPositive={true} />
              <ComparisonItem icon={Check} text="Contributor points and recognition" isPositive={true} />
            </ul>
          </div>

        </div>
      </Container>
    </section>
  );
};

const ComparisonItem = ({ icon: Icon, text, isPositive }: { icon: any; text: string; isPositive: boolean }) => (
  <li className="flex items-center gap-3.5">
    <div className={`w-6 h-6 rounded-full ${isPositive ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-600'} flex items-center justify-center shrink-0`}>
      <Icon size={14} strokeWidth={3} />
    </div>
    <span className={`text-sm sm:text-base font-semibold ${isPositive ? 'text-slate-900' : 'text-slate-500'}`}>{text}</span>
  </li>
);
