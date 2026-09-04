"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Menu, X, ChevronDown, GraduationCap } from "lucide-react";
import { Button } from "../components/ui/index";
import { cn } from "@/lib/utils";

export const LandingNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
      isScrolled ? "bg-white/80 backdrop-blur-md py-3 border-border" : "bg-transparent py-5 border-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white transition-transform group-hover:scale-110">
            <GraduationCap size={24} />
          </div>
          <span className="text-2xl font-bold tracking-tight text-foreground">
            StudySync
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <NavLink href="/" label="Home" />
          <NavLink href="/browse" label="Browse" hasDropdown />
          <NavLink href="/subjects" label="Subjects" />
          <NavLink href="/resources" label="Resources" hasDropdown />
          <NavLink href="/contribute" label="Contribute" hasDropdown />
          <NavLink href="/about" label="About Us" />
        </div>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="p-2 text-muted hover:text-foreground transition-colors">
            <Search size={20} />
          </button>
          <button className="text-foreground font-semibold px-4 hover:text-primary transition-colors">
            Log in
          </button>
          <Button>Get Started</Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-border p-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4">
          <Link href="/" className="text-lg font-medium py-2">Home</Link>
          <Link href="/browse" className="text-lg font-medium py-2">Browse</Link>
          <Link href="/subjects" className="text-lg font-medium py-2">Subjects</Link>
          <Link href="/resources" className="text-lg font-medium py-2">Resources</Link>
          <Link href="/contribute" className="text-lg font-medium py-2">Contribute</Link>
          <Link href="/about" className="text-lg font-medium py-2">About Us</Link>
          <hr className="border-border" />
          <div className="flex flex-col gap-3">
            <Button variant="outline" className="w-full">Log in</Button>
            <Button className="w-full">Get Started</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, label, hasDropdown = false }: { href: string; label: string; hasDropdown?: boolean }) => (
  <Link href={href} className="group flex items-center gap-1 text-muted hover:text-foreground font-medium transition-colors">
    {label}
    {hasDropdown && <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform" />}
  </Link>
);
