"use client";

import React from "react";
import { contributors } from "../mock/landingData";
import { Container, Button } from "../ui/index";
import { WavyLine } from "../ui/WavyLine";
import { Trophy, ArrowRight, Star, Award } from "lucide-react";

export const ContributorsSection = () => {
  return (
    <section className="py-3 lg:py-4 bg-white">
      <Container className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch">
          
          {/* Left Column: Top Contributors List */}
          <div className="flex-1">
            <div className="mb-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 leading-tight">
                Top{" "}
                <span className="relative inline-block text-orange-600 font-serif">
                  Contributors
                  <WavyLine className="absolute -bottom-1.5 left-0 w-full h-2.5" color="#EA580C" />
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
                Recognizing our most active and helpful student contributors.
              </p>
            </div>

            <div className="space-y-2.5">
              {contributors.map((c, idx) => (
                <div 
                  key={c.id} 
                  className="bg-gradient-to-r from-amber-50/40 via-amber-50/20 to-white hover:from-amber-50/70 rounded-xl border border-amber-200/70 p-3 flex items-center justify-between transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-5 text-center text-sm font-bold text-slate-400">{idx + 1}</div>
                    
                    {/* User Avatar Circle */}
                    <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-500 to-orange-600 text-white font-bold flex items-center justify-center text-sm shadow-2xs">
                      {c.avatar || c.name.charAt(0)}
                    </div>
                    
                    <div>
                      <div className="font-bold text-sm text-slate-900">{c.name}</div>
                      <div className="text-xs text-slate-500 font-medium">{c.username}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="flex items-center gap-1 bg-amber-100/90 px-2.5 py-1 rounded-full text-amber-900 text-xs font-bold shadow-2xs">
                      <Star size={13} className="text-amber-600 fill-amber-500" />
                      <span>{c.points} pts</span>
                    </div>
                    {idx === 0 && <Award size={18} className="text-amber-500 hidden sm:block" />}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Callout Card with Trophy */}
          <div className="flex-1">
            <div className="h-full bg-gradient-to-br from-amber-50/80 via-orange-50/50 to-amber-100/40 rounded-2xl border border-amber-200 p-6 sm:p-8 flex flex-col justify-center items-center text-center shadow-2xs">
              
              <div className="relative w-16 h-16 bg-white rounded-2xl shadow-xs border border-amber-200 flex items-center justify-center mb-4">
                <Trophy size={32} className="text-amber-500" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mb-2 leading-tight">
                Be a part of something <br />
                <span className="text-orange-600 font-serif">Bigger</span>
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 max-w-sm mb-5 leading-relaxed font-medium">
                Share quality study resources, help your peers, earn points, badges, and campus recognition.
              </p>

              <Button size="md" className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-xl gap-2 shadow-2xs">
                Start Contributing <ArrowRight size={16} />
              </Button>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
