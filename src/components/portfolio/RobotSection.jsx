// import React, { useEffect, useRef } from "react";
// import { motion } from "framer-motion";

// // Animated SVG Robot
// function Robot() {
//   return (
//     <motion.div
//       className="relative"
//       animate={{ y: [0, -12, 0] }}
//       transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
//     >
//       <svg
//         viewBox="0 0 200 260"
//         width="200"
//         height="260"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         {/* Glow effect */}
//         <defs>
//           <radialGradient id="glowGrad" cx="50%" cy="50%" r="50%">
//             <stop offset="0%" stopColor="#a855f7" stopOpacity="0.4" />
//             <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
//           </radialGradient>
//           <filter id="glow">
//             <feGaussianBlur stdDeviation="3" result="coloredBlur" />
//             <feMerge>
//               <feMergeNode in="coloredBlur" />
//               <feMergeNode in="SourceGraphic" />
//             </feMerge>
//           </filter>
//           <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
//             <stop offset="0%" stopColor="#1e1b4b" />
//             <stop offset="100%" stopColor="#312e81" />
//           </linearGradient>
//           <linearGradient id="headGrad" x1="0%" y1="0%" x2="100%" y2="100%">
//             <stop offset="0%" stopColor="#1e1b4b" />
//             <stop offset="100%" stopColor="#4c1d95" />
//           </linearGradient>
//         </defs>

//         {/* Antenna */}
//         <motion.line
//           x1="100" y1="15" x2="100" y2="35"
//           stroke="#a855f7" strokeWidth="3" strokeLinecap="round"
//         />
//         <motion.circle
//           cx="100" cy="10" r="6"
//           fill="#a855f7" filter="url(#glow)"
//           animate={{ opacity: [1, 0.3, 1], r: [6, 8, 6] }}
//           transition={{ duration: 1.5, repeat: Infinity }}
//         />

//         {/* Head */}
//         <rect x="60" y="35" width="80" height="65" rx="16" fill="url(#headGrad)" stroke="#6d28d9" strokeWidth="1.5" />

//         {/* Eyes */}
//         <motion.rect
//           x="74" y="52" width="22" height="16" rx="6"
//           fill="#0f172a"
//           animate={{ scaleY: [1, 0.1, 1] }}
//           transition={{ duration: 4, repeat: Infinity, times: [0, 0.5, 0.6] }}
//         />
//         <motion.rect
//           x="104" y="52" width="22" height="16" rx="6"
//           fill="#0f172a"
//           animate={{ scaleY: [1, 0.1, 1] }}
//           transition={{ duration: 4, repeat: Infinity, times: [0, 0.5, 0.6] }}
//         />
//         {/* Eye glow */}
//         <motion.rect
//           x="76" y="54" width="18" height="12" rx="5"
//           fill="#a855f7"
//           animate={{ opacity: [0.9, 0.4, 0.9] }}
//           transition={{ duration: 2, repeat: Infinity }}
//           filter="url(#glow)"
//         />
//         <motion.rect
//           x="106" y="54" width="18" height="12" rx="5"
//           fill="#a855f7"
//           animate={{ opacity: [0.9, 0.4, 0.9] }}
//           transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
//           filter="url(#glow)"
//         />

//         {/* Mouth - data scan line */}
//         <rect x="78" y="82" width="44" height="8" rx="4" fill="#0f172a" />
//         <motion.rect
//           x="80" y="84" width="8" height="4" rx="2"
//           fill="#22d3ee"
//           animate={{ x: [80, 110, 80] }}
//           transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
//         />

//         {/* Neck */}
//         <rect x="88" y="100" width="24" height="14" rx="4" fill="#312e81" stroke="#6d28d9" strokeWidth="1" />

//         {/* Body */}
//         <rect x="45" y="114" width="110" height="90" rx="18" fill="url(#bodyGrad)" stroke="#6d28d9" strokeWidth="1.5" />

