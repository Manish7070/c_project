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
      isScrolled 
        ? "bg-white/95 backdrop-blur-md py-3.5 lg:py-4 border-amber-100/80 shadow-sm" 
        : "bg-white/70 backdrop-blur-xs py-4 lg:py-5 border-amber-100/40"
    )}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 lg:w-11 lg:h-11 bg-gradient-to-tr from-amber-600 via-orange-600 to-amber-500 rounded-xl flex items-center justify-center text-white transition-transform group-hover:scale-105 shadow-sm">
            <GraduationCap size={24} />
          </div>
          <span className="text-2xl lg:text-3xl font-bold font-serif tracking-tight text-slate-900">
            Study<span className="text-orange-600 font-serif">Sync</span>
          </span>
        </Link>

        {/* Desktop Nav Items */}
        <div className="hidden lg:flex items-center gap-8 text-base lg:text-lg font-semibold">
          <NavLink href="/" label="Home" />
          <NavLink href="/browse" label="Browse" hasDropdown />
          <NavLink href="/subjects" label="Subjects" />
          <NavLink href="/resources" label="Resources" hasDropdown />
          <NavLink href="/contribute" label="Contribute" />
          <NavLink href="/about" label="About Us" />
        </div>

        {/* Right CTA Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="p-2.5 text-slate-600 hover:text-slate-900 hover:bg-amber-50 rounded-full transition-colors">
            <Search size={22} />
          </button>
          <Link href="/sign-in" className="text-base font-semibold text-slate-700 hover:text-orange-600 px-4 py-2 transition-colors">
            Log in
          </Link>
          <Button size="lg" className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold text-base px-6 py-2.5 rounded-xl shadow-sm transition-all hover:shadow-md">
            Sign up
          </Button>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="lg:hidden p-2.5 text-slate-800 rounded-xl hover:bg-amber-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-amber-100 p-6 flex flex-col gap-4 shadow-xl">
          <Link href="/" className="text-lg font-semibold text-slate-900 py-2">Home</Link>
          <Link href="/browse" className="text-lg font-semibold text-slate-900 py-2">Browse</Link>
          <Link href="/subjects" className="text-lg font-semibold text-slate-900 py-2">Subjects</Link>
          <Link href="/resources" className="text-lg font-semibold text-slate-900 py-2">Resources</Link>
          <Link href="/contribute" className="text-lg font-semibold text-slate-900 py-2">Contribute</Link>
          <Link href="/about" className="text-lg font-semibold text-slate-900 py-2">About Us</Link>
          <hr className="border-slate-100 my-1" />
          <div className="flex items-center gap-4 pt-2">
            <Button variant="outline" className="w-1/2 text-base py-3 font-semibold">Log in</Button>
            <Button className="w-1/2 bg-orange-600 hover:bg-orange-700 text-white text-base py-3 font-bold">Sign up</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, label, hasDropdown = false }: { href: string; label: string; hasDropdown?: boolean }) => (
  <Link href={href} className="group flex items-center gap-1.5 text-slate-700 hover:text-orange-600 font-semibold transition-colors">
    {label}
    {hasDropdown && <ChevronDown size={16} className="group-hover:translate-y-0.5 transition-transform text-slate-400" />}
  </Link>
);
