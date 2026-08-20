'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cloud, Server, BookOpen, Wrench, CheckCircle2 } from 'lucide-react';
import TiltCard from '@/components/TiltCard';

const SKILL_CATEGORIES = [
  {
    title: 'Programming Languages',
    icon: Code2,
    badge: 'Languages',
    skills: [
      { name: 'C', level: 'Advanced' },
      { name: 'Python', level: 'Advanced' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    badge: 'Cloud Stack',
    skills: [
      { name: 'AWS', level: 'Hands-on' },
      { name: 'CloudFormation', level: 'Infrastructure' },
      { name: 'GitHub Actions', level: 'Automation' },
      { name: 'CI/CD Pipelines', level: 'Integration' },
    ],
  },
  {
    title: 'System Administration',
    icon: Server,
    badge: 'SysAdmin',
    skills: [
      { name: 'Linux (Advanced)', level: 'OS Core' },
      { name: 'Network Administration', level: 'Networking' },
      { name: 'Git / GitHub', level: 'VCS' },
      { name: 'Bash Scripting', level: 'Scripting' },
    ],
  },
  {
    title: 'CS Fundamentals',
    icon: BookOpen,
    badge: 'Core CS',
    skills: [
      { name: 'Data Structures & Algorithms', level: 'Core' },
      { name: 'DBMS', level: 'Database' },
      { name: 'Operating Systems', level: 'Architecture' },
      { name: 'Computer Networks', level: 'Protocols' },
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    badge: 'Tooling',
    skills: [
      { name: 'Docker', level: 'Containers' },
      { name: 'Jenkins', level: 'CI/CD Engine' },
      { name: 'AWS CLI & Console', level: 'Management' },
      { name: 'VS Code', level: 'IDE' },
      { name: 'AWS Academy', level: 'Certified' },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="skills" className="relative bg-transparent py-16 sm:py-24 md:py-28 px-4 sm:px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-3.5 py-1 mb-4">
            <Cloud className="h-3.5 w-3.5 text-sky-400" />
            <span className="font-mono text-xs text-slate-300 uppercase tracking-wider">
              Technical Competencies
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white tracking-tight">
            Technical <span className="text-accent-gradient">Skills</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-slate-400 max-w-xl text-xs sm:text-sm md:text-base font-light">
            Core stack encompassing cloud architecture, system administration, automation tools, and computer science foundations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <TiltCard className="glass-card rounded-3xl p-6 sm:p-8 border border-white/5 hover:border-sky-500/40 relative overflow-hidden group flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-6">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                          {cat.title}
                        </h3>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2.5 py-0.5 rounded border border-slate-800 shrink-0">
                        {cat.badge}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2.5">
                      {cat.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-200 hover:border-sky-500/40 hover:text-white transition-all group/item"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 text-sky-400 group-hover/item:scale-110 transition-transform" />
                          <span>{skill.name}</span>
                          <span className="text-[9px] text-slate-400 bg-slate-950 px-1.5 py-0.5 rounded border border-slate-800/80">
                            {skill.level}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
