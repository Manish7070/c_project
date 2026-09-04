"use client";

import React from "react";
import { Container } from "../ui/index";
import { WavyLine } from "../ui/WavyLine";
import { UserPlus, Search, ShieldCheck, CheckCircle, Share2 } from "lucide-react";

export const ModerationSection = () => {
  return (
    <section className="bg-white py-6 lg:py-8">
      <Container className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 leading-tight">
            Not every link belongs in{" "}
            <span className="relative inline-block text-orange-600 font-serif">
              the library.
              <WavyLine className="absolute -bottom-2 left-0 w-full h-3" color="#EA580C" />
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium mt-2">
            Every submitted resource goes through moderation before it becomes part of the approved study collection.
          </p>
        </div>
        
        <div className="bg-amber-50/20 rounded-3xl p-6 sm:p-8 border border-amber-100 shadow-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-center">
            <FlowStep icon={UserPlus} label="Student Submits" color="bg-blue-50 border-blue-200" iconColor="text-blue-600" />
            <FlowStep icon={Search} label="Resource Reviewed" color="bg-amber-50 border-amber-200" iconColor="text-amber-600" />
            <FlowStep icon={ShieldCheck} label="Admin Approves" color="bg-emerald-50 border-emerald-200" iconColor="text-emerald-600" />
            <FlowStep icon={Share2} label="Community Discovers" color="bg-purple-50 border-purple-200" iconColor="text-purple-600" />
            <FlowStep icon={CheckCircle} label="Marked Helpful" color="bg-rose-50 border-rose-200" iconColor="text-rose-600" />
          </div>
          
          <div className="mt-8 pt-6 border-t border-amber-100 flex flex-wrap justify-center gap-6">
            <StatusBadge status="PENDING" bg="bg-amber-100 text-amber-900 border-amber-300" />
            <StatusBadge status="APPROVED" bg="bg-emerald-100 text-emerald-900 border-emerald-300" />
            <StatusBadge status="REJECTED" bg="bg-rose-100 text-rose-900 border-rose-300" />
          </div>
        </div>

      </Container>
    </section>
  );
};

const FlowStep = ({ icon: Icon, label, color, iconColor }: any) => (
  <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs flex flex-col items-center hover:shadow-md transition-shadow">
    <div className={`w-14 h-14 rounded-2xl ${color} border flex items-center justify-center mb-3`}>
      <Icon className={`w-7 h-7 ${iconColor}`} />
    </div>
    <span className="text-xs sm:text-sm font-bold text-slate-800 tracking-wide">{label}</span>
  </div>
);

const StatusBadge = ({ status, bg }: { status: string; bg: string }) => (
  <div className="flex items-center gap-3 bg-white border border-slate-200 px-5 py-2.5 rounded-xl shadow-2xs">
    <span className={`text-xs font-black px-3 py-1 rounded-md border ${bg}`}>{status}</span>
    <span className="text-xs font-bold text-slate-500 uppercase">Verification Tag</span>
  </div>
);
