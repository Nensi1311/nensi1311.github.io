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

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Python", color: "from-yellow-400 to-yellow-600" },
      { name: "SQL", color: "from-blue-400 to-blue-600" },
      { name: "C/C++", color: "from-cyan-400 to-cyan-600" },
      { name: "LaTeX", color: "from-green-400 to-green-600" },
    ],
  },
  {
    title: "AI/ML Frameworks",
    skills: [
      { name: "TensorFlow", color: "from-orange-400 to-orange-600" },
      { name: "PyTorch", color: "from-red-400 to-red-600" },
      { name: "Scikit-learn", color: "from-blue-400 to-blue-600" },
      { name: "Keras", color: "from-red-400 to-pink-600" },
      { name: "OpenCV", color: "from-green-400 to-green-600" },
    ],
  },
  {
    title: "Data Science",
    skills: [
      { name: "NumPy", color: "from-blue-400 to-cyan-600" },
      { name: "Pandas", color: "from-purple-400 to-purple-600" },
      { name: "Matplotlib", color: "from-orange-400 to-yellow-600" },
      { name: "Seaborn", color: "from-cyan-400 to-blue-600" },
    ],
  },
  {
    title: "Specializations",
    skills: [
      { name: "Deep Learning", color: "from-purple-400 to-pink-600" },
      { name: "NLP", color: "from-green-400 to-emerald-600" },
      { name: "Computer Vision", color: "from-blue-400 to-indigo-600" },
      { name: "GenAI", color: "from-pink-400 to-rose-600" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", color: "from-orange-400 to-red-600" },
      { name: "PostgreSQL", color: "from-blue-400 to-blue-700" },
      { name: "PowerBI", color: "from-yellow-400 to-yellow-600" },
      { name: "Jupyter", color: "from-orange-400 to-orange-600" },
      { name: "VS Code", color: "from-blue-400 to-blue-600" },
    ],
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

function splitIntoPyramidRows(items) {
  const rows = [];
  let remaining = items.length;
  let width = Math.min(8, Math.max(4, Math.ceil(items.length / 3.2)));

  while (remaining > 0) {
    const count = Math.min(width, remaining);
    rows.push(items.splice(0, count));
    remaining -= count;
    width = Math.max(2, width - 1);
  }

  return rows;
}

function SkillIcon({ name }) {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon className="w-7 h-7 md:w-8 md:h-8 text-white/90" />;
}

function TechCard({ skill, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.03 }}
      className="group relative"
    >
      <div className="absolute inset-0 rounded-2xl bg-white/0 group-hover:bg-white/10 blur-2xl scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />

      <div className="relative w-[88px] h-[88px] md:w-[96px] md:h-[96px] flex flex-col items-center justify-center gap-2 rounded-2xl border border-purple-400/15 bg-purple-950/40 backdrop-blur-md shadow-lg shadow-purple-950/50 group-hover:border-purple-300/30 group-hover:bg-purple-900/50 transition-all duration-300">
        <SkillIcon name={skill.name} />
        <span className="text-[10px] md:text-[11px] font-medium text-white/80 text-center leading-tight px-1.5">
          {skill.name}
        </span>
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const allSkills = skillCategories.flatMap((cat) => cat.skills);
  const pyramidRows = splitIntoPyramidRows([...allSkills]);

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-[#1a0a2e] to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.18)_0%,transparent_65%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-purple-500/10 opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full border border-purple-400/15 opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-purple-400 font-medium tracking-widest uppercase text-sm mb-4">
            Technical Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Skills & Technologies
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="flex flex-col items-center gap-3 md:gap-4">
          {pyramidRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-wrap justify-center gap-3 md:gap-4"
            >
              {row.map((skill, skillIndex) => {
                const globalIndex =
                  pyramidRows.slice(0, rowIndex).reduce((sum, r) => sum + r.length, 0) +
                  skillIndex;
                return <TechCard key={skill.name} skill={skill} index={globalIndex} />;
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
