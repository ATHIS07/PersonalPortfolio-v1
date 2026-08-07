'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const followerRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let animId: number;
    let targetX = -1000;
    let targetY = -1000;
    let currentX = -1000;
    let currentY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${targetX - 5}px, ${targetY - 5}px, 0)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Precise 60/120fps lerp loop with mathematical center radius offsets
    const render = () => {
      currentX += (targetX - currentX) * 0.25;
      currentY += (targetY - currentY) * 0.25;

      if (followerRef.current) {
        const radius = followerRef.current.offsetWidth / 2 || 18;
        followerRef.current.style.transform = `translate3d(${currentX - radius}px, ${currentY - radius}px, 0)`;
      }

      animId = requestAnimationFrame(render);
    };

    render();

    // Hover detection for interactive elements
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const attachHoverListeners = () => {
      const elements = document.querySelectorAll('a, button, .glass-card, .glass-panel, [role="button"], input, textarea');
      elements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    attachHoverListeners();
    const interval = setInterval(attachHoverListeners, 1500);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="hidden md:block pointer-events-none">
      {/* Center Cyber Pointer Dot (10px x 10px, centered at target - 5) */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-sky-400 rounded-full pointer-events-none z-[9999] shadow-[0_0_10px_rgba(56,189,248,0.9)]"
        style={{
          transform: 'translate3d(-1000px, -1000px, 0)',
        }}
      />

      {/* Outer Follower Ring (Centered via mathematical radius subtraction) */}
      <div
        ref={followerRef}
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9998] border transition-all duration-200 ease-out ${
          isHovered
            ? 'w-14 h-14 border-sky-400/80 bg-sky-400/10 shadow-[0_0_16px_rgba(56,189,248,0.3)]'
            : 'w-9 h-9 border-sky-400/40 bg-transparent'
        }`}
        style={{
          transform: 'translate3d(-1000px, -1000px, 0)',
        }}
      />
    </div>
  );
}
