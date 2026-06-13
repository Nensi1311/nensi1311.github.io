import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const lines = [
  { text: "Initializing AI-ML Engine...", color: "text-cyan-400", delay: 0 },
  { text: "Loading TensorFlow & PyTorch...", color: "text-purple-400", delay: 0.8 },
  { text: "Models loaded: ResNet50, YOLOv8, MobileNetV2", color: "text-green-400", delay: 1.8 },
  { text: "Accuracy: 97% Macro F1 Score ✓", color: "text-yellow-400", delay: 2.8 },
  { text: "Publications: Wiley Journal [IF: 3.0]", color: "text-pink-400", delay: 3.8 },
  { text: "Status: Ready to innovate 🚀", color: "text-white", delay: 4.8 },
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
    <div className={`font-mono text-sm ${color} flex items-center gap-2`}>
      <span className="text-slate-500">$</span>
      <span>{displayed}</span>
      {displayed.length < text.length && (
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="inline-block w-2 h-4 bg-current"
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
      className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl shadow-purple-900/20"
    >
      {/* Terminal header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-slate-900 border-b border-slate-800">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-3 text-xs text-slate-500 font-mono">nensi@ai-portfolio ~ %</span>
      </div>

      {/* Terminal body */}
      <div className="p-6 space-y-3 min-h-[220px]">
        {lines.map((line, i) => (
          <TypedLine key={i} {...line} />
        ))}
      </div>
    </motion.div>
  );
}