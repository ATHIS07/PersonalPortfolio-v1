'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, CheckCircle, ExternalLink, Github, ShieldCheck, Server, GitBranch, FolderCheck, LineChart } from 'lucide-react';
import TiltCard from '@/components/TiltCard';

interface AWSSkillItem {
  title: string;
  icon: any;
  features: string[];
  githubUrl?: string;
}

const AWS_SKILLS: AWSSkillItem[] = [
  {
    title: 'PipeWatch – CI/CD Monitoring Platform',
    icon: LineChart,
    features: [
      'Built a full-stack CI/CD monitoring platform using React, Node.js and Express.',
      'Integrated Jenkins REST APIs to display real-time pipeline execution, deployment history and build analytics.',
      'Implemented event-driven workflow using Amazon EventBridge, AWS Lambda and Amazon DynamoDB.',
      'Developed interactive monitoring dashboards with React charts, live metrics and automatic refresh.',
      'Automated deployment pipeline using GitHub Webhooks, Jenkins and Amazon S3.',
      'Implemented backend APIs for infrastructure monitoring and deployment tracking.',
    ],
    githubUrl: 'https://github.com/ATHIS07/TechNova_ERROR-420.git',
  },
  {
    title: 'DRIVEX - AWS File Sharing',
    icon: FolderCheck,
    features: [
      'Built a cloud-based file sharing application using Amazon S3.',
      'Implemented upload, download, rename, delete, and sharing operations.',
      'Integrated real-time file management with AWS storage.',
      'Applied secure cloud storage and backend integration concepts.',
    ],
  },
  {
    title: 'Amazon S3 + CloudFront',
    icon: Cloud,
    features: [
      'Hosted static portfolio website using Amazon S3.',
      'Configured CloudFront distribution for global CDN delivery.',
      'Enabled HTTPS for secure content delivery.',
      'Improved performance and availability for users.',
    ],
    githubUrl: 'https://github.com/ATHIS07/PersonalPortfolio/blob/main/index.html',
  },
  {
    title: 'IAM (Identity and Access Management)',
    icon: ShieldCheck,
    features: [
      'Created IAM users with secure credential management.',
      'Implemented IAM roles for service access control.',
      'Applied least-privilege access principles.',
      'Managed policies to securely control AWS resource access.',
    ],
  },
  {
    title: 'EC2 + Linux',
    icon: Server,
    features: [
      'Launched and managed EC2 instances on AWS.',
      'Connected to instances via SSH for remote management.',
      'Performed basic Linux server configuration and maintenance.',
      'Managed instance security groups and networking.',
    ],
  },
  {
    title: 'Git & GitHub',
    icon: GitBranch,
    features: [
      'Used Git for version control across all projects.',
      'Maintained repositories with proper change tracking.',
      'Implemented branching strategies for development.',
      'Managed code collaboration and documentation on GitHub.',
    ],
  },
];

export default function AWSSkills() {
  return (
    <section id="aws-skills" className="relative bg-transparent py-16 sm:py-24 md:py-28 px-4 sm:px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-3.5 py-1 mb-4">
            <Cloud className="h-3.5 w-3.5 text-sky-400" />
            <span className="font-mono text-xs text-slate-300 uppercase tracking-wider">
              AWS & Infrastructure
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white tracking-tight">
            Hands-On <span className="text-accent-gradient">AWS Skills</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-slate-400 max-w-xl text-xs sm:text-sm md:text-base font-light">
            Practical experience deploying, securing, and scaling cloud services and DevOps workflows on AWS.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {AWS_SKILLS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <TiltCard className="glass-card rounded-3xl p-6 sm:p-8 border border-white/5 hover:border-sky-500/40 relative overflow-hidden group flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="h-10 w-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform shrink-0">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                        {item.title}
                      </h3>
                    </div>

                    <div className="space-y-3 mb-6">
                      {item.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed font-light">
                          <CheckCircle className="h-3.5 w-3.5 text-sky-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {item.githubUrl && (
                    <div className="pt-4 border-t border-slate-800 mt-auto">
                      <a
                        href={item.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-white font-mono text-xs transition-all hover:scale-105"
                      >
                        <Github className="h-3.5 w-3.5 text-sky-400" />
                        <span>GitHub Repo</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  )}
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
