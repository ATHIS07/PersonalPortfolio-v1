'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, FolderGit2, ExternalLink, Activity, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import TiltCard from '@/components/TiltCard';
import TerminalTyper from '@/components/TerminalTyper';

interface Project {
  title: string;
  status: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  note?: string;
  terminalCommand: string;
}

const PROJECTS: Project[] = [
  {
    title: 'AWS Cloud Portfolio Deployment - v1',
    status: 'Completed',
    description:
      'Deployed a production-ready personal portfolio using Next.js and AWS, featuring private Amazon S3 static hosting, CloudFront global CDN distribution, Route 53 DNS routing, and ACM SSL certificate management for high-performance delivery.',
    tech: ['Next.js', 'Amazon S3', 'CloudFront', 'Route 53', 'ACM', 'HTTPS'],
    githubUrl: 'https://github.com/ATHIS07/PersonalPortfolio-v1',
    note: 'Note: You are currently viewing this exact live website right now!',
    terminalCommand: '$ aws cloudfront create-invalidation --distribution-id E123 --paths "/*"',
  },
  {
    title: 'Automated CI/CD Pipeline',
    status: 'Completed',
    description:
      'Built an automated CI/CD pipeline using GitHub Actions to build, test, and deploy a web application directly to an AWS EC2 Linux server through secure SSH connection and encrypted secret management.',
    tech: ['GitHub Actions', 'AWS EC2', 'Linux', 'Git', 'GitHub', 'SSH'],
    githubUrl: 'https://github.com/ATHIS07?tab=repositories',
    terminalCommand: '$ git push origin main && gh workflow run deploy.yml',
  },
  {
    title: 'PipeWatch – CI/CD Pipeline Monitoring Dashboard',
    status: 'Completed',
    description:
      'Built a cloud-based CI/CD monitoring platform providing real-time visibility into Jenkins pipeline execution, deployment history, infrastructure status, and event-driven workflows using React, Node.js, Jenkins, GitHub, and AWS.',
    tech: ['React.js', 'Node.js', 'Express.js', 'Jenkins', 'AWS', 'GitHub', 'REST API'],
    githubUrl: 'https://github.com/ATHIS07/TechNova_ERROR-420.git',
    terminalCommand: '$ pipewatch status --live --jenkins-aws',
  },
  {
    title: 'DRIVEX - AWS File Sharing Platform',
    status: 'Completed',
    description:
      'Built a cloud-based file sharing platform with secure upload, download, rename, delete, and sharing features integrated with Amazon S3 storage, Python Flask backend, and REST APIs.',
    tech: ['AWS S3', 'Python', 'Flask', 'REST API', 'HTML/CSS/JS', 'GitHub'],
    terminalCommand: '$ drivex sync --bucket s3://drivex-storage',
  },
  {
    title: 'Scalable Web Infrastructure on AWS',
    status: 'Completed',
    description:
      'Designed a highly available web infrastructure using EC2, Application Load Balancer (ALB), Auto Scaling Group, and Multi-AZ deployment with self-healing capabilities.',
    tech: ['AWS EC2', 'ALB', 'Auto Scaling', 'Launch Template', 'Multi-AZ', 'AWS VPC'],
    terminalCommand: '$ aws autoscaling describe-auto-scaling-groups',
  },
  {
    title: 'Personal Portfolio Website',
    status: 'Completed',
    description:
      'Building a responsive portfolio website to showcase resume, AWS learning journey, interactive scrollytelling, and project demonstrations.',
    tech: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Canvas API', 'GitHub Pages'],
    githubUrl: 'https://github.com/ATHIS07/PersonalPortfolio/blob/main/index.html',
    terminalCommand: '$ npm run build && git push origin main',
  },
];

export default function Projects() {
  const triggerConfetti = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 45,
      spread: 60,
      origin: { x, y },
      colors: ['#38bdf8', '#60a5fa', '#3b82f6', '#10b981'],
    });
  };

  return (
    <section id="projects" className="relative bg-transparent py-16 sm:py-24 md:py-28 px-4 sm:px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-3.5 py-1 mb-4"
          >
            <FolderGit2 className="h-3.5 w-3.5 text-sky-400" />
            <span className="font-mono text-xs text-slate-300 uppercase tracking-wider">
              Featured Work
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white tracking-tight"
          >
            Projects & <span className="text-accent-gradient">Initiatives</span>
          </motion.h2>

          <p className="mt-3 sm:mt-4 text-slate-400 max-w-xl text-xs sm:text-sm md:text-base font-light">
            Hands-on cloud engineering, DevOps pipeline monitoring, and web infrastructure deployments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
            >
              <TiltCard className="glass-card rounded-3xl border border-white/10 hover:border-sky-500/40 relative overflow-hidden group flex flex-col justify-between h-full p-5 sm:p-8 md:p-10">
                {/* Interactive Terminal Header Bar */}
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-rose-500/80 group-hover:bg-rose-500 transition-colors" />
                    <div className="h-3 w-3 rounded-full bg-amber-500/80 group-hover:bg-amber-500 transition-colors" />
                    <div className="h-3 w-3 rounded-full bg-emerald-500/80 group-hover:bg-emerald-500 transition-colors" />
                  </div>
                  <TerminalTyper command={project.terminalCommand} />
                </div>

                <div className="relative z-10 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Header Title & Status Alignment */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4 min-h-[56px]">
                      <h3 className="text-xl md:text-2xl font-extrabold text-white group-hover:text-sky-300 transition-colors leading-tight">
                        {project.title}
                      </h3>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 font-mono text-[11px] font-semibold text-emerald-400 uppercase shrink-0 self-start mt-0.5 shadow-sm">
                        <Activity className="h-3 w-3 text-emerald-400 animate-pulse" />
                        {project.status}
                      </span>
                    </div>

                    <p className="text-slate-300 text-sm md:text-base leading-relaxed font-normal mb-6 text-readable min-h-[80px]">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 mb-8 mt-auto min-h-[72px]">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 font-mono text-xs text-slate-300 group-hover:border-slate-700 group-hover:text-white transition-all hover:scale-105"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {project.note && (
                  <div className="relative z-10 my-3 p-3 rounded-xl bg-sky-500/10 border border-sky-500/25 text-sky-300 text-xs font-mono flex items-center gap-2 shadow-inner">
                    <Sparkles className="h-4 w-4 text-sky-400 shrink-0" />
                    <span>{project.note}</span>
                  </div>
                )}

                <div className="relative z-10 pt-4 border-t border-slate-800/80 mt-auto min-h-[52px] flex flex-wrap items-center gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={triggerConfetti}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-sky-500/40 text-xs font-mono font-semibold transition-all hover:scale-105 shadow-lg"
                    >
                      <Github className="h-4 w-4 text-sky-400" />
                      <span>GitHub</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={triggerConfetti}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 hover:text-white hover:bg-sky-500/20 hover:border-sky-400 text-xs font-mono font-semibold transition-all hover:scale-105 shadow-lg"
                    >
                      <ExternalLink className="h-4 w-4 text-sky-400" />
                      <span>Live Portfolio</span>
                    </a>
                  )}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