//         {/* Chest panel */}
//         <rect x="60" y="124" width="80" height="60" rx="10" fill="#0f172a" stroke="#4c1d95" strokeWidth="1" />

//         {/* Neural network dots on chest */}
//         {[
//           { cx: 80, cy: 138 }, { cx: 100, cy: 138 }, { cx: 120, cy: 138 },
//           { cx: 90, cy: 155 }, { cx: 110, cy: 155 },
//           { cx: 100, cy: 172 },
//         ].map((dot, i) => (
//           <motion.circle
//             key={i}
//             cx={dot.cx} cy={dot.cy} r="4"
//             fill="#a855f7"
//             animate={{ opacity: [0.3, 1, 0.3] }}
//             transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
//             filter="url(#glow)"
//           />
//         ))}
//         {/* Neural connections */}
//         <line x1="80" y1="138" x2="90" y2="155" stroke="#6d28d9" strokeWidth="1" opacity="0.6" />
//         <line x1="100" y1="138" x2="90" y2="155" stroke="#6d28d9" strokeWidth="1" opacity="0.6" />
//         <line x1="100" y1="138" x2="110" y2="155" stroke="#6d28d9" strokeWidth="1" opacity="0.6" />
//         <line x1="120" y1="138" x2="110" y2="155" stroke="#6d28d9" strokeWidth="1" opacity="0.6" />
//         <line x1="90" y1="155" x2="100" y2="172" stroke="#6d28d9" strokeWidth="1" opacity="0.6" />
//         <line x1="110" y1="155" x2="100" y2="172" stroke="#6d28d9" strokeWidth="1" opacity="0.6" />

//         {/* Left arm */}
//         <motion.g
//           animate={{ rotate: [-8, 8, -8] }}
//           transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//           style={{ transformOrigin: "45px 125px" }}
//         >
//           <rect x="20" y="114" width="28" height="70" rx="14" fill="url(#bodyGrad)" stroke="#6d28d9" strokeWidth="1.5" />
//           <motion.circle cx="34" cy="192" r="10" fill="#1e1b4b" stroke="#6d28d9" strokeWidth="1.5" />
//           <motion.circle
//             cx="34" cy="192" r="5"
//             fill="#22d3ee"
//             animate={{ opacity: [0.5, 1, 0.5] }}
//             transition={{ duration: 1.5, repeat: Infinity }}
//             filter="url(#glow)"
//           />
//         </motion.g>

//         {/* Right arm */}
//         <motion.g
//           animate={{ rotate: [8, -8, 8] }}
//           transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//           style={{ transformOrigin: "155px 125px" }}
//         >
//           <rect x="152" y="114" width="28" height="70" rx="14" fill="url(#bodyGrad)" stroke="#6d28d9" strokeWidth="1.5" />
//           <motion.circle cx="166" cy="192" r="10" fill="#1e1b4b" stroke="#6d28d9" strokeWidth="1.5" />
//           <motion.circle
//             cx="166" cy="192" r="5"
//             fill="#f472b6"
//             animate={{ opacity: [0.5, 1, 0.5] }}
//             transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
//             filter="url(#glow)"
//           />
//         </motion.g>

//         {/* Legs */}
//         <rect x="68" y="200" width="28" height="50" rx="12" fill="url(#bodyGrad)" stroke="#6d28d9" strokeWidth="1.5" />
//         <rect x="104" y="200" width="28" height="50" rx="12" fill="url(#bodyGrad)" stroke="#6d28d9" strokeWidth="1.5" />

//         {/* Feet */}
//         <rect x="62" y="242" width="38" height="14" rx="8" fill="#1e1b4b" stroke="#6d28d9" strokeWidth="1.5" />
//         <rect x="100" y="242" width="38" height="14" rx="8" fill="#1e1b4b" stroke="#6d28d9" strokeWidth="1.5" />
//       </svg>

