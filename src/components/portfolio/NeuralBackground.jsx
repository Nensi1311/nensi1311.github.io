import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

/**
 * Global animated neural-network / constellation backdrop.
 * Fixed behind the whole page, adapts to light & dark themes.
 */
export default function NeuralBackground() {
  const canvasRef = useRef(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isDark = !mounted || resolvedTheme === "dark";

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const line = isDark ? "129,140,248" : "99,102,241"; // indigo-400 / indigo-500
    const dot = isDark ? "165,180,252" : "79,70,229";
    const lineAlpha = isDark ? 0.22 : 0.18;
    const dotAlpha = isDark ? 0.55 : 0.45;
    const LINK_DIST = 150;

    let points = [];
    let raf;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const w = window.innerWidth;
      const h = window.innerHeight;
      const count = Math.min(140, Math.max(55, Math.floor((w * h) / 15000)));
      points = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        p: Math.random() * Math.PI * 2,
      }));
    };

    const draw = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < points.length; i++) {
        const a = points[i];
        a.x += a.vx;
        a.y += a.vy;
        a.p += 0.02;
        if (a.x < 0 || a.x > w) a.vx *= -1;
        if (a.y < 0 || a.y > h) a.vy *= -1;

        for (let j = i + 1; j < points.length; j++) {
          const b = points[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const d = Math.hypot(dx, dy);
          if (d < LINK_DIST) {
            ctx.strokeStyle = `rgba(${line},${(1 - d / LINK_DIST) * lineAlpha})`;
            ctx.lineWidth = 1.1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }

        const alpha = dotAlpha * (0.6 + Math.sin(a.p) * 0.4);
        ctx.beginPath();
        ctx.arc(a.x, a.y, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${dot},${alpha})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [isDark]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[-1] bg-white dark:bg-[#03050c]"
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}
