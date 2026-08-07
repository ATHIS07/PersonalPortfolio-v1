'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  UserCheck,
  Award,
  Sparkles,
  GraduationCap,
  Cloud,
  Server,
  Code2,
  FolderGit2,
  Terminal,
  Zap,
  Target,
  BookOpen,
  ShieldCheck,
} from 'lucide-react';
import TiltCard from '@/components/TiltCard';

const PROFILE_HIGHLIGHTS = [
  {
    id: 'bio',
    title: 'Background & Focus',
    badge: 'Core Bio',
    icon: UserCheck,
    color: 'text-sky-400',
    border: 'border-sky-500/40',
    content:
      'Third-year Computer Science Engineering student at Bannari Amman Institute of Technology (BIT), Tamil Nadu. Passionate about cloud architecture, server administration, network engineering, and CI/CD pipeline automation.',
  },
  {
    id: 'education',
    title: 'Academic Standing',
    badge: 'Education',
    icon: GraduationCap,
    color: 'text-emerald-400',
    border: 'border-emerald-500/40',
    content:
      'Pursuing B.E. CSE (2024–2028) with strong coursework in Operating Systems, Computer Networks, Data Structures, Algorithms, and DBMS. Completed HSC & SSLC with top distinction at Sri Sankara Vidalayaa.',
  },
  {
    id: 'projects',
    title: 'Key Engineering Work',
    badge: 'Projects',
    icon: FolderGit2,
    color: 'text-amber-400',
    border: 'border-amber-500/40',
    content:
      'Creator of PipeWatch (Real-time Jenkins & AWS CI/CD Monitoring Platform) and DRIVEX (Cloud-based Amazon S3 File Sharing Platform with Python Flask backend).',
  },
  {
    id: 'goal',
    title: 'Career Aspirations',
    badge: 'Mission',
    icon: Target,
    color: 'text-purple-400',
    border: 'border-purple-500/40',
    content:
      'Dedicated to securing a Cloud/DevOps Engineering role at a leading technology company where I can design resilient, auto-scaling infrastructure and streamline production deployments.',
  },
];