//       {/* Scan line effect */}
//       <motion.div
//         className="absolute left-0 right-0 h-12 pointer-events-none"
//         style={{ background: "linear-gradient(to bottom, transparent, rgba(168,85,247,0.08), transparent)" }}
//         animate={{ top: ["-10%", "110%"] }}
//         transition={{ duration: 3.5, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
//       />

//       {/* Shadow / glow under robot */}
//       <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-6 bg-purple-600/30 rounded-full blur-xl" />
//     </motion.div>
//   );
// }

// // Floating data nodes around robot
// function FloatingNode({ x, y, delay, label }) {
//   return (
//     <motion.div
//       className="absolute text-xs font-mono text-purple-400/70 bg-slate-900/80 border border-purple-500/30 rounded-lg px-2 py-1 whitespace-nowrap"
//       style={{ left: x, top: y }}
//       initial={{ opacity: 0, scale: 0 }}
//       animate={{ opacity: [0, 1, 1, 0], scale: [0.5, 1, 1, 0.5], y: [0, -8, -8, -16] }}
//       transition={{ duration: 4, delay, repeat: Infinity, ease: "easeInOut" }}
//     >
//       {label}
//     </motion.div>
//   );
// }

// // Neural network particle canvas
// function NeuralParticles() {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d");
//     canvas.width = canvas.offsetWidth;
//     canvas.height = canvas.offsetHeight;

//     const nodes = Array.from({ length: 30 }, () => ({
//       x: Math.random() * canvas.width,
//       y: Math.random() * canvas.height,
//       vx: (Math.random() - 0.5) * 0.5,
//       vy: (Math.random() - 0.5) * 0.5,
//       r: Math.random() * 2 + 1,
//       pulse: Math.random() * Math.PI * 2,
//     }));

//     let animId;

//     function draw() {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       nodes.forEach((node) => {
//         node.x += node.vx;
//         node.y += node.vy;
//         node.pulse += 0.03;
//         if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
//         if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

//         const alpha = 0.3 + Math.sin(node.pulse) * 0.2;

//         // Draw connections
//         nodes.forEach((other) => {
//           const dx = other.x - node.x;
//           const dy = other.y - node.y;
//           const dist = Math.sqrt(dx * dx + dy * dy);
//           if (dist < 120) {
//             ctx.beginPath();
//             ctx.strokeStyle = `rgba(168, 85, 247, ${(1 - dist / 120) * 0.15})`;
//             ctx.lineWidth = 0.8;
//             ctx.moveTo(node.x, node.y);
//             ctx.lineTo(other.x, other.y);
//             ctx.stroke();
//           }
//         });

//         // Draw node
//         ctx.beginPath();
//         ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
//         ctx.fillStyle = `rgba(168, 85, 247, ${alpha})`;
//         ctx.fill();
//       });

//       animId = requestAnimationFrame(draw);
//     }

//     draw();
//     return () => cancelAnimationFrame(animId);
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="absolute inset-0 w-full h-full"
//       style={{ pointerEvents: "none" }}
//     />
//   );
// }

// export default function RobotAnimation() {
//   const floatingLabels = [
//     { x: "5%", y: "20%", delay: 0, label: "def train_model():" },
//     { x: "70%", y: "15%", delay: 1.2, label: "accuracy: 97%" },
//     { x: "75%", y: "65%", delay: 2.5, label: "epoch: 100/100" },
//     { x: "2%", y: "65%", delay: 0.8, label: "loss: 0.032" },
//     { x: "60%", y: "82%", delay: 1.8, label: "ResNet50 ✓" },
//     { x: "10%", y: "80%", delay: 3, label: "NLP Model →" },
//   ];

//   return (
//     <div className="relative w-full h-full flex items-center justify-center">
//       <NeuralParticles />

//       {/* Floating code labels */}
//       {floatingLabels.map((node, i) => (
//         <FloatingNode key={i} {...node} />
//       ))}

