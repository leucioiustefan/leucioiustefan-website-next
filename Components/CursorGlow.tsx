"use client";

import { useEffect, useRef } from "react";

const CursorGlow = () => {
  const midRef = useRef<HTMLDivElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);

  const mouse = useRef({ x: 0, y: 0 });

  const mid = useRef({ x: 0, y: 0 });
  const outer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", onMove, { passive: true });

    let frame: number;

    const animate = () => {
      mid.current.x += (mouse.current.x - mid.current.x) * 0.12;
      mid.current.y += (mouse.current.y - mid.current.y) * 0.12;

      outer.current.x += (mouse.current.x - outer.current.x) * 0.07;
      outer.current.y += (mouse.current.y - outer.current.y) * 0.07;

      if (midRef.current) {
        midRef.current.style.transform = `translate3d(${mid.current.x - 110}px, ${
          mid.current.y - 110
        }px, 0)`;
      }

      if (outerRef.current) {
        outerRef.current.style.transform = `translate3d(${outer.current.x - 160}px, ${
          outer.current.y - 160
        }px, 0)`;
      }

      frame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div
        ref={outerRef}
        className="pointer-events-none fixed left-0 top-0 z-40 h-[320px] w-[320px] rounded-full
  mix-blend-screen opacity-60
  bg-[radial-gradient(circle,rgba(96,165,250,0.10)_0%,rgba(96,165,250,0.015)_70%)]
  blur-2xl will-change-transform"
      />

      <div
        ref={midRef}
        className="pointer-events-none fixed left-0 top-0 z-45 h-[220px] w-[220px] rounded-full
  mix-blend-screen opacity-85
  bg-[radial-gradient(circle,rgba(59,130,246,0.22)_0%,rgba(37,99,235,0.04)_70%)]
  blur-xl will-change-transform"
      />
    </>
  );
};

export default CursorGlow;
