'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, motion, useMotionValueEvent, AnimatePresence } from 'framer-motion';

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
  const loadedCountRef = useRef<number>(0);
  const rafIdRef = useRef<number | null>(null);

  const [loadedCount, setLoadedCount] = useState<number>(0);
  const [isReady, setIsReady] = useState<boolean>(false);

  // Scroll Progress from 0 to 1 over containerRef (500vh)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Map 0 -> 1 progress to 0 -> (frameCount - 1)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, frameCount - 1]);

  // FULL PRELOAD: Load and decode all 78 WebP frames before starting portfolio interaction
  useEffect(() => {
    let isMounted = true;
    const images: HTMLImageElement[] = new Array(frameCount);
    imagesRef.current = images;
    loadedCountRef.current = 0;

    const loadSingleFrame = (i: number): Promise<void> => {
      return new Promise((resolve) => {
        const img = new Image();
        const frameNum = String(i + 1).padStart(3, '0');
        img.src = `/sequence/ezgif-frame-${frameNum}.webp`;

        const onComplete = async () => {
          if (!isMounted) {
            resolve();
            return;
          }

          // Off-main-thread image decoding before canvas rendering
          try {
            if ('decode' in img) {
              await img.decode();
            }
          } catch {
            // Ignore decode error and fallback to loaded image
          }

          if (!isMounted) {
            resolve();
            return;
          }

          images[i] = img;
          loadedCountRef.current++;
          setLoadedCount(loadedCountRef.current);
          resolve();
        };

        const onError = () => {
          if (!isMounted) {
            resolve();
            return;
          }
          loadedCountRef.current++;
          setLoadedCount(loadedCountRef.current);
          resolve();
        };

        img.onload = onComplete;
        img.onerror = onError;
      });
    };

    // Trigger full preload of all 78 WebP frames, then wait 2 seconds after load complete
    const promises: Promise<void>[] = [];
    for (let i = 0; i < frameCount; i++) {
      promises.push(loadSingleFrame(i));
    }

    Promise.all(promises).then(() => {
      setTimeout(() => {
        if (isMounted) {
          setIsReady(true);
        }
      }, 2000);
    });

    return () => {
      isMounted = false;
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [frameCount]);

  // Canvas render function drawing preloaded frame
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

  // Schedule render via rAF to avoid duplicate draw calls on rapid scroll
  const scheduleRender = (targetIndex: number) => {
    currentFrameIndexRef.current = targetIndex;

    if (rafIdRef.current !== null) {
      cancelAnimationFrame(rafIdRef.current);
    }

    rafIdRef.current = requestAnimationFrame(() => {
      rafIdRef.current = null;
      renderFrame(currentFrameIndexRef.current);
    });
  };

  // Render initial frame once preloading is 100% complete
  useEffect(() => {
    if (isReady) {
      scheduleRender(currentFrameIndexRef.current);
    }
  }, [isReady]);

  // Subscribe to Framer Motion scroll changes
  useMotionValueEvent(frameIndex, 'change', (latest) => {
    const targetIdx = Math.min(frameCount - 1, Math.max(0, Math.floor(latest)));
    if (targetIdx !== currentFrameIndexRef.current) {
      scheduleRender(targetIdx);
    }
  });

  // Handle window resizing
  useEffect(() => {
    const handleResize = () => {
      scheduleRender(currentFrameIndexRef.current);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const progressPercent = Math.round((loadedCount / frameCount) * 100);

  return (
    <div className="fixed inset-0 h-screen w-full overflow-hidden bg-[#090d16] pointer-events-none z-0">
      {/* Loading overlay while preloading full WebP sequence */}
      <AnimatePresence>
        {!isReady && (
          <motion.div
            key="loading-overlay"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#090d16] text-white pointer-events-auto"
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
      </AnimatePresence>

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


