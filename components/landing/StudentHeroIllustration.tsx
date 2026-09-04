"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, FileText, Database, Code, Cpu, CheckCircle } from "lucide-react";

export const StudentHeroIllustration: React.FC = () => {
  return (
    <div className="relative w-full max-w-xl lg:max-w-2xl mx-auto flex items-center justify-center p-2 sm:p-4">
      {/* Background Soft Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-amber-200/40 via-orange-100/30 to-amber-50/60 rounded-[48px] blur-3xl -z-10 transform scale-110" />

      {/* Main Illustration Container */}
      <div className="relative w-full bg-gradient-to-b from-white/95 to-amber-50/70 backdrop-blur-md rounded-[36px] border border-amber-200/60 shadow-2xl p-4 sm:p-6 lg:p-8 overflow-visible">
        
        {/* Vector Room & Student Graphic */}
        <div className="relative w-full aspect-[16/11] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/60 shadow-inner flex items-center justify-center">
          
          {/* Room Window Background */}
          <svg className="w-full h-full object-cover" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Background Wall */}
            <rect width="600" height="400" fill="#E2E8F0" />
            <rect x="0" y="0" width="600" height="300" fill="#CBD5E1" fillOpacity="0.4" />

            {/* Window Frame */}
            <rect x="30" y="20" width="180" height="260" rx="4" fill="#FFFFFF" fillOpacity="0.9" stroke="#94A3B8" strokeWidth="4" />
            <line x1="120" y1="20" x2="120" y2="280" stroke="#94A3B8" strokeWidth="3" />
            <line x1="30" y1="150" x2="210" y2="150" stroke="#94A3B8" strokeWidth="3" />
            {/* Window Glass Sunlight */}
            <rect x="34" y="24" width="82" height="122" fill="#BAE6FD" fillOpacity="0.4" />
            <rect x="124" y="24" width="82" height="122" fill="#BAE6FD" fillOpacity="0.4" />

            {/* Indoor Plant (Left of Window) */}
            <path d="M15 340H45L40 390H20L15 340Z" fill="#C2410C" />
            <path d="M30 340V240" stroke="#15803D" strokeWidth="4" strokeLinecap="round" />
            <path d="M30 290C15 270 5 200 5 200C5 200 20 200 30 270Z" fill="#22C55E" />
            <path d="M30 270C45 250 55 180 55 180C55 180 40 180 30 250Z" fill="#16A34A" />

            {/* Wooden Desk Surface */}
            <rect x="40" y="290" width="520" height="22" rx="4" fill="#D97706" />
            <rect x="40" y="312" width="520" height="6" fill="#B45309" />
            {/* Desk Legs */}
            <rect x="70" y="318" width="16" height="82" fill="#78350F" />
            <rect x="514" y="318" width="16" height="82" fill="#78350F" />

            {/* Desk Items: Pencil Holder */}
            <rect x="110" y="245" width="28" height="45" rx="4" fill="#1E3A8A" />
            <line x1="117" y1="225" x2="117" y2="245" stroke="#F59E0B" strokeWidth="4" strokeLinecap="round" />
            <line x1="125" y1="220" x2="125" y2="245" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" />
            <line x1="131" y1="230" x2="131" y2="245" stroke="#10B981" strokeWidth="4" strokeLinecap="round" />

            {/* Desk Items: Potted Desk Plant */}
            <path d="M165 255H195L190 290H170L165 255Z" fill="#EA580C" />
            <circle cx="180" cy="245" r="14" fill="#22C55E" />
            <circle cx="172" cy="240" r="10" fill="#16A34A" />

            {/* Desk Items: Stack of Textbooks */}
            <rect x="420" y="272" width="90" height="18" rx="3" fill="#D97706" />
            <rect x="415" y="254" width="95" height="18" rx="3" fill="#2563EB" />
            <rect x="425" y="236" width="85" height="18" rx="3" fill="#059669" />
            <rect x="430" y="218" width="75" height="18" rx="3" fill="#DC2626" />

            {/* Coffee Mug */}
            <rect x="375" y="255" width="24" height="35" rx="4" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
            <path d="M399 265C405 265 405 280 399 280" stroke="#CBD5E1" strokeWidth="3" fill="none" />

            {/* Laptop Base & Open Screen */}
            <rect x="235" y="210" width="140" height="80" rx="6" fill="#475569" />
            <rect x="240" y="215" width="130" height="70" rx="4" fill="#0F172A" />
            {/* Screen UI mock lines */}
            <rect x="250" y="225" width="50" height="6" rx="3" fill="#38BDF8" />
            <rect x="250" y="237" width="90" height="4" rx="2" fill="#94A3B8" />
            <rect x="250" y="246" width="75" height="4" rx="2" fill="#64748B" />
            <rect x="250" y="255" width="60" height="4" rx="2" fill="#64748B" />
            <circle cx="340" cy="235" r="10" fill="#EA580C" />
            {/* Keyboard base */}
            <path d="M210 290L230 284H380L400 290H210Z" fill="#94A3B8" />

            {/* Student Character: Body (Yellow Hoodie) */}
            <path d="M260 290C260 230 280 200 305 200C330 200 350 230 350 290H260Z" fill="#F59E0B" />
            <path d="M285 200C285 200 298 225 305 225C312 225 325 200 325 200H285Z" fill="#D97706" />

            {/* Student Head & Smile Face */}
            <circle cx="305" cy="165" r="28" fill="#FDBA74" />
            {/* Dark Hair */}
            <path d="M278 165C278 140 290 132 305 132C322 132 332 140 332 165C332 152 322 138 305 138C288 138 278 152 278 165Z" fill="#1E293B" />
            <path d="M280 152C280 140 292 135 305 135C318 135 328 142 328 152C320 142 310 140 298 142C288 144 280 152 280 152Z" fill="#0F172A" />

            {/* Eyes & Smile */}
            <circle cx="295" cy="165" r="2.5" fill="#1E293B" />
            <circle cx="315" cy="165" r="2.5" fill="#1E293B" />
            <path d="M298 175C298 180 312 180 312 175" stroke="#C2410C" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>

        {/* Overlay Interactive Subject Badges (Image 3 Style) */}
        
        {/* Top Right Floating Badge: Data Structures */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [-8, 8, -8] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-3 -right-2 sm:right-4 bg-white px-4 py-3 rounded-2xl shadow-xl border border-blue-200 flex items-center gap-3 z-30"
        >
          <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
            <BookOpen size={18} />
          </div>
          <div>
            <h4 className="font-bold text-xs sm:text-sm text-slate-900 leading-tight">Data Structures</h4>
            <p className="text-[11px] text-slate-500 font-semibold">Unit 3 · Trees & Graphs</p>
          </div>
        </motion.div>

        {/* Top Left Floating Badge: Operating Systems */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [8, -8, 8] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-6 -left-3 sm:left-4 bg-white px-4 py-3 rounded-2xl shadow-xl border border-emerald-200 flex items-center gap-3 z-30"
        >
          <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
            <Cpu size={18} />
          </div>
          <div>
            <h4 className="font-bold text-xs sm:text-sm text-slate-900 leading-tight">Operating Systems</h4>
            <p className="text-[11px] text-slate-500 font-semibold">Unit 2 · Processes & Scheduling</p>
          </div>
        </motion.div>

        {/* Bottom Right Floating Badge: DBMS */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [-6, 6, -6] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-4 right-6 bg-white px-4 py-3 rounded-2xl shadow-xl border border-purple-200 flex items-center gap-3 z-30"
        >
          <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-100">
            <Database size={18} />
          </div>
          <div>
            <h4 className="font-bold text-xs sm:text-sm text-slate-900 leading-tight">DBMS</h4>
            <p className="text-[11px] text-slate-500 font-semibold">Unit 1 · Relational Models</p>
          </div>
        </motion.div>

      </div>
    </div>
  );
};
