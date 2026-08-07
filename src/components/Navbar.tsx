'use client';

import React, { useState, useEffect } from 'react';
import { Cloud, Send, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-3 md:px-12 py-3 md:py-4 pointer-events-none">
      <nav
        className={`pointer-events-auto mx-auto max-w-7xl flex items-center justify-between px-4 md:px-6 py-2.5 md:py-3 rounded-full transition-all duration-500 ${
          scrolled || mobileMenuOpen
            ? 'glass-panel border-white/10 shadow-2xl backdrop-blur-xl bg-slate-950/90'
            : 'bg-transparent border-transparent'
        }`}
      >
        {/* Brand Logo & Status */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-2 group">
            <div className="h-8 w-8 md:h-9 md:w-9 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
              <Cloud className="h-4 w-4 text-sky-400 group-hover:text-white transition-colors" />
            </div>
            <span className="font-mono text-sm md:text-base font-extrabold tracking-tight text-white">
              Athish<span className="text-sky-400">M</span>
            </span>
          </a>

          <div className="hidden sm:flex items-center gap-2 rounded-full bg-slate-900/90 border border-slate-800 px-3 py-1 ml-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span className="font-mono text-[11px] font-medium text-slate-300">
              Available for Cloud & DevOps Roles
            </span>
          </div>
        </div>

        {/* Desktop Center Nav Items */}
        <div className="hidden md:flex items-center gap-6 font-mono text-xs font-medium text-slate-300">
          <a href="#about" className="hover:text-sky-400 transition-colors">
            // ABOUT
          </a>
          <a href="#skills" className="hover:text-sky-400 transition-colors">
            // SKILLS
          </a>
          <a href="#projects" className="hover:text-sky-400 transition-colors">
            // PROJECTS
          </a>
          <a href="#aws-skills" className="hover:text-sky-400 transition-colors">
            // AWS SKILLS
          </a>
          <a href="#contact" className="hover:text-sky-400 transition-colors">
            // CONTACT
          </a>
        </div>

        {/* Right CTA & Mobile Toggle Button */}
        <div className="flex items-center gap-2.5">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 md:gap-2 rounded-full bg-blue-600 hover:bg-blue-500 px-3.5 py-1.5 md:px-4 md:py-2 font-mono text-xs font-semibold text-white transition-all shadow-md shadow-blue-600/20 hover:scale-105"
          >
            <span>Get In Touch</span>
            <Send className="h-3 w-3" />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-slate-900/90 border border-slate-800 text-slate-200 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="h-4 w-4 text-sky-400" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto mt-2 mx-auto max-w-7xl glass-panel rounded-2xl p-5 border border-white/10 bg-slate-950/95 shadow-2xl backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-3 font-mono text-xs font-medium text-slate-200">
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-xl hover:bg-slate-900 hover:text-sky-400 transition-all flex items-center justify-between"
              >
                <span>// ABOUT</span>
                <span className="text-[10px] text-slate-500">Profile & Credentials</span>
              </a>
              <a
                href="#skills"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-xl hover:bg-slate-900 hover:text-sky-400 transition-all flex items-center justify-between"
              >
                <span>// SKILLS</span>
                <span className="text-[10px] text-slate-500">Tech Matrix</span>
              </a>
              <a
                href="#projects"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-xl hover:bg-slate-900 hover:text-sky-400 transition-all flex items-center justify-between"
              >
                <span>// PROJECTS</span>
                <span className="text-[10px] text-slate-500">PipeWatch & DRIVEX</span>
              </a>
              <a
                href="#aws-skills"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-xl hover:bg-slate-900 hover:text-sky-400 transition-all flex items-center justify-between"
              >
                <span>// AWS SKILLS</span>
                <span className="text-[10px] text-slate-500">Cloud Infrastructure</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-xl hover:bg-slate-900 hover:text-sky-400 transition-all flex items-center justify-between"
              >
                <span>// CONTACT</span>
                <span className="text-[10px] text-slate-500">Let's Connect</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