export default function CloudArchitectureGraph() {
  const [activeTab, setActiveTab] = useState<'highlights' | 'philosophy' | 'skills'>('highlights');
  const [selectedHighlight, setSelectedHighlight] = useState<string>('bio');

  return (
    <section className="relative bg-transparent py-16 sm:py-24 md:py-28 px-4 sm:px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-3.5 py-1 mb-4"
          >
            <Sparkles className="h-3.5 w-3.5 text-sky-400 animate-pulse" />
            <span className="font-mono text-xs text-slate-300 uppercase tracking-wider">
              Developer Profile & Highlights
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Athish M – <span className="text-accent-gradient">Personal Highlights</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-xl text-xs sm:text-sm md:text-base font-light">
            An overview of my academic background, technical passion, project achievements, and career objectives.
          </p>
        </div>

        <TiltCard className="glass-panel p-4 sm:p-6 md:p-10 rounded-3xl border border-white/15 shadow-2xl relative overflow-hidden group">
          {/* Custom Console Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800/80 pb-6 mb-8">
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setActiveTab('highlights')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-mono text-xs font-semibold transition-all ${
                  activeTab === 'highlights'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800'
                }`}
              >
                <UserCheck className="h-3.5 w-3.5" />
                <span>Profile Highlights</span>
              </button>

              <button
                onClick={() => setActiveTab('philosophy')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-mono text-xs font-semibold transition-all ${
                  activeTab === 'philosophy'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800'
                }`}
              >
                <Target className="h-3.5 w-3.5" />
                <span>Engineering Philosophy</span>
              </button>

              <button
                onClick={() => setActiveTab('skills')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-mono text-xs font-semibold transition-all ${
                  activeTab === 'skills'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800'
                }`}
              >
                <Cloud className="h-3.5 w-3.5" />
                <span>Key Domain Focus</span>
              </button>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs text-slate-300 bg-slate-950 px-3.5 py-1.5 rounded-full border border-slate-800">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span className="text-emerald-400 font-semibold">Available for Cloud & DevOps Roles</span>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {/* TAB 1: PROFILE HIGHLIGHTS GRID */}
            {activeTab === 'highlights' && (
              <motion.div
                key="highlights"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
                  {PROFILE_HIGHLIGHTS.map((item) => {
                    const Icon = item.icon;
                    const isSel = selectedHighlight === item.id;

                    return (
                      <button
                        key={item.id}
                        onClick={() => setSelectedHighlight(item.id)}
                        className={`p-6 rounded-2xl border text-left transition-all relative overflow-hidden group/card ${
                          isSel
                            ? `${item.border} bg-slate-900/90 shadow-[0_0_20px_rgba(56,189,248,0.25)] scale-105`
                            : 'border-slate-800/80 bg-slate-950/50 hover:border-slate-700 hover:bg-slate-900/40'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className={`h-10 w-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center ${item.color}`}>
                            <Icon className="h-5 w-5" />
                          </div>
                          <span className="text-[10px] font-mono text-slate-400 bg-slate-950 px-2.5 py-0.5 rounded border border-slate-800">
                            {item.badge}
                          </span>
                        </div>

                        <h3 className="font-bold text-white text-base group-hover/card:text-sky-300 transition-colors mb-2">
                          {item.title}
                        </h3>
                        <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                          {item.content}
                        </p>
                      </button>
                    );
                  })}
                </div>

                {/* Highlight Detail Banner */}
                <div className="bg-slate-950/90 rounded-2xl p-6 border border-slate-800/90 font-mono text-xs shadow-inner">
                  <div className="flex items-center gap-2 text-sky-400 mb-2">
                    <Zap className="h-4 w-4" />
                    <span className="font-bold uppercase tracking-wider">
                      Selected Detail: {PROFILE_HIGHLIGHTS.find((h) => h.id === selectedHighlight)?.title}
                    </span>
                  </div>
                  <p className="text-slate-300 leading-relaxed font-sans text-sm">
                    {PROFILE_HIGHLIGHTS.find((h) => h.id === selectedHighlight)?.content}
                  </p>
                </div>
              </motion.div>
            )}

            {/* TAB 2: ENGINEERING PHILOSOPHY */}
            {activeTab === 'philosophy' && (
              <motion.div
                key="philosophy"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                <div className="bg-slate-950/80 p-6 rounded-2xl border border-slate-800 space-y-3">
                  <div className="h-10 w-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-sky-400">
                    <Server className="h-5 w-5" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Automation First</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Believer in automating repetitive tasks using CI/CD pipelines, shell scripts, and CloudFormation infrastructure as code.
                  </p>
                </div>

                <div className="bg-slate-950/80 p-6 rounded-2xl border border-slate-800 space-y-3">
                  <div className="h-10 w-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Security & Reliability</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Prioritizing least-privilege IAM policies, encrypted S3 storage, and multi-AZ self-healing compute clusters.
                  </p>
                </div>

                <div className="bg-slate-950/80 p-6 rounded-2xl border border-slate-800 space-y-3">
                  <div className="h-10 w-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Continuous Growth</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Constantly building real-world projects and mastering AWS Academy coursework to stay ahead in modern DevOps practices.
                  </p>
                </div>
              </motion.div>
            )}

            {/* TAB 3: KEY DOMAIN FOCUS */}
            {activeTab === 'skills' && (
              <motion.div
                key="skills"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="bg-slate-950 p-6 rounded-2xl border border-slate-800 font-mono text-xs space-y-4"
              >
                <div className="text-sky-400 font-bold uppercase tracking-wider mb-2">// Core Specialization Matrix</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="text-white font-bold mb-1">AWS Cloud Services</div>
                    <div className="text-slate-400 text-[11px]">EC2, S3, IAM, VPC, CloudFormation, CloudFront</div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="text-white font-bold mb-1">DevOps & CI/CD</div>
                    <div className="text-slate-400 text-[11px]">Jenkins, GitHub Actions, EventBridge, PipeWatch</div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="text-white font-bold mb-1">SysAdmin & OS</div>
                    <div className="text-slate-400 text-[11px]">Linux Administration, Bash Scripting, Networking</div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="text-white font-bold mb-1">Languages & Web</div>
                    <div className="text-slate-400 text-[11px]">Python, C, Flask, HTML/CSS/JS, REST APIs</div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </TiltCard>
      </div>
    </section>
  );
}
