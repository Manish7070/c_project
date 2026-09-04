"use client";

import React from "react";
import { Container } from "../ui/index";
import { WavyLine } from "../ui/WavyLine";
import { Search, FileText, GraduationCap, Share2, ArrowRight } from "lucide-react";

const steps = [
  {
    step: 1,
    icon: Search,
    title: "Browse",
    description: "Explore subjects and units from your syllabus hierarchy.",
    bgColor: "bg-purple-50 text-purple-700 border-purple-200",
  },
  {
    step: 2,
    icon: FileText,
    title: "Find Resources",
    description: "Search and filter the best notes and PYQs shared by peers.",
    bgColor: "bg-orange-50 text-orange-700 border-orange-200",
  },
  {
    step: 3,
    icon: GraduationCap,
    title: "Use & Learn",
    description: "Study better for your exams with verified course material.",
    bgColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    step: 4,
    icon: Share2,
    title: "Contribute",
    description: "Share quality resources and earn reputation badges.",
    bgColor: "bg-blue-50 text-blue-700 border-blue-200",
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-3 lg:py-4 bg-white">
      <Container className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-amber-50/30 rounded-2xl p-4 sm:p-6 border border-amber-200/60 shadow-xs">
          
          <div className="text-center max-w-xl mx-auto mb-4 sm:mb-5">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 leading-tight">
              How StudySync{" "}
              <span className="relative inline-block text-orange-600 font-serif">
                works?
                <WavyLine className="absolute -bottom-1.5 left-0 w-full h-2.5" color="#EA580C" />
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
              Study. Share. Succeed.
            </p>
          </div>

          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {steps.map((item, idx) => (
              <div key={idx} className="relative z-10 bg-white p-4.5 rounded-xl border border-amber-100 shadow-2xs flex flex-col items-center text-center group hover:shadow-xs transition-all">
                
                {/* Step Icon Badge */}
                <div className={`w-12 h-12 rounded-xl ${item.bgColor} border flex items-center justify-center mb-3 relative transition-transform group-hover:scale-105 shadow-2xs`}>
                  <item.icon size={22} />
                  <span className="absolute -top-2 -right-2 w-5 h-5 bg-slate-900 text-white rounded-full text-[10px] font-bold flex items-center justify-center border-2 border-white">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-1.5">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">{item.description}</p>
                
                {idx < steps.length - 1 && (
                  <ArrowRight size={18} className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 text-amber-400 z-20" />
                )}
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
};
