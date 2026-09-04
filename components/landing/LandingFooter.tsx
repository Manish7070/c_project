import React from "react";
import Link from "next/link";
import { GraduationCap, Share2, Globe } from "lucide-react";
import { Container } from "../ui/index";

export const LandingFooter = () => {
  return (
    <footer className="bg-white border-t border-border pt-24 pb-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-20">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white transition-transform group-hover:scale-110">
                <GraduationCap size={24} />
              </div>
              <span className="text-2xl font-bold tracking-tight text-foreground">
                StudySync
              </span>
            </Link>
            <p className="text-muted font-medium mb-8 max-w-xs leading-relaxed">
              A syllabus-aware academic resource discovery platform, powered by students, for students.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={Share2} />
              <SocialIcon icon={Globe} />
              <SocialIcon icon={Share2} />
              <SocialIcon icon={Globe} />
              <SocialIcon icon={Share2} />
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
          
          <FooterColumn 
            title="For Students" 
            links={[
              { label: "Dashboard", href: "/dashboard" },
              { label: "Bookmarks", href: "/bookmarks" },
              { label: "My Contributions", href: "/my-contributions" },
              { label: "My Profile", href: "/profile" },
              { label: "Exam Mode", href: "/exam-mode" }
            ]} 
          />
        </div>
        
        <div className="pt-12 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm font-medium text-muted">
            © 2026 StudySync. All rights reserved.
          </div>
          <div className="flex gap-8 text-sm font-bold text-muted uppercase tracking-widest">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
            <Link href="/accessibility" className="hover:text-primary transition-colors">Accessibility</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

const FooterColumn = ({ title, links }: { title: string; links: { label: string; href: string }[] }) => (
  <div>
    <h4 className="font-bold text-foreground mb-6 uppercase tracking-widest text-xs">{title}</h4>
    <ul className="space-y-4">
      {links.map((link, idx) => (
        <li key={idx}>
          <Link href={link.href} className="text-muted font-medium hover:text-primary transition-colors">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const SocialIcon = ({ icon: Icon }: { icon: any }) => (
  <Link href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted hover:border-primary hover:text-primary hover:bg-primary/5 transition-all">
    <Icon size={18} />
  </Link>
);
