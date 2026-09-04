import React from "react";
import { Container, SectionHeading, Badge } from "../ui/index";
import { UserPlus, Search, ShieldCheck, CheckCircle, Share2, ArrowDown } from "lucide-react";

export const ModerationSection = () => {
  return (
    <section className="bg-white py-24">
      <Container>
        <SectionHeading 
          title="Not every link belongs in the library."
          subtitle="Every submitted resource goes through moderation before it becomes part of the approved study collection."
        />
        
        <div className="relative mt-20">
          {/* Vertical line for mobile, horizontal for desktop */}
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-[2px] bg-border -z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 text-center">
            <FlowStep icon={UserPlus} label="Student submits" color="bg-accent-blue/20" iconColor="text-blue-600" />
            <FlowStep icon={Search} label="Resource reviewed" color="bg-accent-yellow/20" iconColor="text-amber-600" />
            <FlowStep icon={ShieldCheck} label="Admin approves" color="bg-accent-green/20" iconColor="text-emerald-600" />
            <FlowStep icon={Share2} label="Community discovers" color="bg-accent-purple/20" iconColor="text-purple-600" />
            <FlowStep icon={CheckCircle} label="Marked helpful" color="bg-accent-red/20" iconColor="text-red-600" />
          </div>
        </div>
        
        <div className="mt-24 flex flex-wrap justify-center gap-8">
           <StatusBadge status="PENDING" color="yellow" />
           <StatusBadge status="APPROVED" color="green" />
           <StatusBadge status="REJECTED" color="red" />
        </div>
      </Container>
    </section>
  );
};

const FlowStep = ({ icon: Icon, label, color, iconColor }: any) => (
  <div className="relative z-10 flex flex-col items-center">
    <div className={`w-20 h-20 rounded-full ${color} flex items-center justify-center mb-6 border-4 border-white shadow-sm`}>
      <Icon className={`w-8 h-8 ${iconColor}`} />
    </div>
    <span className="text-sm font-bold text-foreground uppercase tracking-wider">{label}</span>
  </div>
);

const StatusBadge = ({ status, color }: { status: string; color: any }) => (
  <div className="flex items-center gap-3 bg-white border border-border px-6 py-3 rounded-2xl shadow-sm">
    <Badge color={color}>{status}</Badge>
    <span className="text-sm font-bold text-muted uppercase tracking-tighter">Status Type</span>
  </div>
);
