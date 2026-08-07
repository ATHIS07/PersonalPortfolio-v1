'use client';

import React from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { Cloud, Server, Cpu } from 'lucide-react';
import MagneticButton from '@/components/MagneticButton';

interface OverlayProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

export default function Overlay({ containerRef }: OverlayProps) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // SECTION 1: HERO OVERLAY (Absorbed towards top-left logo as you scroll down)
  const heroOpacity = useTransform(scrollYProgress, [0, 0.08, 0.18], [1, 0.6, 0]);
  const heroX = useTransform(scrollYProgress, [0, 0.18], [0, -450]);
  const heroY = useTransform(scrollYProgress, [0, 0.18], [0, -320]);
  const heroScale = useTransform(scrollYProgress, [0, 0.18], [1, 0.1]);
  const heroRotate = useTransform(scrollYProgress, [0, 0.18], [0, -12]);

  // SECTION 2: CORE FOCUS CARD (Absorbed into top-left logo as you scroll past)
  const sec2Opacity = useTransform(scrollYProgress, [0.20, 0.28, 0.40, 0.48], [0, 1, 1, 0]);
  const sec2X = useTransform(scrollYProgress, [0.20, 0.28, 0.40, 0.48], [100, 0, 0, -500]);
  const sec2Y = useTransform(scrollYProgress, [0.20, 0.28, 0.40, 0.48], [60, 0, 0, -300]);
  const sec2Scale = useTransform(scrollYProgress, [0.20, 0.28, 0.40, 0.48], [0.85, 1, 1, 0.1]);
  const sec2Rotate = useTransform(scrollYProgress, [0.40, 0.48], [0, -15]);

  // SECTION 3: HIGHLIGHTED PROJECTS CARD (Absorbed across screen into top-left logo)
  const sec3Opacity = useTransform(scrollYProgress, [0.52, 0.60, 0.72, 0.80], [0, 1, 1, 0]);
  const sec3X = useTransform(scrollYProgress, [0.52, 0.60, 0.72, 0.80], [100, 0, 0, -750]);
  const sec3Y = useTransform(scrollYProgress, [0.52, 0.60, 0.72, 0.80], [60, 0, 0, -350]);
  const sec3Scale = useTransform(scrollYProgress, [0.52, 0.60, 0.72, 0.80], [0.85, 1, 1, 0.1]);
  const sec3Rotate = useTransform(scrollYProgress, [0.72, 0.80], [0, -18]);

  return (
    <div className="absolute inset-0 pointer-events-none z-20 flex flex-col justify-between p-6 md:p-16 overflow-hidden">
      {/* SECTION 1: HERO OVERLAY (ABSORBED INTO TOP-LEFT LOGO) */}
      <motion.div
        style={{
          opacity: heroOpacity,
          x: heroX,
          y: heroY,
          scale: heroScale,
          rotate: heroRotate,
          transformOrigin: 'top left',
        }}
        className="h-full w-full flex flex-col items-center justify-center text-center max-w-4xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-950/40 px-4 py-1.5 backdrop-blur-xl mb-6 shadow-2xl">
          <Cloud className="h-4 w-4 text-sky-400" />
          <span className="font-mono text-xs font-semibold tracking-wider text-slate-200 uppercase text-readable">
            Aspiring Cloud & DevOps Engineer
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tight text-white leading-[1.08] mb-6 drop-shadow-xl">
          ATHISH <span className="text-accent-gradient">M</span>
        </h1>

        <p className="text-sm sm:text-base md:text-xl text-slate-200 max-w-2xl font-normal leading-relaxed mb-8 drop-shadow-md bg-slate-950/20 backdrop-blur-md px-4 sm:px-6 py-3 rounded-2xl">
          Third-year Computer Science student at Bannari Amman Institute of Technology focused on cloud computing, system administration, and DevOps automation. Aiming for Cloud/DevOps SDE roles.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <MagneticButton href="#contact">
            <span className="px-5 sm:px-7 py-2.5 sm:py-3 rounded-full bg-blue-600/90 hover:bg-blue-500 text-white font-mono text-xs uppercase tracking-wider font-semibold shadow-xl shadow-blue-600/30 backdrop-blur-lg transition-all inline-block">
              Get In Touch
            </span>
          </MagneticButton>

          <MagneticButton href="#projects">
            <span className="px-5 sm:px-7 py-2.5 sm:py-3 rounded-full bg-slate-950/40 backdrop-blur-xl border border-white/20 hover:border-slate-400 text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all inline-block">
              View Projects
            </span>
          </MagneticButton>
        </div>


      </motion.div>

      {/* SECTION 2: CORE FOCUS CARD (ABSORBED INTO TOP-LEFT LOGO) */}
      <motion.div
        style={{
          opacity: sec2Opacity,
          x: sec2X,
          y: sec2Y,
          scale: sec2Scale,
          rotate: sec2Rotate,
          transformOrigin: 'top left',
        }}
        className="absolute inset-0 flex items-center justify-start p-4 sm:p-6 md:p-24 max-w-7xl mx-auto"
      >
        <div className="max-w-xl glass-panel p-6 sm:p-8 md:p-12 rounded-3xl border border-white/15 shadow-2xl backdrop-blur-2xl bg-slate-950/30">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-900/60 px-3.5 py-1 mb-4 backdrop-blur-lg">
            <Server className="h-3.5 w-3.5 text-sky-400" />
            <span className="font-mono text-[11px] sm:text-xs font-medium text-slate-200 uppercase tracking-wider text-readable">
              AWS Infrastructure & CI/CD
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4 drop-shadow-lg">
            Cloud & DevOps <span className="text-accent-gradient">Engineering</span>
          </h2>
          <p className="text-slate-200 text-xs sm:text-sm md:text-base leading-relaxed font-normal text-readable">
            Hands-on experience with AWS EC2, S3, IAM, VPC, CloudFormation, Jenkins automation, Linux system administration, and network configuration.
          </p>
        </div>
      </motion.div>

      {/* SECTION 3: HIGHLIGHTED PROJECTS CARD (ABSORBED INTO TOP-LEFT LOGO) */}
      <motion.div
        style={{
          opacity: sec3Opacity,
          x: sec3X,
          y: sec3Y,
          scale: sec3Scale,
          rotate: sec3Rotate,
          transformOrigin: 'top left',
        }}
        className="absolute inset-0 flex items-center justify-end p-4 sm:p-6 md:p-24 max-w-7xl mx-auto"
      >
        <div className="max-w-xl glass-panel p-6 sm:p-8 md:p-12 rounded-3xl border border-white/15 shadow-2xl backdrop-blur-2xl bg-slate-950/30 text-right">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-900/60 px-3.5 py-1 mb-4 backdrop-blur-lg ml-auto">
            <Cpu className="h-3.5 w-3.5 text-sky-400" />
            <span className="font-mono text-[11px] sm:text-xs font-medium text-slate-200 uppercase tracking-wider text-readable">
              Highlighted Projects
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4 drop-shadow-lg">
            PipeWatch & <span className="text-accent-gradient">DRIVEX</span>
          </h2>
          <p className="text-slate-200 text-xs sm:text-sm md:text-base leading-relaxed font-normal text-readable">
            Engineered PipeWatch for real-time Jenkins & AWS CI/CD pipeline monitoring, alongside DRIVEX, a cloud-based Amazon S3 file sharing platform.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
