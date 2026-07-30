import React from "react";
import { motion } from "framer-motion";
import {
  SiPython,
  SiMysql,
  SiCplusplus,
  SiLatex,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiKeras,
  SiOpencv,
  SiNumpy,
  SiPandas,
  SiGit,
  SiPostgresql,
  SiJupyter,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { Brain, Languages, ScanEye, Sparkles, BarChart3, Waves, PieChart } from "lucide-react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "SQL", "C/C++", "LaTeX"],
  },
  {
    title: "AI / ML Frameworks",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "OpenCV"],
  },
  {
    title: "Data Science",
    skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn"],
  },
  {
    title: "Specializations",
    skills: ["Deep Learning", "NLP", "Computer Vision", "GenAI"],
  },
  {
    title: "Tools",
    skills: ["Git", "PostgreSQL", "PowerBI", "Jupyter", "VS Code"],
  },
];

const iconMap = {
  Python: SiPython,
  SQL: SiMysql,
  "C/C++": SiCplusplus,
  LaTeX: SiLatex,
  TensorFlow: SiTensorflow,
  PyTorch: SiPytorch,
  "Scikit-learn": SiScikitlearn,
  Keras: SiKeras,
  OpenCV: SiOpencv,
  NumPy: SiNumpy,
  Pandas: SiPandas,
  Matplotlib: BarChart3,
  Seaborn: Waves,
  "Deep Learning": Brain,
  NLP: Languages,
  "Computer Vision": ScanEye,
  GenAI: Sparkles,
  Git: SiGit,
  PostgreSQL: SiPostgresql,
  PowerBI: PieChart,
  Jupyter: SiJupyter,
  "VS Code": VscVscode,
};

function SkillIcon({ name }) {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return (
    <Icon className="h-7 w-7 text-slate-700 transition-colors group-hover:text-indigo-600 dark:text-slate-200 dark:group-hover:text-indigo-400 md:h-8 md:w-8" />
  );
}

function TechCard({ name, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.02 }}
      whileHover={{ y: -4 }}
      className="group relative flex h-[92px] w-[92px] flex-col items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:border-indigo-400 hover:shadow-lg hover:shadow-indigo-500/10 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-indigo-500/50 md:h-[100px] md:w-[100px]"
    >
      <SkillIcon name={name} />
      <span className="px-1.5 text-center text-[10px] font-medium leading-tight text-slate-600 dark:text-slate-300 md:text-[11px]">
        {name}
      </span>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <Section id="skills" alt>
      <SectionHeader
        index="02"
        eyebrow="Technical Expertise"
        title="Skills &"
        accent="tooling."
        description="The languages, frameworks and tools I reach for to take an idea from notebook to deployed model."
      />

      <div className="space-y-10">
        {skillCategories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: ci * 0.05 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <h3 className="font-mono text-sm font-semibold text-slate-900 dark:text-white">
                {cat.title}
              </h3>
              <span className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
              <span className="font-mono text-xs text-slate-400 dark:text-slate-600">
                {String(cat.skills.length).padStart(2, "0")}
              </span>
            </div>
            <div className="flex flex-wrap gap-3 md:gap-4">
              {cat.skills.map((name, i) => (
                <TechCard key={name} name={name} index={i} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