//       {/* Orbit rings */}
//       <div className="relative flex items-center justify-center">
//         <motion.div
//           className="absolute w-72 h-72 rounded-full border border-purple-500/20"
//           animate={{ rotate: 360 }}
//           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//         >
//           <motion.div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50" />
//         </motion.div>

//         <motion.div
//           className="absolute w-56 h-56 rounded-full border border-cyan-500/20"
//           animate={{ rotate: -360 }}
//           transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
//         >
//           <motion.div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50" />
//         </motion.div>

//         <motion.div
//           className="absolute w-40 h-40 rounded-full border border-pink-500/20"
//           animate={{ rotate: 360 }}
//           transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
//         >
//           <motion.div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-pink-400 rounded-full shadow-lg shadow-pink-400/50" />
//         </motion.div>

//         <Robot />
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const MESSAGES = [
  "Hello! 👋",
  "I'm Nensi",
  "AI Engineer",
  "Let's build!",
];

function useTypingCycle(messages, typingSpeed = 100, deleteSpeed = 55, pause = 1600) {
  const [text, setText] = useState("");
  const [msgIdx, setMsgIdx] = useState(0);
  const [phase, setPhase] = useState("typing"); // typing | pausing | deleting

  useEffect(() => {
    const current = messages[msgIdx];
    if (phase === "typing") {
      if (text.length < current.length) {
        const t = setTimeout(() => setText(current.slice(0, text.length + 1)), typingSpeed);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase("deleting"), pause);
        return () => clearTimeout(t);
      }
    } else if (phase === "deleting") {
      if (text.length > 0) {
        const t = setTimeout(() => setText((p) => p.slice(0, -1)), deleteSpeed);
        return () => clearTimeout(t);
      } else {
        setMsgIdx((i) => (i + 1) % messages.length);
        setPhase("typing");
      }
    }
  }, [text, phase, msgIdx, messages, typingSpeed, deleteSpeed, pause]);

  return text;
}

