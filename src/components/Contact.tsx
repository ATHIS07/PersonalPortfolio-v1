'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Sparkles, Cloud, ArrowUpRight } from 'lucide-react';
import TiltCard from '@/components/TiltCard';

const FOCUS_AREAS = ['Cloud Computing', 'DevOps', 'CI/CD Automation', 'System Design'];

const CONTACT_INFO = [
  {
    title: 'Direct Email',
    value: 'm.athish65903@gmail.com',
    href: 'mailto:m.athish65903@gmail.com',
    icon: Mail,
  },
  {
    title: 'Phone Number',
    value: '+91-9944290343',
    href: 'tel:+919944290343',
    icon: Phone,
  },
  {
    title: 'Location',
    value: 'Bannari Amman Institute of Technology, Tamil Nadu',
    href: null,
    icon: MapPin,
  },
];

const SOCIAL_LINKS = [
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/athish-m-79410434b/', handle: 'athish-m' },
  { name: 'GitHub', icon: Github, href: 'https://github.com/ATHIS07', handle: 'ATHIS07' },
  { name: 'Twitter / X', icon: Twitter, href: 'https://x.com/Athish58727607', handle: '@Athish58727607' },
];

export default function Contact() {
  return (
    <footer id="contact" className="relative bg-transparent py-16 sm:py-24 md:py-28 px-4 sm:px-6 md:px-16 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Title & Intro */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-3.5 py-1 mb-4">
            <Sparkles className="h-3.5 w-3.5 text-sky-400" />
            <span className="font-mono text-xs text-slate-300 uppercase tracking-wider">
              Initiate Connection
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white tracking-tight">
            Let's connect & <span className="text-accent-gradient">collaborate.</span>
          </h2>
          
          <p className="mt-4 sm:mt-6 text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed font-light">
            Third-year CSE student focused on cloud computing, infrastructure automation, and DevOps practices. Aiming for Cloud/DevOps SDE roles.
          </p>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {CONTACT_INFO.map((item, idx) => {
            const Icon = item.icon;
            const CardContent = (
              <TiltCard className="glass-card p-6 rounded-3xl border border-white/5 hover:border-sky-500/40 transition-all h-full flex flex-col justify-between group">
                <div className="flex items-center justify-between mb-4">
                  <div className="h-12 w-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
                    <Icon className="h-5 w-5" />
                  </div>
                  {item.href && <ArrowUpRight className="h-4 w-4 text-slate-500 group-hover:text-sky-400 transition-colors" />}
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">{item.title}</div>
                  <div className="text-base font-bold text-white group-hover:text-sky-300 transition-colors break-words">
                    {item.value}
                  </div>
                </div>
              </TiltCard>
            );

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                {item.href ? (
                  <a href={item.href} target={item.href.startsWith('http') ? '_blank' : '_self'} rel="noreferrer">
                    {CardContent}
                  </a>
                ) : (
                  CardContent
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Social Links Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass-panel p-6 md:p-8 rounded-3xl border border-white/10 flex flex-wrap items-center justify-between gap-6 mb-12"
        >
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-sky-400">
              <Cloud className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Social Profiles</div>
              <div className="text-xs text-slate-400">Connect across professional networks</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            {SOCIAL_LINKS.map((soc) => {
              const Icon = soc.icon;
              return (
                <a
                  key={soc.name}
                  href={soc.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl glass-card border border-white/5 hover:border-sky-500/40 text-slate-300 hover:text-white transition-all hover:scale-105"
                >
                  <Icon className="h-4 w-4 text-sky-400" />
                  <span className="text-xs font-mono font-semibold">{soc.name}</span>
                </a>
              );
            })}
          </div>
        </motion.div>

        {/* Focus Areas Badges */}
        <div className="text-center">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-4">Focus Areas</div>
          <div className="flex flex-wrap justify-center gap-3">
            {FOCUS_AREAS.map((fa) => (
              <span
                key={fa}
                className="px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 font-mono text-xs text-slate-300 hover:border-slate-700 transition-colors"
              >
                {fa}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Copyright */}
        <div className="mt-12 text-center text-xs font-mono text-slate-500">
          <p>&copy; {new Date().getFullYear()} Athish M. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
