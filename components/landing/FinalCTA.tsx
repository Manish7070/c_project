import React from "react";
import { Container, Button } from "../ui/index";
import { ArrowRight, Sparkles } from "lucide-react";

export const FinalCTA = () => {
  return (
    <Container className="py-24">
      <div className="bg-primary rounded-[60px] p-10 md:p-20 text-center relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 p-8 text-white/10">
           <Sparkles size={120} />
        </div>
        <div className="absolute bottom-0 left-0 p-8 text-white/10 rotate-180">
           <Sparkles size={120} />
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Ready to study smarter?
          </h2>
          <p className="text-xl text-white/80 font-medium mb-12 leading-relaxed">
            Join students who are discovering, using, and sharing resources that actually match their syllabus.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <Button variant="secondary" size="lg" className="w-full sm:w-auto text-primary px-12">
                Get Started
             </Button>
             <Button className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/20 text-white gap-2 px-12">
                Explore Resources <ArrowRight size={20} />
             </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export const Newsletter = () => {
  return (
    <Container className="pb-24 pt-0">
      <div className="bg-white rounded-[40px] border border-border p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="md:w-1/2">
           <h3 className="text-2xl font-bold text-foreground mb-2">Stay in the loop.</h3>
           <p className="text-muted font-medium">Get updates about new resources, subjects, and StudySync features.</p>
        </div>
        <div className="md:w-1/2 w-full flex flex-col sm:flex-row gap-3">
           <input 
             type="email" 
             placeholder="Enter your email" 
             className="flex-1 px-6 py-4 bg-muted-background/50 border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20"
           />
           <Button className="px-8 py-4 rounded-2xl">Subscribe</Button>
        </div>
      </div>
    </Container>
  );
};
