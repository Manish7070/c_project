"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/index";
import { ArrowRight, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-accent-purple/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
              Find the right resources. <br />
              <span className="text-primary">For your syllabus.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed font-medium">
              StudySync helps students discover syllabus-aligned academic resources shared by students and approved by their university community.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
              <Button size="lg" className="w-full sm:w-auto gap-2">
                Explore Resources <ArrowRight size={20} />
              </Button>
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                Contribute a Resource
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
              <TrustIndicator label="Syllabus Focused" />
              <TrustIndicator label="Student Powered" />
              <TrustIndicator label="Admin Approved" />
            </div>
          </motion.div>
        </div>

        <div className="flex-1 relative w-full max-w-xl">
          {/* Main Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10"
          >
            <div className="bg-white p-4 rounded-[40px] shadow-2xl border border-border aspect-square flex items-center justify-center overflow-hidden">
               <div className="relative w-full h-full bg-muted-background/50 rounded-[32px] flex items-center justify-center p-8">
                 {/* Abstract academic illustration */}
                 <div className="relative z-10 w-48 h-48 md:w-64 md:h-64 bg-white rounded-3xl shadow-xl flex flex-col p-4 border border-border">
                    <div className="w-1/2 h-4 bg-muted-background rounded mb-4" />
                    <div className="w-full h-2 bg-muted-background rounded mb-2" />
                    <div className="w-full h-2 bg-muted-background rounded mb-2" />
                    <div className="w-3/4 h-2 bg-muted-background rounded mb-6" />
                    
                    <div className="mt-auto flex items-center gap-2">
                       <div className="w-8 h-8 rounded-full bg-primary/20" />
                       <div className="flex-1">
                          <div className="w-3/4 h-2 bg-muted-background rounded mb-1" />
                          <div className="w-1/2 h-2 bg-muted-background rounded" />
                       </div>
                    </div>
                 </div>
                 
                 {/* Floating Cards */}
                 <FloatingCard 
                    title="Data Structures" 
                    subtitle="Unit 3 · Trees" 
                    delay={0}
                    className="top-0 -left-4 md:-left-8"
                    color="border-accent-blue"
                 />
                 <FloatingCard 
                    title="Operating Systems" 
                    subtitle="Unit 2 · Processes" 
                    delay={0.2}
                    className="bottom-12 -right-4 md:-right-8"
                    color="border-accent-green"
                 />
                 <FloatingCard 
                    title="DBMS" 
                    subtitle="Unit 1 · Introduction" 
                    delay={0.4}
                    className="-bottom-4 left-8"
                    color="border-accent-purple"
                 />
                 <FloatingCard 
                    title="Computer Networks" 
                    subtitle="Unit 4 · Routing" 
                    delay={0.6}
                    className="top-12 -right-8"
                    color="border-accent-yellow"
                 />
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TrustIndicator = ({ label }: { label: string }) => (
  <div className="flex items-center gap-2 text-muted font-semibold text-sm md:text-base">
    <CheckCircle size={18} className="text-primary" />
    {label}
  </div>
);

const FloatingCard = ({ title, subtitle, className, delay, color }: { title: string; subtitle: string; className?: string; delay: number; color: string }) => (
  <motion.div
    initial={{ y: 0 }}
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
    className={cn(
      "absolute bg-white px-4 py-3 rounded-2xl shadow-lg border-l-4 min-w-[180px] z-20 hidden sm:block",
      color,
      className
    )}
  >
    <h4 className="font-bold text-sm text-foreground">{title}</h4>
    <p className="text-xs text-muted font-medium">{subtitle}</p>
  </motion.div>
);
