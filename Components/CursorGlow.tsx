"use client";

import { useEffect, useRef } from "react";

const CursorGlow = () => {
  const glowRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", onMove, { passive: true });

    let frame: number;

    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.1;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.1;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${pos.current.x - 300}px, ${
          pos.current.y - 300
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
    <div
      ref={glowRef}
      className="pointer-events-none fixed left-0 top-0 z-40 h-[600px] w-[600px] rounded-full
        opacity-40
        bg-[radial-gradient(circle,rgba(59,130,246,0.15)_0%,rgba(59,130,246,0.05)_30%,transparent_60%)]
        will-change-transform"
    />
  );
};

export default CursorGlow;
