import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const lines = [
  { text: "Initializing AI-ML engine...", color: "text-sky-400", delay: 0 },
  { text: "Loading TensorFlow & PyTorch...", color: "text-indigo-400", delay: 0.8 },
  { text: "Models: ResNet50, YOLOv8, MobileNetV2", color: "text-emerald-400", delay: 1.8 },
  { text: "Best score: 97% Macro-F1 ✓", color: "text-amber-400", delay: 2.8 },
  { text: "Publication: Wiley Journal [IF 3.0]", color: "text-violet-400", delay: 3.8 },
  { text: "Status: ready to innovate 🚀", color: "text-slate-100", delay: 4.8 },
];

function TypedLine({ text, color, delay }) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, [started, text]);

  if (!started && displayed.length === 0) return null;

  return (
    <div className={`flex items-center gap-2 font-mono text-sm ${color}`}>
      <span className="text-slate-500">$</span>
      <span>{displayed}</span>
      {displayed.length < text.length && (
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="inline-block h-4 w-2 bg-current"
        />
      )}
    </div>
  );
}

export default function AITerminal() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-2xl shadow-indigo-900/20 ring-1 ring-black/5 dark:ring-white/5"
    >
      <div className="flex items-center gap-2 border-b border-slate-800 bg-slate-900 px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-red-500/80" />
        <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
        <div className="h-3 w-3 rounded-full bg-green-500/80" />
        <span className="ml-3 font-mono text-xs text-slate-500">
          nensi@ai-portfolio ~ %
        </span>
      </div>
      <div className="min-h-[220px] space-y-3 p-6">
        {lines.map((line, i) => (
          <TypedLine key={i} {...line} />
        ))}
      </div>
    </motion.div>
  );
}
