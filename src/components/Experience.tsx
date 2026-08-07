'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

const EXPERIENCES = [
  {
    role: 'Lead Creative Developer',
    company: 'Nexus Interactive Studio',
    period: '2024 — PRESENT',
    description: 'Leading front-end architecture for WebGL and Canvas scrollytelling projects. Spearheaded design system performance optimizations achieving 60fps image sequence scrubbing.',
    highlights: ['Site of the Month (Awwwards 2025)', '40% reduction in image sequence load times', 'Mentored 6 creative developers'],
  },
  {
    role: 'Senior Front-End Engineer',
    company: 'Aether Digital Agency',
    period: '2022 — 2024',
    description: 'Developed custom Next.js 14 applications with Framer Motion physics, Web Audio visualizers, and interactive 3D product previews.',
    highlights: ['Delivered 14 major client brand launches', 'Engineered reusable canvas image sequence hooks', 'Lighthouse 98+ average score'],
  },
  {
    role: 'Interactive Web Developer',
    company: 'Vanguard Labs',
    period: '2020 — 2022',
    description: 'Built responsive web applications, interactive dashboards, and canvas chart libraries for financial & tech startups.',
    highlights: ['Integrated WebSockets for real-time telemetry', 'Built cross-platform responsive canvas viewport scaling'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative bg-[#0a0a0a] py-28 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 mb-4">
            <Award className="h-3.5 w-3.5 text-blue-400" />
            <span className="font-mono text-xs text-blue-300 uppercase tracking-wider">
              Track Record
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
            Work & <span className="text-accent-gradient">Recognitions</span>
          </h2>
        </div>

        <div className="relative border-l border-zinc-800 ml-4 md:ml-32 space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-blue-500 border-4 border-[#0a0a0a] shadow-lg shadow-blue-500/50" />

              <div className="glass-card rounded-3xl p-8 border border-white/5 hover:border-blue-500/30">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-blue-400 font-mono text-sm mt-1">
                      <Briefcase className="h-4 w-4" />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-1.5 font-mono text-xs text-zinc-400 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
                    <Calendar className="h-3.5 w-3.5 text-blue-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="text-zinc-300 text-sm md:text-base leading-relaxed mb-6 font-light">
                  {exp.description}
                </p>

                <div className="space-y-2">
                  {exp.highlights.map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-xs md:text-sm text-zinc-300 font-mono">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
