"use client";

import React from "react";
import Link from "next/link";
import { GraduationCap, Globe, Share2, MessageCircle, Send } from "lucide-react";
import { Container } from "../ui/index";

export const LandingFooter = () => {
  return (
    <footer className="bg-slate-950 text-white pt-12 pb-8 border-t border-slate-800">
      <Container className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 mb-10">
          
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="w-9 h-9 bg-gradient-to-tr from-amber-600 via-orange-600 to-amber-500 rounded-xl flex items-center justify-center text-white transition-transform group-hover:scale-105 shadow-xs">
                <GraduationCap size={20} />
              </div>
              <span className="text-2xl font-bold font-serif tracking-tight text-white">
                Study<span className="text-orange-500 font-serif">Sync</span>
              </span>
            </Link>

            <p className="text-sm text-slate-400 font-medium mb-6 max-w-sm leading-relaxed">
              A syllabus-aligned academic resource discovery platform, powered by students and verified by university communities.
            </p>

            <div className="flex gap-3">
              <SocialIcon icon={Globe} />
              <SocialIcon icon={Share2} />
              <SocialIcon icon={MessageCircle} />
              <SocialIcon icon={Send} />
            </div>
          </div>
          
          <FooterColumn 
            title="Platform" 
            links={[
              { label: "Browse Subjects", href: "/browse" },
              { label: "Resources", href: "/resources" },
              { label: "Contribute", href: "/contribute" },
              { label: "Top Contributors", href: "/leaderboard" },
              { label: "Recent Resources", href: "/recent" }
            ]} 
          />
          
          <FooterColumn 
            title="Support" 
            links={[
              { label: "Help Center", href: "/help" },
              { label: "Guidelines", href: "/guidelines" },
              { label: "Contact Us", href: "/contact" },
              { label: "Report an Issue", href: "/report" },
              { label: "FAQ", href: "/faq" }
            ]} 
          />
          
          <FooterColumn 
            title="Company" 
            links={[
              { label: "About Us", href: "/about" },
              { label: "Our Mission", href: "/mission" },
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Service", href: "/terms" }
            ]} 
          />
        </div>
        
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-400 font-medium">
          <div>
            © 2026 StudySync. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-orange-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-orange-400 transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-orange-400 transition-colors">Cookies</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

const FooterColumn = ({ title, links }: { title: string; links: { label: string; href: string }[] }) => (
  <div>
    <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-xs sm:text-sm">{title}</h4>
    <ul className="space-y-3">
      {links.map((link, idx) => (
        <li key={idx}>
          <Link href={link.href} className="text-xs sm:text-sm text-slate-400 hover:text-orange-400 transition-colors font-medium">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const SocialIcon = ({ icon: Icon }: { icon: any }) => (
  <Link href="#" className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:border-orange-500 hover:text-orange-400 transition-all">
    <Icon size={16} />
  </Link>
);
