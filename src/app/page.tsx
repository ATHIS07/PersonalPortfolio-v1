'use client';

import React, { useRef } from 'react';
import Navbar from '@/components/Navbar';
import ScrollyCanvas from '@/components/ScrollyCanvas';
import Overlay from '@/components/Overlay';
import About from '@/components/About';
import TechStack from '@/components/TechStack';
import Projects from '@/components/Projects';
import CloudArchitectureGraph from '@/components/CloudArchitectureGraph';
import AWSSkills from '@/components/AWSSkills';
import Contact from '@/components/Contact';
import BackgroundCanvas from '@/components/BackgroundCanvas';

export default function Home() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <main className="relative min-h-screen bg-[#090d16] text-white selection:bg-blue-600 selection:text-white">
      {/* Background Particle Network, Meteors & Spotlight */}
      <BackgroundCanvas />

      {/* Floating Glassmorphism Navbar */}
      <Navbar />

      {/* 500vh Scrollytelling Image Sequence Section */}
      <div ref={containerRef} className="relative h-[500vh]">
        <ScrollyCanvas containerRef={containerRef}>
          <Overlay containerRef={containerRef} />
        </ScrollyCanvas>
      </div>

      {/* About & Education */}
      <About />

      {/* Technical Skills */}
      <TechStack />

      {/* Projects Showcase */}
      <Projects />

      {/* Interactive AWS Cloud Architecture Graph */}
      <CloudArchitectureGraph />

      {/* Hands-On AWS Skills Labs */}
      <AWSSkills />

      {/* Interactive Contact & Footer */}
      <Contact />
    </main>
  );
}
