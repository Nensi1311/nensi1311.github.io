import React from "react";
import { motion } from "framer-motion";

// Custom isometric badge component
function IsometricBadge({ delay, duration, top, left, right, bottom, children, skewAngle = "-15deg", rotateAngle = "15deg" }) {
  const positionStyle = {};
  if (top !== undefined) positionStyle.top = top;
  if (left !== undefined) positionStyle.left = left;
  if (right !== undefined) positionStyle.right = right;
  if (bottom !== undefined) positionStyle.bottom = bottom;

  return (
    <motion.div
      style={{
        position: "absolute",
        ...positionStyle,
        transformStyle: "preserve-3d",
      }}
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      }}
      className="z-20 cursor-pointer pointer-events-auto"
    >
      <div 
        style={{ transform: `rotateX(55deg) rotateZ(-45deg) skewX(${skewAngle})` }}
        className="transition-all duration-300 hover:scale-110 active:scale-95"
      >
        {children}
      </div>
    </motion.div>
  );
}

export default function EducationIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40, scale: 0.96 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex items-center justify-center min-h-[340px] sm:min-h-[400px] md:min-h-[480px] w-full select-none"
    >
      {/* Background Glows */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-64 h-64 md:w-80 md:h-80 bg-fuchsia-600/20 rounded-full blur-[100px]" />
        <div className="absolute w-48 h-48 md:w-60 md:h-60 bg-cyan-500/10 rounded-full blur-[80px] translate-x-20 translate-y-12" />
      </div>

      {/* Main Container for Image and Animated Elements */}
      <div className="relative w-full max-w-[360px] sm:max-w-[400px] md:max-w-[460px] mx-auto aspect-square">
        
        {/* Base Static Illustration */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="w-full h-full"
        >
          <img
            src="/images/education-illustration.png"
            alt="Isometric education and learning illustration"
            className="w-full h-auto object-contain pointer-events-none"
            style={{
              filter: "drop-shadow(0 20px 40px rgba(139, 92, 246, 0.25))",
            }}
            draggable={false}
          />
        </motion.div>

        {/* ---------------- ANIMATED OVERLAYS ---------------- */}

        {/* 1. Floating Mail Badge (Top center-left) */}
        <IsometricBadge top="24%" left="44%" duration={4.2} delay={0.2}>
          <div className="w-9 h-9 md:w-11 md:h-11 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-900/40 border border-blue-400/40">
            <svg className="w-5.5 h-5.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
        </IsometricBadge>

        {/* 2. Floating Settings/Gear Badge (Top left) */}
        <IsometricBadge top="28%" left="29%" duration={4.8} delay={0.6}>
          <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-900/40 border border-indigo-400/30">
            <svg className="w-5.5 h-5.5 text-white animate-[spin_12s_linear_infinite]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.3 0-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
        </IsometricBadge>

        {/* 3. Floating UI Badge (Middle left) */}
        <IsometricBadge top="32%" left="37%" duration={3.9} delay={1.1}>
          <div className="px-3 py-1.5 rounded-lg bg-gradient-to-br from-fuchsia-500 to-pink-600 flex items-center justify-center shadow-lg shadow-pink-900/40 border border-fuchsia-400/40">
            <span className="text-xs md:text-sm font-bold text-white tracking-wide font-mono">UI</span>
          </div>
        </IsometricBadge>

        {/* 4. Floating Cloud File Badge (Far Left) & Vertical dashed connection */}
        <IsometricBadge top="47%" left="16%" duration={5.2} delay={0.4}>
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-700 flex items-center justify-center shadow-lg shadow-indigo-950/50 border border-violet-500/40 relative">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
            <div className="absolute w-2 h-2 bg-emerald-400 rounded-full top-1 right-1 animate-ping" />
          </div>
        </IsometricBadge>

        {/* 5. Floating Braces `{}` Badge (Bottom left) */}
        <IsometricBadge bottom="10%" left="37%" duration={4.5} delay={0.9}>
          <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-900/40 border border-cyan-400/40">
            <span className="text-sm font-bold text-white font-mono">{"{}"}</span>
          </div>
        </IsometricBadge>

        {/* 6. Rotating Gears overlay (Bottom Right) */}
        {/* Large gear (Teal) */}
        <div 
          style={{ 
            position: "absolute",
            bottom: "22%",
            right: "26%",
            transform: "rotateX(55deg) rotateZ(-45deg)",
          }}
          className="z-20 pointer-events-none opacity-90"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="w-10 h-10 md:w-12 md:h-12 text-[#2dd4bf] drop-shadow-[0_0_10px_rgba(45,212,191,0.5)]"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.3 0-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.2" />
            </svg>
          </motion.div>
        </div>

        {/* Small gear (Purple) */}
        <div 
          style={{ 
            position: "absolute",
            bottom: "26%",
            right: "19%",
            transform: "rotateX(55deg) rotateZ(-45deg)",
          }}
          className="z-20 pointer-events-none opacity-95"
        >
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="w-7 h-7 md:w-8 md:h-8 text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.3 0-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.2" />
            </svg>
          </motion.div>
        </div>

        {/* 7. Statistics / Chart overlay (Right side) */}
        <IsometricBadge top="38%" right="26%" duration={4.0} delay={0.8}>
          <div className="p-2.5 rounded-lg bg-slate-950/95 border border-purple-500/30 shadow-xl flex flex-col gap-1 items-center backdrop-blur-sm">
            <span className="text-[10px] md:text-xs font-bold text-purple-300 font-mono tracking-wide">75%</span>
            <div className="flex gap-0.5 items-end h-6 w-9 justify-center">
              <motion.div animate={{ height: [6, 16, 6] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }} className="w-1.5 bg-purple-500/80 rounded-t-sm" />
              <motion.div animate={{ height: [12, 6, 12] }} transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }} className="w-1.5 bg-fuchsia-500/80 rounded-t-sm" />
              <motion.div animate={{ height: [4, 20, 4] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }} className="w-1.5 bg-cyan-400/80 rounded-t-sm" />
            </div>
          </div>
        </IsometricBadge>

        {/* 8. 3D Floating Cube / Prism elements matching cyan/purple items */}
        <IsometricBadge bottom="28%" right="16%" duration={5.5} delay={1.2}>
          <div className="w-4.5 h-4.5 bg-cyan-400/30 border border-cyan-300/60 rounded rotate-45 shadow-[0_0_10px_rgba(34,211,238,0.4)] animate-[pulse_2s_infinite]" />
        </IsometricBadge>
        <IsometricBadge top="45%" right="12%" duration={5.0} delay={1.5}>
          <div className="w-4 h-4 bg-purple-500/30 border border-purple-400/50 rounded rotate-12 shadow-[0_0_8px_rgba(168,85,247,0.3)]" />
        </IsometricBadge>
      </div>

      {/* Floating 9.41 CGPA Badge (Matches original position but enhanced) */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="absolute bottom-[16%] right-[8%] sm:right-[12%] md:right-[16%] z-30"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          className="px-3 py-1.5 rounded-lg bg-[#0c0a18]/95 border-2 border-emerald-500/50 text-xs font-mono font-bold text-emerald-400 shadow-2xl shadow-emerald-950/60 backdrop-blur-md"
        >
          CGPA: 9.41/10
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
