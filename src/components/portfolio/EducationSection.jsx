import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, School, BookOpen } from "lucide-react";
import EducationIllustration from "./EducationIllustration";

function EducationCard({ edu, index, isActive }) {
  // Select icon based on level of education
  const getIcon = () => {
    if (index === 0) return <GraduationCap className="w-6 h-6 text-white/90" strokeWidth={1.5} />;
    if (index === 1) return <School className="w-6 h-6 text-white/90" strokeWidth={1.5} />;
    return <BookOpen className="w-6 h-6 text-white/90" strokeWidth={1.5} />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.015, x: -4 }}
      className="group relative"
    >
      {isActive && (
        <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-purple-500/60 via-violet-400/40 to-purple-600/60 blur-[2px] opacity-80" />
      )}

      <div
        className={`relative rounded-xl p-5 md:p-6 flex gap-4 transition-all duration-300 ${
          isActive
            ? "bg-[#1a1535]/95 border border-purple-500/30 shadow-[0_0_30px_rgba(139,92,246,0.15)]"
            : "bg-[#151228]/90 border border-white/5 group-hover:border-purple-500/20 group-hover:bg-[#1a1535]/80"
        }`}
      >
        <span className="absolute top-5 right-5 text-xs md:text-sm font-medium text-[#2dd4bf] whitespace-nowrap">
          {edu.period}
        </span>

        <div className="w-[52px] h-[52px] md:w-14 md:h-14 rounded-lg bg-purple-600/80 flex items-center justify-center shrink-0 shadow-md shadow-purple-900/30">
          {getIcon()}
        </div>

        <div className="min-w-0 pr-20 md:pr-24 pt-0.5">
          <h3 className="text-sm md:text-base font-bold text-white uppercase tracking-wide leading-snug">
            {edu.title}
          </h3>
          <p className="text-slate-400 text-sm mt-2 leading-relaxed">{edu.organization}</p>
          <p className="text-slate-500 text-xs mt-1">{edu.location}</p>
          {edu.description && (
            <p className="text-[#2dd4bf]/80 text-xs font-semibold mt-1.5">{edu.description}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function EducationSection() {
  const education = [
    {
      title: "B.Tech in Artificial Intelligence and Machine Learning",
      organization: "Charotar University of Science and Technology",
      location: "Anand, Gujarat",
      period: "2022.06 — 2026",
      description: "CGPA: 9.41/10",
    },
    {
      title: "Higher Secondary School",
      organization: "Kaushal Vidhyabhavan",
      location: "Surat, Gujarat",
      period: "2020 — 2022",
      description: "Percentage: 76.00%",
    },
    {
      title: "Secondary School",
      organization: "Tapovan Vidhyalay",
      location: "Surat, Gujarat",
      period: "2019 — 2020",
      description: "Percentage: 92.16%",
    },
  ];

  return (
    <section id="education" className="py-32 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.008)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-[#2dd4bf] font-mono text-sm tracking-[0.25em] uppercase mb-3">
            My Academic Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Education.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <EducationIllustration />

          <div className="space-y-5">
            {education.map((edu, index) => (
              <EducationCard key={edu.title} edu={edu} index={index} isActive={index === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
