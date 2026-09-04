"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/index";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { WavyLine } from "../ui/WavyLine";
import { StudentHeroIllustration } from "./StudentHeroIllustration";

export const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-6 lg:pt-32 lg:pb-8 overflow-hidden bg-gradient-to-b from-amber-50/50 via-orange-50/20 to-background">
      {/* Soft Glow Ambient Elements */}
      <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-amber-200/30 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[450px] h-[450px] bg-orange-100/30 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        
        {/* Left Column: Headline & Action Controls */}
        <div className="flex-1 text-center lg:text-left max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/90 text-amber-900 text-xs sm:text-sm font-bold mb-5 border border-amber-200/80 shadow-xs">
              <Sparkles size={15} className="text-orange-600" />
              <span>Hey Friends! Syllabus-Aligned Learning</span>
            </div>

            {/* Serif Headline with Wavy Underline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-serif tracking-tight text-slate-900 leading-[1.12] mb-5">
              Find the right resources. <br />
              <span className="relative inline-block text-orange-600 font-serif">
                For your syllabus.
                <WavyLine className="absolute -bottom-2 left-0 w-full h-3.5" color="#EA580C" />
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 mb-7 leading-relaxed font-normal">
              StudySync helps you discover syllabus-aligned resources shared by students and verified by your university community — so you spend less time searching and more time mastering.
            </p>

            {/* Prominent Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-7">
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold text-base sm:text-lg shadow-md shadow-orange-500/20 px-8 py-3 rounded-xl transition-all hover:scale-[1.02]">
                Explore Resources <ArrowRight size={18} className="ml-1.5" />
              </Button>
              <Button variant="secondary" size="lg" className="w-full sm:w-auto bg-white hover:bg-amber-50 text-slate-800 border-2 border-amber-200 font-bold text-base sm:text-lg px-7 py-3 rounded-xl shadow-xs transition-all hover:border-orange-300">
                Contribute Now
              </Button>
            </div>

            {/* Trust Pill Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm lg:text-base font-semibold text-slate-700">
              <TrustIndicator label="Syllabus Focused" />
              <TrustIndicator label="Student Powered" />
              <TrustIndicator label="Admin Approved" />
            </div>
          </motion.div>
        </div>

        {/* Right Column: High-Fidelity Student Illustration */}
        <div className="flex-1 w-full flex justify-center">
          <StudentHeroIllustration />
        </div>

      </div>
    </section>
  );
};

const TrustIndicator = ({ label }: { label: string }) => (
  <div className="flex items-center gap-2 bg-white/90 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-amber-200/80 shadow-2xs">
    <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
    <span>{label}</span>
  </div>
);