// ── Neural canvas background ──────────────────────────────────────────────────
function NeuralCanvas() {
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    c.width = c.offsetWidth;
    c.height = c.offsetHeight;
    const pts = Array.from({ length: 28 }, () => ({
      x: Math.random() * c.width, y: Math.random() * c.height,
      vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
      p: Math.random() * Math.PI * 2,
    }));
    let id;
    const draw = () => {
      ctx.clearRect(0, 0, c.width, c.height);
      pts.forEach((a, i) => {
        a.x += a.vx; a.y += a.vy; a.p += 0.02;
        if (a.x < 0 || a.x > c.width) a.vx *= -1;
        if (a.y < 0 || a.y > c.height) a.vy *= -1;
        pts.forEach((b, j) => {
          if (j <= i) return;
          const d = Math.hypot(b.x - a.x, b.y - a.y);
          if (d < 110) {
            ctx.strokeStyle = `rgba(167,139,250,${(1 - d / 110) * 0.14})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        });
        const alpha = 0.18 + Math.sin(a.p) * 0.12;
        ctx.beginPath(); ctx.arc(a.x, a.y, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(196,181,253,${alpha})`; ctx.fill();
      });
      id = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(id);
  }, []);
  return <canvas ref={ref} className="absolute inset-0 w-full h-full" style={{ pointerEvents: "none" }} />;
}

// ── Floating label ────────────────────────────────────────────────────────────
function Tag({ style, label, color, delay }) {
  const cls = { purple: "border-purple-500/40 text-purple-300", cyan: "border-cyan-500/40 text-cyan-300", pink: "border-pink-500/40 text-pink-300", green: "border-green-500/40 text-green-300" };
  return (
    <motion.div
      className={`absolute text-[11px] font-mono border ${cls[color]} bg-slate-950/90 backdrop-blur-sm rounded-lg px-2 py-0.5 whitespace-nowrap`}
      style={style}
      animate={{ opacity: [0, 1, 1, 0], y: [0, -8, -8, -16] }}
      transition={{ duration: 4.2, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      {label}
    </motion.div>
  );
}

// ── The robot SVG ─────────────────────────────────────────────────────────────
function AstroBot({ text }) {
  return (
    <motion.div
      className="relative"
      animate={{ y: [0, -13, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg viewBox="0 0 240 340" width="240" height="340" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="g-helm" cx="38%" cy="32%" r="68%">
            <stop offset="0%" stopColor="#f0e6ff" />
            <stop offset="45%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#4c1d95" />
          </radialGradient>
          <radialGradient id="g-visor" cx="35%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#1a0a40" />
            <stop offset="100%" stopColor="#0a0020" />
          </radialGradient>
          <radialGradient id="g-body" cx="38%" cy="28%" r="70%">
            <stop offset="0%" stopColor="#c4b5fd" />
            <stop offset="55%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#3b0764" />
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
            <stop offset="0%" stopColor="#c4b5fd" />
            <stop offset="100%" stopColor="#5b21b6" />
          </radialGradient>
          <radialGradient id="g-leg" cx="35%" cy="25%" r="70%">
            <stop offset="0%" stopColor="#c4b5fd" />
            <stop offset="100%" stopColor="#5b21b6" />
          </radialGradient>
          <filter id="f-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="5" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="f-drop">
            <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#3b0764" floodOpacity="0.5" />
          </filter>
          <filter id="f-screen-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        <g className="bot-sway">
          {/* ── Antenna ── */}
          <motion.line x1="120" y1="14" x2="120" y2="42"
            stroke="#a78bfa" strokeWidth="3" strokeLinecap="round"
            animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 1.5, repeat: Infinity }} />
          <motion.circle cx="120" cy="11" r="7" fill="#c084fc" filter="url(#f-glow)"
            animate={{ r: [7, 10, 7], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 1.5, repeat: Infinity }} />

          {/* ── Egg-shaped head dome ── */}
          <ellipse cx="120" cy="120" rx="84" ry="76" fill="url(#g-helm)" filter="url(#f-drop)" />

          {/* ── Wide visor band ── */}
          <rect x="48" y="98" width="144" height="66" rx="33" fill="url(#g-visor)" />
          <ellipse cx="92" cy="116" rx="30" ry="10" fill="white" opacity="0.06" transform="rotate(-12,92,116)" />

          {/* ── Eyes (blink only) ── */}
          <g>
            {[98, 142].map((cx, i) => (
              <g key={i}>
                <motion.circle cx={cx} cy="128" r="20" fill="none" stroke="#7dd3fc" strokeWidth="1.5" opacity="0.5"
                  animate={{ r: [20, 24, 20], opacity: [0.4, 0.7, 0.4] }}
                  transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.5 }} />
                <circle cx={cx} cy="128" r="17" fill="url(#g-eye)" filter="url(#f-glow)" />
                <circle cx={cx} cy="128" r="10" fill="#0a0825" />
                <motion.circle cx={cx} cy="128" r="5.5" fill="#38bdf8"
                  animate={{ r: [5.5, 7.5, 5.5], opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.3 }} />
                <circle cx={cx - 4} cy="123" r="3" fill="white" opacity="0.55" />
                {/* blink */}
                <motion.ellipse cx={cx} cy="128" rx="17" ry="17" fill="#0a0825"
                  animate={{ ry: [0, 0, 17, 0, 0] }}
                  transition={{ duration: 5.5, repeat: Infinity, times: [0, 0.43, 0.5, 0.57, 1] }}
                  style={{ transformOrigin: `${cx}px 128px` }} />
              </g>
            ))}
          </g>

          {/* ── Cheeks ── */}
          <ellipse cx="74" cy="150" rx="11" ry="6" fill="#f9a8d4" opacity="0.25" />
          <ellipse cx="166" cy="150" rx="11" ry="6" fill="#f9a8d4" opacity="0.25" />

          {/* ── Side hover fins (tilt) ── */}
          <g className="bot-fin-left">
            <ellipse cx="42" cy="256" rx="28" ry="13" fill="url(#g-arm)" filter="url(#f-drop)" />
            <motion.circle cx="26" cy="256" r="4" fill="#a855f7" filter="url(#f-glow)"
              animate={{ opacity:[0.5,1,0.5] }} transition={{ duration:1.5, repeat:Infinity }} />
          </g>
          <g className="bot-fin-right">
            <ellipse cx="198" cy="256" rx="28" ry="13" fill="url(#g-arm)" filter="url(#f-drop)" />
            <motion.circle cx="214" cy="256" r="4" fill="#f472b6" filter="url(#f-glow)"
              animate={{ opacity:[0.5,1,0.5] }} transition={{ duration:1.5, repeat:Infinity, delay:0.4 }} />
          </g>

          {/* ── Floating body pod (gap above = hovering) ── */}
          <ellipse cx="120" cy="258" rx="64" ry="52" fill="url(#g-body)" filter="url(#f-drop)" />
          <ellipse cx="120" cy="250" rx="34" ry="22" fill="#ede9fe" opacity="0.12" />

          {/* ── Chest screen ── */}
          <rect x="78" y="236" width="84" height="46" rx="12" fill="#0a0020" stroke="#7c3aed" strokeWidth="2" />
          <rect x="80" y="238" width="80" height="42" rx="10" fill="url(#g-screen)" />
          <motion.rect x="80" y="238" width="80" height="8" rx="4" fill="#818cf8" opacity="0.06"
            animate={{ y: [238, 272, 238] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }} />
          {[[84,242],[156,242],[84,276],[156,276]].map(([x,y],i)=>(
            <motion.circle key={i} cx={x} cy={y} r="2.3" fill="#7c3aed"
              animate={{ opacity:[0.3,1,0.3] }} transition={{ duration:1.4, repeat:Infinity, delay:i*0.2 }} />
          ))}
          <foreignObject x="82" y="246" width="76" height="28">
            <div
              style={{
                width:"100%", height:"100%",
                display:"flex", alignItems:"center", justifyContent:"center",
                fontFamily:"'Courier New',monospace",
                fontSize:10, color:"#67e8f9",
                letterSpacing:"0.04em", overflow:"hidden",
                userSelect:"none",
              }}
            >
              <span style={{ whiteSpace:"nowrap" }}>
                {text}
                <span style={{ display:"inline-block", width:2, height:11, background:"#22d3ee", marginLeft:2, verticalAlign:"middle", animation:"blink 0.9s step-end infinite" }} />
              </span>
            </div>
          </foreignObject>

          {/* ── Bottom LED strip ── */}
          {[-24,-12,0,12,24].map((dx,i)=>(
            <motion.circle key={i} cx={120+dx} cy="300" r="3.2"
              fill={["#a855f7","#818cf8","#38bdf8","#818cf8","#a855f7"][i]}
              filter="url(#f-glow)"
              animate={{ opacity:[0.3,1,0.3] }}
              transition={{ duration:1.3, repeat:Infinity, delay:i*0.2 }} />
          ))}

          {/* ── Hover thruster jet (replaces legs) ── */}
          <motion.ellipse cx="120" cy="318" rx="30" ry="10" fill="#38bdf8" filter="url(#f-glow)"
            animate={{ rx:[26,34,26], ry:[8,14,8], opacity:[0.35,0.7,0.35] }}
            transition={{ duration:0.9, repeat:Infinity, ease:"easeInOut" }} />
          {[-14,0,14].map((dx,i)=>(
            <motion.circle key={i} cx={120+dx} r="3" fill="#7dd3fc" filter="url(#f-glow)"
              animate={{ cy:[316,334], opacity:[0.9,0] }}
              transition={{ duration:1.1, repeat:Infinity, delay:i*0.35, ease:"easeIn" }} />
          ))}
        </g>
      </svg>

      {/* ground shadow */}
      <motion.div
        className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-violet-600/20 blur-2xl"
        style={{ width: 130, height: 20 }}
        animate={{ scaleX:[1,1.25,1], opacity:[0.3,0.5,0.3] }}
        transition={{ duration:4, repeat:Infinity, ease:"easeInOut" }}
      />
    </motion.div>
  );
}

export default function RobotAnimation() {
  const text = useTypingCycle(MESSAGES);

  const tags = [
    { style:{ left:"1%",  top:"14%" }, label:"model.fit() ▶",   color:"purple", delay:0   },
    { style:{ left:"68%", top:"9%"  }, label:"val_acc: 97.3%",  color:"cyan",   delay:1.5 },
    { style:{ left:"72%", top:"64%" }, label:"LangGraph →",     color:"pink",   delay:2.8 },
    { style:{ left:"0%",  top:"66%" }, label:"loss: 0.032",     color:"green",  delay:1.0 },
    { style:{ left:"62%", top:"80%" }, label:"ResNet-50 ✓",     color:"purple", delay:2.2 },
    { style:{ left:"2%",  top:"80%" }, label:"RAG pipeline ✓",  color:"cyan",   delay:3.6 },
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <NeuralCanvas />
      {tags.map((t, i) => <Tag key={i} {...t} />)}

      <div className="relative flex items-center justify-center">
        {/* orbits — three rings, different sizes & directions */}
        <motion.div className="absolute w-[340px] h-[340px] rounded-full"
          style={{ border:"1px dashed rgba(139,92,246,0.22)" }}
          animate={{ rotate:360 }} transition={{ duration:24, repeat:Infinity, ease:"linear" }}>
          <motion.div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-5 h-5 bg-violet-400 rounded-full shadow-lg shadow-violet-400/60"
            animate={{ scale:[1,1.5,1] }} transition={{ duration:2, repeat:Infinity }} />
        </motion.div>
        <motion.div className="absolute w-60 h-60 rounded-full border border-pink-400/15"
          animate={{ rotate:-360 }} transition={{ duration:16, repeat:Infinity, ease:"linear" }}>
          <motion.div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-pink-300 rounded-full shadow-lg shadow-pink-300/50"
            animate={{ scale:[1,1.4,1] }} transition={{ duration:1.8, repeat:Infinity }} />
        </motion.div>
        <motion.div className="absolute w-[440px] h-[440px] rounded-full"
          style={{ border:"1px dotted rgba(56,189,248,0.18)" }}
          animate={{ rotate:360 }} transition={{ duration:32, repeat:Infinity, ease:"linear" }}>
          <motion.div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-cyan-300 rounded-full shadow-lg shadow-cyan-300/60"
            animate={{ scale:[1,1.6,1] }} transition={{ duration:2.4, repeat:Infinity }} />
        </motion.div>
        <motion.div className="absolute w-[400px] h-[400px] rounded-full"
          style={{ border:"1px dashed rgba(52,211,153,0.16)" }}
          animate={{ rotate:-360 }} transition={{ duration:20, repeat:Infinity, ease:"linear" }}>
          <motion.div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-emerald-300 rounded-full shadow-lg shadow-emerald-300/60"
            animate={{ scale:[1,1.5,1] }} transition={{ duration:2.1, repeat:Infinity }} />
        </motion.div>
        {/* aura glow */}
        <motion.div className="absolute w-72 h-72 rounded-full pointer-events-none"
          style={{ background:"radial-gradient(circle, rgba(139,92,246,0.13) 0%, transparent 70%)" }}
          animate={{ scale:[1,1.12,1], opacity:[0.5,1,0.5] }}
          transition={{ duration:3.5, repeat:Infinity }} />

        <AstroBot text={text} />
      </div>

      {/* CSS for blinking cursor + robot limb motion */}
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