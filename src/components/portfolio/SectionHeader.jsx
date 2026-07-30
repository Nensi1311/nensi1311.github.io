import React from "react";
import { motion } from "framer-motion";

/**
 * One header language for every section: a small mono eyebrow with an
 * index tag, a strong title, and an optional description. Left-aligned
 * by default (reads more senior/editorial); can be centered.
 */
export default function SectionHeader({
  index,
  eyebrow,
  title,
  accent,
  description,
  align = "left",
}) {
  const centered = align === "center";
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-14 md:mb-20 ${centered ? "text-center" : "max-w-2xl"}`}
    >
      <div
        className={`mb-4 flex items-center gap-3 font-mono text-xs tracking-wider ${
          centered ? "justify-center" : ""
        }`}
      >
        {index && (
          <span className="text-indigo-600 dark:text-indigo-400">{index}</span>
        )}
        <span className="h-px w-8 bg-indigo-500/50" />
        <span className="uppercase text-slate-500 dark:text-slate-400">
          {eyebrow}
        </span>
      </div>
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
        {title}
        {accent && <span className="text-gradient"> {accent}</span>}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400 md:text-lg ${
            centered ? "mx-auto max-w-2xl" : ""
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
