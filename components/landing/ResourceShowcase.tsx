import React from "react";
import { Container, SectionHeading, Badge } from "../ui/index";
import { Search, Filter, Video, FileText, Globe, ThumbsUp, ChevronRight } from "lucide-react";

export const ResourceShowcase = () => {
  return (
    <section className="bg-muted-background/30 py-24">
      <Container>
        <SectionHeading 
          title="Less searching. More studying."
          subtitle="Stop wasting hours on generic search results. Get exactly what matches your syllabus."
        />

        <div className="bg-white rounded-[40px] border border-border shadow-2xl overflow-hidden">
          {/* Mock UI Header */}
          <div className="border-b border-border p-6 md:px-8 bg-muted-background/20 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm font-medium text-muted">
              <span>B.Tech CSE</span>
              <ChevronRight size={14} />
              <span>Semester 5</span>
              <ChevronRight size={14} />
              <span className="text-foreground font-bold">DBMS</span>
              <ChevronRight size={14} />
              <span className="text-primary font-bold">Unit 3</span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
                <input 
                  type="text" 
                  placeholder="Search in DBMS Unit 3..." 
                  className="pl-10 pr-4 py-2 bg-white border border-border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 w-64"
                />
              </div>
              <button className="p-2 border border-border rounded-full hover:bg-white transition-colors">
                <Filter size={18} className="text-muted" />
              </button>
            </div>
          </div>

          {/* Mock UI Content */}
          <div className="p-6 md:p-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-foreground">Unit 3: Transaction Management</h3>
              <div className="flex gap-2">
                <Badge color="orange">All</Badge>
                <Badge color="blue" className="bg-transparent border border-border">Videos</Badge>
                <Badge color="green" className="bg-transparent border border-border">Notes</Badge>
                <Badge color="purple" className="bg-transparent border border-border">PYQs</Badge>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ResourceCard 
                type="Video"
                icon={Video}
                title="DBMS Transactions Explained"
                difficulty="Intermediate"
                helpful="1.2k"
                contributor="Aman Verma"
                color="text-blue-500"
              />
              <ResourceCard 
                type="PDF"
                icon={FileText}
                title="Previous Year Questions - Unit 3"
                difficulty="Exam Focused"
                helpful="842"
                contributor="Sneha Patel"
                color="text-red-500"
              />
              <ResourceCard 
                type="Document"
                icon={FileText}
                title="Transaction Management Notes"
                difficulty="Comprehensive"
                helpful="623"
                contributor="Rohit Kumar"
                color="text-emerald-500"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

const ResourceCard = ({ type, icon: Icon, title, difficulty, helpful, contributor, color }: any) => (
  <div className="bg-white border border-border rounded-2xl p-6 hover:border-primary/50 transition-all cursor-pointer group">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <Icon size={18} className={color} />
        <span className="text-xs font-bold text-muted uppercase tracking-wider">{type}</span>
      </div>
      <div className="flex items-center gap-1 text-xs font-bold text-muted">
        <ThumbsUp size={14} />
        {helpful}
      </div>
    </div>
    <h4 className="text-lg font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{title}</h4>
    <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
      <div className="text-xs font-medium text-muted">
        by <span className="text-foreground font-bold">{contributor}</span>
      </div>
      <span className="text-[10px] font-extrabold px-2 py-0.5 bg-muted-background rounded uppercase tracking-tighter">
        {difficulty}
      </span>
    </div>
  </div>
);
