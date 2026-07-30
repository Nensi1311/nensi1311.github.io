import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, FolderGit2, Trophy, LayoutGrid } from "lucide-react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

const projects = [
  {
    title: "ScholarEnv",
    path: "~/projects/scholar-env",
    description:
      "A reinforcement-learning environment that trains a language model (Qwen-1.5B) to audit research papers like a detective — detecting fabricated results, ghost citations and hidden prompt injections through reward-driven learning rather than prompting.",
    tech: ["Python", "PyTorch", "Reinforcement Learning", "GRPO", "LLMs"],
    date: "2026.04",
    highlight: "Top 800 / 75,000+ — Meta × PyTorch OpenEnv Hackathon",
    featured: true,
  },
  {
    title: "AgriSutra",
    path: "~/projects/agri-sutra",
    description:
      "AI-powered web app helping farmers make better decisions with real-time insights on soil health, weather, market trends, government schemes and agricultural news.",
    tech: ["Python", "TypeScript", "Next.js", "Express.js", "PostgreSQL"],
    date: "2025.02",
    highlight: "Top 75 / 2,200+ — Odoo × CHARUSAT Hackathon",
  },
  {
    title: "White Blood Cell Classification",
    path: "~/projects/wbc-classifier",
    description:
      "Classified white blood cells into five classes using a pre-trained ResNet50 model in PyTorch, reaching a 97% Macro-F1 score through careful preprocessing and fine-tuning.",
    tech: ["Python", "Deep Learning", "PyTorch"],
    date: "2025.02",
    highlight: "1st Rank — ImmunoQuest Kaggle",
  },
  {
    title: "Bi-Level Image Classification",
    path: "~/projects/bi-level-clf",
    description:
      "Applied pre-trained CNN, MobileNetV2, ResNet50V2 and ResNet101V2 models for bi-level image classification, achieving 93% accuracy with MobileNetV2.",
    tech: ["Python", "Deep Learning", "Computer Vision", "Streamlit"],
    date: "2024.11",
    highlight: "Top 40 — Solution Challenge 2024",
  },
  {
    title: "Skin Cancer Classification",
    path: "~/projects/skin-cancer-clf",
    description:
      "Classified skin cancer on the HAM10000 dataset with ResNetV2 and YOLOv8 variants, achieving 90% accuracy through data augmentation, preprocessing and fine-tuning.",
    tech: ["Python", "Deep Learning", "YOLOv8", "ResNetV2"],
    date: "2024.06",
    highlight: "Research Internship Project",
  },
];

function ProjectCard({ project, index, featured = false }) {
  return (
    <div className="group">
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-black/5 transition-colors duration-300 hover:border-indigo-400 dark:border-slate-800 dark:bg-[#0c1120] dark:shadow-black/40 dark:hover:border-indigo-500/60">
        {/* terminal header */}
        <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-100/80 px-4 py-2.5 dark:border-slate-800 dark:bg-slate-950/60">
          <div className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
          <span className="ml-2 truncate font-mono text-[11px] text-slate-500">
            {project.path}
          </span>
        </div>

        <div className={`p-6 ${featured ? "md:p-9" : "md:p-7"}`}>
          <div className="mb-5 flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs tracking-wider text-slate-400 dark:text-slate-600">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="h-px w-8 bg-gradient-to-r from-indigo-500 to-violet-500" />
              <FolderGit2 className="h-4 w-4 text-slate-400 transition-colors group-hover:text-indigo-500 dark:text-slate-500" />
            </div>
            <span className="shrink-0 font-mono text-xs text-slate-400 dark:text-slate-500">
              {project.date}
            </span>
          </div>

          <h3
            className={`mb-3 font-bold text-slate-900 transition-colors group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400 ${
              featured ? "text-2xl md:text-3xl" : "text-xl"
            }`}
          >
            {project.title}
          </h3>

          {project.highlight && (
            <div className="mb-5 inline-flex items-center gap-2 rounded-lg border border-amber-300/60 bg-amber-50 px-3 py-1.5 font-mono text-xs text-amber-700 dark:border-amber-500/20 dark:bg-amber-500/5 dark:text-amber-300/90">
              <Trophy className="h-3.5 w-3.5 shrink-0 text-amber-500" />
              {project.highlight}
            </div>
          )}

          <p
            className={`mb-6 leading-relaxed text-slate-600 dark:text-slate-400 ${
              featured ? "max-w-3xl text-base md:text-lg" : "text-sm"
            }`}
          >
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 font-mono text-[11px] text-slate-600 dark:border-slate-800 dark:bg-slate-950/60 dark:text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-2 font-mono text-xs text-slate-400 transition-colors group-hover:text-indigo-500 dark:text-slate-500">
            <span>explore</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, 3);

  return (
    <Section id="projects">
      <SectionHeader
        index="03"
        eyebrow="Selected Work"
        title="Featured"
        accent="projects."
        description="Research-grade models and full-stack products — many recognised in national and global competitions. Scroll to leaf through them."
      />

      {/* Stacked-card scroll: only one project shows at a time; the next
          scrolls up and stacks over the previous, which stays pinned behind. */}
      <div className="relative">
        {visible.map((project, index) => (
          <React.Fragment key={project.title}>
            <div
              className="sticky"
              style={{ top: `calc(6rem + ${index * 1.5}rem)`, zIndex: index + 1 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProjectCard project={project} index={index} featured={index === 0} />
              </motion.div>
            </div>
            {/* scroll gap so the next card enters one at a time */}
            {index < visible.length - 1 && <div className="h-[60vh]" />}
          </React.Fragment>
        ))}
      </div>

      {projects.length > 3 && (
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll((v) => !v)}
            className="group inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 font-medium text-slate-700 transition-all hover:-translate-y-0.5 hover:border-indigo-400 hover:text-indigo-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-indigo-500 dark:hover:text-indigo-400"
          >
            <LayoutGrid className="h-4 w-4" />
            {showAll ? "Show fewer" : `View all projects (${projects.length})`}
          </button>
        </div>
      )}
    </Section>
  );
}
