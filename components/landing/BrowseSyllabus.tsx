"use client";

import React from "react";
import { subjects } from "../mock/landingData";
import { Container, Button } from "../ui/index";
import { WavyLine } from "../ui/WavyLine";
import { ChevronRight, FileCode, Database, Cpu, Network } from "lucide-react";

const subjectIcons = [
  { icon: FileCode, bannerBg: "from-blue-500 to-indigo-600", tag: "Core CS" },
  { icon: Cpu, bannerBg: "from-emerald-500 to-teal-600", tag: "Systems" },
  { icon: Database, bannerBg: "from-purple-500 to-pink-600", tag: "Data & Storage" },
  { icon: Network, bannerBg: "from-amber-500 to-orange-600", tag: "Networking" },
];

export const BrowseSyllabus = () => {
  return (
    <section className="py-3 lg:py-4 bg-amber-50/20">
      <Container className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center">
          
          {/* Left Text & Controls */}
          <div className="lg:w-1/3 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 leading-tight mb-2">
              Browse resources by <br />
              <span className="relative inline-block text-orange-600 font-serif">
                your syllabus
                <WavyLine className="absolute -bottom-1.5 left-0 w-full h-2.5" color="#EA580C" />
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed font-medium">
              Dive into subjects, units, notes, question papers, syllabus, and curated video links.
            </p>
            <Button size="sm" className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-2xs gap-1.5">
              Browse All Subjects <ChevronRight size={16} />
            </Button>
          </div>
          
          {/* Right Subject Cards Carousel Grid */}
          <div className="lg:w-2/3 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-3.5">
            {subjects.map((subject, idx) => {
              const meta = subjectIcons[idx % subjectIcons.length];
              const IconComp = meta.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-white rounded-2xl border border-amber-200/70 shadow-2xs hover:shadow-xs transition-all overflow-hidden group flex flex-col justify-between"
                >
                  {/* Card Top Banner */}
                  <div className={`h-12 bg-gradient-to-r ${meta.bannerBg} p-3 flex items-center justify-between text-white relative`}>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 backdrop-blur-xs px-2 py-0.5 rounded-full">
                      {meta.tag}
                    </span>
                    <IconComp size={18} className="opacity-90" />
                  </div>

                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base font-bold text-slate-900 mb-1 leading-snug">{subject.name}</h3>
                      <p className="text-[11px] text-slate-500 font-medium mb-3">Syllabus Aligned Notes</p>
                    </div>

                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                      <span className="text-slate-600">{subject.units} Units</span>
                      <span className="font-bold text-orange-700 bg-orange-50 px-2 py-0.5 rounded border border-orange-200/80 text-[11px]">
                        {subject.resources} Notes & PYQs
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </Container>
    </section>
  );
};
