import React from "react";
import { contributors } from "../mock/landingData";
import { Container, Button } from "../ui/index";
import { Trophy, ArrowRight, Star } from "lucide-react";

export const ContributorsSection = () => {
  return (
    <Container className="py-24">
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="flex-1">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Meet the students <br />who give back.</h2>
            <p className="text-lg text-muted font-medium">Great resources deserve great contributors.</p>
          </div>
          
          <div className="space-y-4">
            {contributors.map((c, idx) => (
              <div key={c.id} className="bg-white rounded-2xl border border-border p-4 flex items-center justify-between hover:shadow-sm transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="w-6 text-muted font-bold">{idx + 1}</div>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                    {c.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-foreground">{c.name}</div>
                    <div className="text-xs text-muted font-medium">{c.username}</div>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex items-center gap-1 text-primary font-bold">
                    <Star size={14} fill="currentColor" />
                    {c.points}
                  </div>
                  <div className="text-[10px] font-bold text-muted uppercase tracking-wider">{c.badge}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex-1">
          <div className="h-full bg-primary/5 rounded-[40px] border border-primary/10 p-8 md:p-12 flex flex-col justify-center items-center text-center">
            <div className="w-24 h-24 bg-white rounded-3xl shadow-xl flex items-center justify-center mb-8 rotate-3">
              <Trophy size={48} className="text-primary" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Be part of something <br />Bigger.</h3>
            <p className="text-lg text-muted font-medium mb-10 max-w-sm">
              Share quality resources, help your peers, earn points, and get recognized.
            </p>
            <Button size="lg" className="w-full sm:w-auto gap-2">
              Start Contributing <ArrowRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};
