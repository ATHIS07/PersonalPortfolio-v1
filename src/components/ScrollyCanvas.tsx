'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, motion, useMotionValueEvent } from 'framer-motion';

interface ScrollyCanvasProps {
  frameCount?: number;
  containerRef: React.RefObject<HTMLDivElement | null>;
  children?: React.ReactNode;
}

const FRAME_COUNT = 78;

export default function ScrollyCanvas({
  frameCount = FRAME_COUNT,
  containerRef,
  children,
}: ScrollyCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameIndexRef = useRef<number>(0);
  
  const [loadedCount, setLoadedCount] = useState<number>(0);
  const [isReady, setIsReady] = useState<boolean>(false);

  // Scroll Progress from 0 to 1 over containerRef (500vh)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Map 0 -> 1 progress to 0 -> (frameCount - 1)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, frameCount - 1]);

  // Preload images
  useEffect(() => {
    let isMounted = true;
    const images: HTMLImageElement[] = [];
    let count = 0;

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      const frameNum = String(i).padStart(3, '0');
      img.src = `/sequence/ezgif-frame-${frameNum}.png`;

      img.onload = () => {
        if (!isMounted) return;
        count++;
        setLoadedCount(count);
        if (count === frameCount) {
          setIsReady(true);
        }
      };

      img.onerror = () => {
        if (!isMounted) return;
        count++;
        setLoadedCount(count);
        if (count === frameCount) {
          setIsReady(true);
        }
      };

      images.push(img);
    }

    imagesRef.current = images;

    return () => {
      isMounted = false;
    };
  }, [frameCount]);

  // Canvas render function implementing object-fit: cover logic
  const renderFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = imagesRef.current[index];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    // Handle high DPI devices
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const displayWidth = window.innerWidth;
    const displayHeight = window.innerHeight;

    if (canvas.width !== displayWidth * dpr || canvas.height !== displayHeight * dpr) {
      canvas.width = displayWidth * dpr;
      canvas.height = displayHeight * dpr;
    }

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, displayWidth, displayHeight);

    // Calculate aspect ratio for cover fit
    const imgWidth = img.naturalWidth;
    const imgHeight = img.naturalHeight;
    const scale = Math.max(displayWidth / imgWidth, displayHeight / imgHeight);

    const drawWidth = imgWidth * scale;
    const drawHeight = imgHeight * scale;
    const offsetX = (displayWidth - drawWidth) / 2;
    const offsetY = (displayHeight - drawHeight) / 2;

    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    ctx.restore();
  };

  // Render initial frame once images start loading or canvas is mounted
  useEffect(() => {
    if (imagesRef.current[0]) {
      renderFrame(0);
    }
  }, [loadedCount]);

  // Subscribe to Framer Motion scroll changes
  useMotionValueEvent(frameIndex, 'change', (latest) => {
    const targetIdx = Math.min(frameCount - 1, Math.max(0, Math.floor(latest)));
    if (targetIdx !== currentFrameIndexRef.current) {
      currentFrameIndexRef.current = targetIdx;
      requestAnimationFrame(() => renderFrame(targetIdx));
    }
  });

  // Handle window resizing
  useEffect(() => {
    const handleResize = () => {
      renderFrame(currentFrameIndexRef.current);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const progressPercent = Math.round((loadedCount / frameCount) * 100);

  return (
    <div className="fixed inset-0 h-screen w-full overflow-hidden bg-[#090d16] pointer-events-none z-0">
      {/* Loading overlay while preloading sequence */}
      {!isReady && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: loadedCount === frameCount ? 0 : 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#090d16] text-white"
        >
          <div className="relative mb-6 h-16 w-16">
            <div className="absolute inset-0 rounded-full border-2 border-sky-500/20" />
            <div className="absolute inset-0 rounded-full border-2 border-sky-400 border-t-transparent animate-spin" />
          </div>
          <div className="font-mono text-sm tracking-widest text-slate-400 uppercase">
            Loading Assets {progressPercent}%
          </div>
          <div className="mt-4 h-1 w-48 overflow-hidden rounded-full bg-slate-800">
            <div
              className="h-full bg-gradient-to-r from-sky-400 to-blue-600 transition-all duration-200"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </motion.div>
      )}

      {/* Main HTML5 Canvas */}
      <canvas
        ref={canvasRef}
        className="block h-full w-full object-cover transition-opacity duration-700"
        style={{ opacity: isReady ? 1 : 0 }}
      />

      {/* Subtle vignette gradient overlay to blend frame edges */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background: 'radial-gradient(circle at center, transparent 40%, #090d16 98%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-48 opacity-90"
        style={{
          background: 'linear-gradient(to top, #090d16 0%, transparent 100%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-48 opacity-90"
        style={{
          background: 'linear-gradient(to bottom, #090d16 0%, transparent 100%)',
        }}
      />

      {/* Children elements (Parallax Overlays) */}
      {children}
    </div>
  );
}
