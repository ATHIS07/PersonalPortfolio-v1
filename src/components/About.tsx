'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, UserCheck, Sparkles } from 'lucide-react';
import TiltCard from '@/components/TiltCard';

const EDUCATION = [
  {
    degree: 'B.E. Computer Science and Engineering',
    institution: 'Bannari Amman Institute of Technology, Tamil Nadu',
    period: '2024 — 2028 (Expected)',
    tag: 'Undergraduate Degree',
  },
  {
    degree: '12th (HSC)',
    institution: 'Sri Sankara Vidalayaa Higher Secondary School',
    period: '2024',
    tag: 'Higher Secondary',
  },
  {
    degree: '10th (SSLC)',
    institution: 'Sri Sankara Vidalayaa Higher Secondary School',
    period: '2022',
    tag: 'Secondary Education',
  },
];

export default function About() {
  const [stats, setStats] = useState([0, 0, 0]);

  // Animated stat counters on mount/scroll
  useEffect(() => {
    const targets = [2, 5, 6];
    const duration = 1500;
    const steps = 30;
    const intervalTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      setStats([
        Math.min(targets[0], Math.round((targets[0] / steps) * step)),
        Math.min(targets[1], Math.round((targets[1] / steps) * step)),
        Math.min(targets[2], Math.round((targets[2] / steps) * step)),
      ]);
      if (step >= steps) clearInterval(timer);
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="relative bg-transparent py-16 sm:py-24 md:py-28 px-4 sm:px-6 md:px-16 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column: Education Glass Card & Profile Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Featured Portrait Card */}
            <TiltCard className="glass-panel p-4 sm:p-6 rounded-3xl border border-white/15 shadow-2xl relative overflow-hidden group">
              <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden border border-white/10 shadow-inner">
                <img
                  src="/sequence/ezgif-frame-078.webp"
                  alt="Athish M - Profile Portrait"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-sky-400" />
                    <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                      Athish M
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-slate-300 bg-slate-900/90 px-3 py-1 rounded-full border border-slate-800">
                    B.E. CSE @ BIT
                  </span>
                </div>
              </div>
            </TiltCard>

            {/* Education Glass Card */}
            <TiltCard className="glass-panel p-6 sm:p-8 md:p-10 rounded-3xl border border-white/15 shadow-2xl group">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Education Journey</h3>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-sky-400 bg-sky-950/60 px-3 py-1 rounded-full border border-sky-800/40">
                  Academic Credentials
                </span>
              </div>

              <div className="space-y-8 relative border-l-2 border-slate-800 ml-2 sm:ml-4 pl-4 sm:pl-6">
                {EDUCATION.map((edu, idx) => (
                  <div key={idx} className="relative group/item">
                    {/* Animated Timeline Node */}
                    <div className="absolute -left-[24px] sm:-left-[32px] top-1.5 h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full bg-slate-900 border-2 border-sky-400 group-hover/item:bg-sky-400 transition-colors shadow-[0_0_10px_rgba(56,189,248,0.5)]" />

                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <h4 className="text-base sm:text-lg font-bold text-sky-300 group-hover/item:text-white transition-colors">
                        {edu.degree}
                      </h4>
                      <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800 shrink-0">
                        {edu.tag}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 font-light mb-1">{edu.institution}</p>
                    <span className="inline-block text-[11px] sm:text-xs font-mono text-slate-400">
                      {edu.period}
                    </span>
                  </div>
                ))}
              </div>
            </TiltCard>
          </motion.div>

          {/* Right Column: About Me Copy & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-3.5 py-1 mb-4">
              <UserCheck className="h-3.5 w-3.5 text-sky-400" />
              <span className="font-mono text-xs text-slate-300 uppercase tracking-wider">
                Profile & Mission
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
              About <span className="text-accent-gradient">Me</span>
            </h2>

            <p className="mt-4 sm:mt-6 text-slate-200 text-sm sm:text-base md:text-lg leading-relaxed font-normal text-readable">
              I am a passionate Computer Science Engineering student with a strong foundation in system administration and networking. My journey in technology is driven by a deep interest in cloud computing and DevOps practices.
            </p>

            <p className="mt-3 sm:mt-4 text-slate-300 text-sm sm:text-base leading-relaxed font-normal text-readable">
              My goal is to become a Cloud/DevOps Software Development Engineer at top-tier product companies. I believe in consistent learning and hands-on projects to build expertise in scalable infrastructure and modern cloud technologies.
            </p>

            {/* Stats Grid with 3D Tilt */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-8 sm:mt-10">
              {[
                { value: `${stats[0]}+`, label: 'Years of Learning' },
                { value: `${stats[1]}+`, label: 'Tech Domains' },
                { value: `${stats[2]}+`, label: 'Hands-On Projects' },
              ].map((stat, idx) => (
                <TiltCard key={idx} className="glass-card p-4 sm:p-5 rounded-2xl text-center border border-white/10 group hover:border-sky-500/40">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white group-hover:text-sky-300 transition-colors mb-1 drop-shadow-md">
                    {stat.value}
                  </div>
                  <div className="text-[11px] sm:text-xs font-mono text-slate-300 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </TiltCard>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
