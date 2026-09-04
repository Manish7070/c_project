"use client";

import React from "react";
import { Container, Button } from "../ui/index";
import { WavyLine } from "../ui/WavyLine";
import { ArrowRight, Sparkles, Mail } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section className="py-4 lg:py-5 bg-white">
      <Container className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-amber-50/90 via-orange-50/70 to-amber-100/60 border border-amber-200/80 rounded-3xl p-6 sm:p-8 lg:p-10 text-center relative overflow-hidden shadow-sm">
          
          {/* Subtle Background Accent */}
          <div className="absolute top-2 right-4 text-orange-200/50 pointer-events-none">
            <Sparkles size={70} />
          </div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 mb-3 leading-tight">
              Ready to ace your{" "}
              <span className="relative inline-block text-orange-600 font-serif">
                exams?
                <WavyLine className="absolute -bottom-1.5 left-0 w-full h-3" color="#EA580C" />
              </span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-medium mb-6 leading-relaxed">
              Join thousands of students who are already learning better with StudySync.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold text-base px-7 py-3 rounded-xl shadow-sm transition-all hover:scale-[1.02]">
                Get Started Now
              </Button>
              <Button size="lg" className="w-full sm:w-auto bg-white hover:bg-amber-50 text-slate-800 border-2 border-amber-200 font-bold text-base px-6 py-3 rounded-xl gap-2 transition-all hover:border-orange-300">
                Explore Resources <ArrowRight size={18} />
              </Button>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export const Newsletter = () => {
  return (
    <section className="pb-4 lg:pb-5 pt-0 bg-white">
      <Container className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl border border-amber-200/80 p-4 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-2xs">
          <div className="md:w-1/2">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1 flex items-center gap-2">
              <Mail size={20} className="text-orange-600" />
              Stay Updated
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">Subscribe to get updates on new resources, subjects, and features.</p>
          </div>
          <div className="md:w-1/2 w-full flex flex-col sm:flex-row gap-2.5">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 px-4 py-2.5 bg-amber-50/30 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 font-medium"
            />
            <Button className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-xl shadow-2xs shrink-0">
              Subscribe
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
