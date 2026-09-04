"use client";

import React from "react";
import { Container, Badge } from "../ui/index";
import { WavyLine } from "../ui/WavyLine";
import { Search, Filter, Video, FileText, ThumbsUp, ChevronRight } from "lucide-react";

export const ResourceShowcase = () => {
  return (
    <section className="bg-amber-50/20 py-6 lg:py-8">
      <Container className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 leading-tight">
            Less searching.{" "}
            <span className="relative inline-block text-orange-600 font-serif">
              More studying.
              <WavyLine className="absolute -bottom-2 left-0 w-full h-3" color="#EA580C" />
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium mt-2">
            Stop wasting hours on generic search results. Get exactly what matches your syllabus.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-amber-200/80 shadow-md overflow-hidden">
          {/* Mock UI Header */}
          <div className="border-b border-amber-100 p-4 sm:p-6 bg-amber-50/40 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600">
              <span>B.Tech CSE</span>
              <ChevronRight size={14} className="text-slate-400" />
              <span>Semester 5</span>
              <ChevronRight size={14} className="text-slate-400" />
              <span className="text-slate-900 font-bold">DBMS</span>
              <ChevronRight size={14} className="text-slate-400" />
              <span className="text-orange-600 font-bold">Unit 3</span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search in DBMS Unit 3..." 
                  className="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-full text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 w-48 sm:w-64 font-medium"
                />
              </div>
              <button className="p-2 border border-slate-200 rounded-full hover:bg-amber-50 transition-colors">
                <Filter size={18} className="text-slate-600" />
              </button>
            </div>
          </div>

          {/* Mock UI Content */}
          <div className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Unit 3: Transaction Management</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full">All</span>
                <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full border border-slate-200">Videos</span>
                <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full border border-slate-200">Notes</span>
                <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full border border-slate-200">PYQs</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <ResourceCard 
                type="Video"
                icon={Video}
                title="DBMS Transactions Explained"
                difficulty="Intermediate"
                helpful="1.2k"
                contributor="Aman Verma"
                color="text-blue-600"
              />
              <ResourceCard 
                type="PDF"
                icon={FileText}
                title="Previous Year Questions - Unit 3"
                difficulty="Exam Focused"
                helpful="842"
                contributor="Sneha Patel"
                color="text-rose-600"
              />
              <ResourceCard 
                type="Document"
                icon={FileText}
                title="Transaction Management Notes"
                difficulty="Comprehensive"
                helpful="623"
                contributor="Rohit Kumar"
                color="text-emerald-600"
              />
            </div>
          </div>
        </div>

      </Container>
    </section>
  );
};

const ResourceCard = ({ type, icon: Icon, title, difficulty, helpful, contributor, color }: any) => (
  <div className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-orange-400 transition-all cursor-pointer group shadow-2xs hover:shadow-md flex flex-col justify-between">
    <div>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Icon size={18} className={color} />
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{type}</span>
        </div>
        <div className="flex items-center gap-1 text-xs font-bold text-slate-600">
          <ThumbsUp size={14} className="text-orange-500" />
          {helpful}
        </div>
      </div>
      <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors leading-snug">{title}</h4>
    </div>

    <div className="flex items-center justify-between pt-3 border-t border-slate-100 mt-4 text-xs">
      <div className="text-slate-500 font-medium">
        by <span className="text-slate-900 font-bold">{contributor}</span>
      </div>
      <span className="font-bold px-2 py-0.5 bg-amber-50 text-amber-900 rounded border border-amber-200 text-[11px]">
        {difficulty}
      </span>
    </div>
  </div>
);
