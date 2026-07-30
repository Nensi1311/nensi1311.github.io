import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useTheme } from "next-themes";

const MESSAGES = ["Hello! 👋", "I'm Nensi", "AI Engineer", "Let's build!"];

function useTypingCycle(messages, typingSpeed = 100, deleteSpeed = 55, pause = 1600) {
  const [text, setText] = useState("");
  const [msgIdx, setMsgIdx] = useState(0);
  const [phase, setPhase] = useState("typing");

  useEffect(() => {
    const current = messages[msgIdx];
    if (phase === "typing") {
      if (text.length < current.length) {
        const t = setTimeout(() => setText(current.slice(0, text.length + 1)), typingSpeed);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase("deleting"), pause);
      return () => clearTimeout(t);
    }
    if (phase === "deleting") {
      if (text.length > 0) {
        const t = setTimeout(() => setText((p) => p.slice(0, -1)), deleteSpeed);
        return () => clearTimeout(t);
      }
      setMsgIdx((i) => (i + 1) % messages.length);
      setPhase("typing");
    }
  }, [text, phase, msgIdx, messages, typingSpeed, deleteSpeed, pause]);

  return text;
}

// ── Neural canvas background (theme-aware) ────────────────────────────────────
function NeuralCanvas({ isDark }) {
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    c.width = c.offsetWidth;
    c.height = c.offsetHeight;
    const line = isDark ? "129,140,248" : "99,102,241"; // indigo-400 / indigo-500
    const dot = isDark ? "165,180,252" : "79,70,229";
    const pts = Array.from({ length: 26 }, () => ({
      x: Math.random() * c.width,
      y: Math.random() * c.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      p: Math.random() * Math.PI * 2,
    }));
    let id;
    const draw = () => {
      ctx.clearRect(0, 0, c.width, c.height);
      pts.forEach((a, i) => {
        a.x += a.vx;
        a.y += a.vy;
        a.p += 0.02;
        if (a.x < 0 || a.x > c.width) a.vx *= -1;
        if (a.y < 0 || a.y > c.height) a.vy *= -1;
        pts.forEach((b, j) => {
          if (j <= i) return;
          const d = Math.hypot(b.x - a.x, b.y - a.y);
          if (d < 110) {
            ctx.strokeStyle = `rgba(${line},${(1 - d / 110) * (isDark ? 0.16 : 0.14)})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        });
        const alpha = 0.16 + Math.sin(a.p) * 0.12;
        ctx.beginPath();
        ctx.arc(a.x, a.y, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${dot},${alpha})`;
        ctx.fill();
      });
      id = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(id);
  }, [isDark]);
  return <canvas ref={ref} className="absolute inset-0 h-full w-full" style={{ pointerEvents: "none" }} />;
}

// ── Floating label (theme-aware) ──────────────────────────────────────────────
function Tag({ style, label, tone, delay, depth = 40 }) {
  const tones = {
    indigo: "border-indigo-500/40 text-indigo-600 dark:text-indigo-300",
    violet: "border-violet-500/40 text-violet-600 dark:text-violet-300",
    sky: "border-sky-500/40 text-sky-600 dark:text-sky-300",
    emerald: "border-emerald-500/40 text-emerald-600 dark:text-emerald-300",
  };
  return (
    <motion.div
      className={`absolute rounded-lg border bg-white/85 px-2 py-0.5 font-mono text-[11px] shadow-sm backdrop-blur-sm dark:bg-slate-950/85 ${tones[tone]}`}
      style={{ ...style, transform: `translateZ(${depth}px)` }}
      animate={{ opacity: [0, 1, 1, 0], y: [0, -8, -8, -16] }}
      transition={{ duration: 4.2, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      {label}
    </motion.div>
  );
}

// ── The robot SVG (recoloured to the indigo/violet accent) ────────────────────
function AstroBot({ text }) {
  return (
    <motion.div
      className="relative"
      style={{ transform: "translateZ(60px)" }}
      animate={{ y: [0, -13, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg viewBox="0 0 240 340" width="240" height="340" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="g-helm" cx="38%" cy="32%" r="68%">
            <stop offset="0%" stopColor="#eef2ff" />
            <stop offset="45%" stopColor="#818cf8" />
            <stop offset="100%" stopColor="#3730a3" />
          </radialGradient>
          <radialGradient id="g-visor" cx="35%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#141033" />
            <stop offset="100%" stopColor="#07031a" />
          </radialGradient>
          <radialGradient id="g-body" cx="38%" cy="28%" r="70%">
            <stop offset="0%" stopColor="#c7d2fe" />
            <stop offset="55%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#312e81" />
          </radialGradient>
          <radialGradient id="g-screen" cx="50%" cy="50%" r="55%">
            <stop offset="0%" stopColor="#0c1445" />
            <stop offset="100%" stopColor="#060b2a" />
          </radialGradient>
          <radialGradient id="g-eye" cx="30%" cy="28%" r="65%">
            <stop offset="0%" stopColor="#e0f2fe" />
            <stop offset="35%" stopColor="#7dd3fc" />
            <stop offset="100%" stopColor="#0369a1" />
          </radialGradient>
          <radialGradient id="g-arm" cx="35%" cy="25%" r="70%">
            <stop offset="0%" stopColor="#c7d2fe" />
            <stop offset="100%" stopColor="#4338ca" />
          </radialGradient>
          <filter id="f-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="5" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="f-drop">
            <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#312e81" floodOpacity="0.5" />
          </filter>
        </defs>

        <g className="bot-sway">
          <motion.line
            x1="120" y1="14" x2="120" y2="42"
            stroke="#818cf8" strokeWidth="3" strokeLinecap="round"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <motion.circle
            cx="120" cy="11" r="7" fill="#a5b4fc" filter="url(#f-glow)"
            animate={{ r: [7, 10, 7], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />

          <ellipse cx="120" cy="120" rx="84" ry="76" fill="url(#g-helm)" filter="url(#f-drop)" />
          <rect x="48" y="98" width="144" height="66" rx="33" fill="url(#g-visor)" />
          <ellipse cx="92" cy="116" rx="30" ry="10" fill="white" opacity="0.06" transform="rotate(-12,92,116)" />

          <g>
            {[98, 142].map((cx, i) => (
              <g key={i}>
                <motion.circle
                  cx={cx} cy="128" r="20" fill="none" stroke="#7dd3fc" strokeWidth="1.5" opacity="0.5"
                  animate={{ r: [20, 24, 20], opacity: [0.4, 0.7, 0.4] }}
                  transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.5 }}
                />
                <circle cx={cx} cy="128" r="17" fill="url(#g-eye)" filter="url(#f-glow)" />
                <circle cx={cx} cy="128" r="10" fill="#0a0825" />
                <motion.circle
                  cx={cx} cy="128" r="5.5" fill="#38bdf8"
                  animate={{ r: [5.5, 7.5, 5.5], opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.3 }}
                />
                <circle cx={cx - 4} cy="123" r="3" fill="white" opacity="0.55" />
                <motion.ellipse
                  cx={cx} cy="128" rx="17" ry="17" fill="#0a0825"
                  animate={{ ry: [0, 0, 17, 0, 0] }}
                  transition={{ duration: 5.5, repeat: Infinity, times: [0, 0.43, 0.5, 0.57, 1] }}
                  style={{ transformOrigin: `${cx}px 128px` }}
                />
              </g>
            ))}
          </g>

          <ellipse cx="74" cy="150" rx="11" ry="6" fill="#818cf8" opacity="0.3" />
          <ellipse cx="166" cy="150" rx="11" ry="6" fill="#818cf8" opacity="0.3" />

          <g className="bot-fin-left">
            <ellipse cx="42" cy="256" rx="28" ry="13" fill="url(#g-arm)" filter="url(#f-drop)" />
            <motion.circle cx="26" cy="256" r="4" fill="#818cf8" filter="url(#f-glow)" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity }} />
          </g>
          <g className="bot-fin-right">
            <ellipse cx="198" cy="256" rx="28" ry="13" fill="url(#g-arm)" filter="url(#f-drop)" />
            <motion.circle cx="214" cy="256" r="4" fill="#a5b4fc" filter="url(#f-glow)" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }} />
          </g>

          <ellipse cx="120" cy="258" rx="64" ry="52" fill="url(#g-body)" filter="url(#f-drop)" />
          <ellipse cx="120" cy="250" rx="34" ry="22" fill="#eef2ff" opacity="0.12" />

          <rect x="78" y="236" width="84" height="46" rx="12" fill="#0a0020" stroke="#6366f1" strokeWidth="2" />
          <rect x="80" y="238" width="80" height="42" rx="10" fill="url(#g-screen)" />
          <motion.rect
            x="80" y="238" width="80" height="8" rx="4" fill="#818cf8" opacity="0.08"
            animate={{ y: [238, 272, 238] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
          />
          {[[84, 242], [156, 242], [84, 276], [156, 276]].map(([x, y], i) => (
            <motion.circle key={i} cx={x} cy={y} r="2.3" fill="#6366f1" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.2 }} />
          ))}
          <foreignObject x="82" y="246" width="76" height="28">
            <div
              style={{
                width: "100%", height: "100%",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "'JetBrains Mono','Courier New',monospace",
                fontSize: 10, color: "#7dd3fc",
                letterSpacing: "0.04em", overflow: "hidden", userSelect: "none",
              }}
            >
              <span style={{ whiteSpace: "nowrap" }}>
                {text}
                <span style={{ display: "inline-block", width: 2, height: 11, background: "#38bdf8", marginLeft: 2, verticalAlign: "middle", animation: "blink 0.9s step-end infinite" }} />
              </span>
            </div>
          </foreignObject>

          {[-24, -12, 0, 12, 24].map((dx, i) => (
            <motion.circle
              key={i} cx={120 + dx} cy="300" r="3.2"
              fill={["#818cf8", "#6366f1", "#38bdf8", "#6366f1", "#818cf8"][i]}
              filter="url(#f-glow)"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.3, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}

          <motion.ellipse
            cx="120" cy="318" rx="30" ry="10" fill="#38bdf8" filter="url(#f-glow)"
            animate={{ rx: [26, 34, 26], ry: [8, 14, 8], opacity: [0.35, 0.7, 0.35] }}
            transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
          />
          {[-14, 0, 14].map((dx, i) => (
            <motion.circle
              key={i} cx={120 + dx} r="3" fill="#7dd3fc" filter="url(#f-glow)"
              animate={{ cy: [316, 334], opacity: [0.9, 0] }}
              transition={{ duration: 1.1, repeat: Infinity, delay: i * 0.35, ease: "easeIn" }}
            />
          ))}
        </g>
      </svg>

      <motion.div
        className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600/25 blur-2xl"
        style={{ width: 130, height: 20 }}
        animate={{ scaleX: [1, 1.25, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}

export default function RobotAnimation() {
  const text = useTypingCycle(MESSAGES);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isDark = !mounted || resolvedTheme === "dark";

  // ── 3D parallax: track pointer and tilt the whole scene ──
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-16, 16]), { stiffness: 120, damping: 18 });
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [12, -12]), { stiffness: 120, damping: 18 });

  const handleMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const reset = () => {
    mx.set(0);
    my.set(0);
  };

  const tags = [
    { style: { left: "1%", top: "14%" }, label: "model.fit() ▶", tone: "indigo", delay: 0, depth: 30 },
    { style: { left: "66%", top: "9%" }, label: "val_acc: 97.3%", tone: "sky", delay: 1.5, depth: 55 },
    { style: { left: "72%", top: "64%" }, label: "LangGraph →", tone: "violet", delay: 2.8, depth: 20 },
    { style: { left: "0%", top: "66%" }, label: "loss: 0.032", tone: "emerald", delay: 1.0, depth: 45 },
    { style: { left: "60%", top: "80%" }, label: "ResNet-50 ✓", tone: "indigo", delay: 2.2, depth: 25 },
    { style: { left: "2%", top: "80%" }, label: "RAG pipeline ✓", tone: "sky", delay: 3.6, depth: 50 },
  ];

  return (
    <div
      className="relative flex h-full w-full items-center justify-center"
      onPointerMove={handleMove}
      onPointerLeave={reset}
      style={{ perspective: 1000 }}
    >
      <NeuralCanvas isDark={isDark} />

      <motion.div
        className="relative flex items-center justify-center"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        {tags.map((t, i) => (
          <Tag key={i} {...t} />
        ))}

        {/* orbit rings — layered at different depths for parallax */}
        <motion.div
          className="absolute h-[340px] w-[340px] rounded-full"
          style={{ border: "1px dashed rgba(99,102,241,0.28)", transform: "translateZ(0px)" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        >
          <motion.div className="absolute -top-2.5 left-1/2 h-5 w-5 -translate-x-1/2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-400/60" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2, repeat: Infinity }} />
        </motion.div>
        <motion.div
          className="absolute h-60 w-60 rounded-full border border-violet-400/20"
          style={{ transform: "translateZ(35px)" }}
          animate={{ rotate: -360 }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
        >
          <motion.div className="absolute -top-2 left-1/2 h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-violet-400 shadow-lg shadow-violet-400/50" animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 1.8, repeat: Infinity }} />
        </motion.div>
        <motion.div
          className="absolute h-[440px] w-[440px] rounded-full"
          style={{ border: "1px dotted rgba(56,189,248,0.22)", transform: "translateZ(-20px)" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        >
          <motion.div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-sky-300 shadow-lg shadow-sky-300/60" animate={{ scale: [1, 1.6, 1] }} transition={{ duration: 2.4, repeat: Infinity }} />
        </motion.div>

        <motion.div
          className="pointer-events-none absolute h-72 w-72 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.12, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3.5, repeat: Infinity }}
        />

        <AstroBot text={text} />
      </motion.div>

      <style>{`
        @keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
        @keyframes botSway{0%,100%{transform:rotate(-5deg)}50%{transform:rotate(5deg)}}
        @keyframes botFinL{0%,100%{transform:rotate(-12deg)}50%{transform:rotate(12deg)}}
        @keyframes botFinR{0%,100%{transform:rotate(12deg)}50%{transform:rotate(-12deg)}}
        .bot-sway{transform-box:view-box;transform-origin:120px 205px;animation:botSway 5s ease-in-out infinite}
        .bot-fin-left{transform-box:view-box;transform-origin:60px 256px;animation:botFinL 3.4s ease-in-out infinite}
        .bot-fin-right{transform-box:view-box;transform-origin:180px 256px;animation:botFinR 3.4s ease-in-out infinite}
      `}</style>
    </div>
  );
}
