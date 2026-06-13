import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, FolderGit2, Trophy } from "lucide-react";

function TerminalCard({ children, path, className = "" }) {
  return (
    <div
      className={`bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden shadow-xl shadow-black/20 ${className}`}
    >
      <div className="flex items-center gap-2 px-4 py-3 bg-slate-900/80 border-b border-slate-800">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        <span className="ml-2 text-[11px] text-slate-500 font-mono truncate">{path}</span>
      </div>
      {children}
    </div>
  );
}

function ProjectCard({ project, index, featured = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`group ${featured ? "col-span-full" : ""}`}
    >
      <TerminalCard path={project.path} className="h-full hover:border-slate-700 transition-colors duration-300">
        <div className={`relative p-6 md:p-8 ${featured ? "md:p-10" : ""}`}>
          <div
            className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500`}
          />

          <div className="relative">
            <div className="flex items-start justify-between gap-4 mb-5">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-slate-600 tracking-wider">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className={`h-px w-8 bg-gradient-to-r ${project.color}`} />
                <FolderGit2 className="w-4 h-4 text-slate-500 group-hover:text-purple-400 transition-colors" />
              </div>
              <span className="font-mono text-xs text-slate-500 shrink-0">{project.date}</span>
            </div>

            <h3
              className={`font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${project.color} transition-all duration-300 ${
                featured ? "text-2xl md:text-3xl" : "text-xl"
              }`}
            >
              {project.title}
            </h3>

            {project.highlight && (
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-amber-300/90 font-mono mb-5">
                <Trophy className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                {project.highlight}
              </div>
            )}

            <p
              className={`text-slate-400 leading-relaxed mb-6 ${
                featured ? "text-base md:text-lg max-w-3xl" : "text-sm"
              }`}
            >
              <span className="text-slate-600 font-mono mr-2">{"//"}</span>
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className={`px-2.5 py-1 text-[11px] font-mono rounded-md border border-slate-800 bg-slate-900/80 text-slate-300 group-hover:border-slate-700 transition-colors`}
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs font-mono text-slate-500 group-hover:text-purple-400 transition-colors">
              <span>explore</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>
        </div>
      </TerminalCard>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const projects = [
    {
      title: "ScholarEnv",
      path: "~/projects/scholar-env",
      description:
        "A reinforcement learning environment that trains language model (Qwen-1.5B) to audit research papers like a detective, detecting fabricated results, ghost citations and hidden prompt injections through reward-driven learning rather than prompting.",
      tech: ["Python", "PyTorch", "Reinforcement Learning", "GRPO", "LLMs"],
      date: "2026.04",
      highlight: "Top 800 / 75,000+ — Meta x PyTorch OpenEnv Hackathon",
      color: "from-indigo-500 to-purple-600",
      featured: true,
    },
    {
      title: "AgriSutra",
      path: "~/projects/agri-sutra",
      description:
        "AI-powered digital web-app helping farmers make better decisions with real-time insights on soil health, weather, market trends, government schemes, and agricultural news.",
      tech: ["Python", "TypeScript", "Next.js", "Express.js", "PostgreSQL"],
      date: "2025.02",
      highlight: "Top 75 / 2,200+ — Odoo x CHARUSAT Hackathon",
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "White Blood Cells Classification",
      path: "~/projects/wbc-classifier",
      description:
        "Classified White Blood Cells into five classes using a pre-trained ResNet50 model in PyTorch, achieving 97% Macro F1 Score through preprocessing and fine-tuning.",
      tech: ["Python", "Deep Learning", "PyTorch"],
      date: "2025.02",
      highlight: "1st Rank — ImmunoQuest Kaggle",
      color: "from-red-500 to-pink-600",
    },
    {
      title: "Bi-Level Image Classification",
      path: "~/projects/bi-level-clf",
      description:
        "Applied pre-trained deep learning models: CNN, MobileNetV2, ResNet50V2 and ResNet101V2 for bi-level image classification, achieving 93% accuracy with MobileNetV2.",
      tech: ["Python", "Deep Learning", "Computer Vision", "Streamlit"],
      date: "2024.11",
      highlight: "Top 40 — Solution Challenge 2024",
      color: "from-blue-500 to-cyan-600",
    },
    {
      title: "Skin Cancer Classification",
      path: "~/projects/skin-cancer-clf",
      description:
        "Classified Skin Cancer using the HAM10000 dataset with ResNetV2 and YOLOv8 variants, achieving 90% accuracy through data augmentation, preprocessing and fine-tuning.",
      tech: ["Python", "Deep Learning", "YOLOv8", "ResNetV2"],
      date: "2024.06",
      highlight: "Research Internship Project",
      color: "from-purple-500 to-violet-600",
    },
  ];

  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="py-32 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-purple-400 font-mono text-sm mb-4">
            <span className="text-slate-600">{"//"}</span> my_work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl font-mono text-sm">
            {"const"} stack = ["AI/ML", "Full-Stack", "Research"];
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          <ProjectCard project={featured} index={0} featured />
          {rest.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
