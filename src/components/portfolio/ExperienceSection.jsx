import React from "react";
import { motion } from "framer-motion";
import laNetLogo from "@/assets/la_net_logo.png";
import vyaparLogo from "@/assets/vyapar_logo.png";
import charusatLogo from "@/assets/charusat.png";

function ExperienceTimelineCard({ exp, isLeft, showPointer = true }) {
  const pointerClass = showPointer
    ? isLeft
      ? "md:after:absolute md:after:top-8 md:after:-right-3 md:after:border-[10px] md:after:border-transparent md:after:border-l-[#1d1836]"
      : "md:after:absolute md:after:top-8 md:after:-left-3 md:after:border-[10px] md:after:border-transparent md:after:border-r-[#1d1836]"
    : "";

  return (
    <div
      className={`relative w-full bg-[#1d1836] rounded-2xl p-6 md:p-7 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_8px_32px_rgba(0,0,0,0.4)] border-b-2 border-white/10 hover:border-white/20 transition-colors ${
        isLeft ? "md:mr-8" : "md:ml-8"
      } ${pointerClass}`}
    >
      <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
      <p className="text-secondary text-sm text-slate-400 mb-4">{exp.organization}</p>
      <ul className="space-y-3">
        {exp.description.map((desc, i) => (
          <li key={i} className="text-white/90 text-sm leading-relaxed flex items-start gap-2.5">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
            {desc}
          </li>
        ))}
      </ul>
      {exp.tech && (
        <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-white/5">
          {exp.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 text-[10px] text-slate-400 bg-white/5 rounded border border-white/5"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

function TimelineExperienceItem({ exp, index }) {
  const isLeft = index % 2 === 0;
  const initials = exp.initials;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative md:mb-16 last:md:mb-0"
    >
      {/* Desktop: alternating timeline */}
      <div className="hidden md:flex items-start justify-between gap-0 min-h-[180px]">
        <div className="w-[42%] flex justify-end">
          {isLeft ? (
            <ExperienceTimelineCard exp={exp} isLeft />
          ) : (
            <p className="text-slate-400 text-sm pt-8 pr-4 text-right leading-relaxed">{exp.period}</p>
          )}
        </div>

        <div className="relative z-10 flex flex-col items-center shrink-0 w-[16%]">
          <div className="w-14 h-14 rounded-full border-2 border-white/80 bg-[#1d1836] flex items-center justify-center shadow-lg shadow-purple-900/40 overflow-hidden">
            {exp.logo ? (
              <img src={exp.logo} alt={exp.organization} className="w-full h-full object-cover bg-white" />
            ) : (
              <span className="text-sm font-bold text-white tracking-wide">{initials}</span>
            )}
          </div>
        </div>

        <div className="w-[42%]">
          {isLeft ? (
            <p className="text-slate-400 text-sm pt-8 pl-4 leading-relaxed">{exp.period}</p>
          ) : (
            <ExperienceTimelineCard exp={exp} isLeft={false} />
          )}
        </div>
      </div>

      {/* Mobile: stacked with left line */}
      <div className="md:hidden flex gap-5 pb-12 last:pb-0">
        <div className="flex flex-col items-center shrink-0">
          <div className="w-11 h-11 rounded-full border-2 border-white/80 bg-[#1d1836] flex items-center justify-center z-10 overflow-hidden">
            {exp.logo ? (
              <img src={exp.logo} alt={exp.organization} className="w-full h-full object-cover bg-white" />
            ) : (
              <span className="text-xs font-bold text-white">{initials}</span>
            )}
          </div>
        </div>
        <div className="flex-1">
          <p className="text-slate-400 text-xs mb-3">{exp.period}</p>
          <ExperienceTimelineCard exp={exp} isLeft showPointer={false} />
        </div>
      </div>
    </motion.div>
  );
}

export default function ExperienceSection() {
  const experiences = [
    {
      title: "SDE Intern",
      organization: "La Net Software Solutions Pvt. Ltd.",
      location: "Surat, Gujarat",
      period: "Jan 2026 – Present",
      initials: "LN",
      logo: laNetLogo,
      description: [
        "Working on ERP project development",
        "Hands-on with JavaScript, React, Python, Prompt Engineering, LangChain, and LangGraph",
      ],
      tech: ["JavaScript", "React", "Python", "LangChain", "LangGraph"],
    },
    {
      title: "SDE Intern",
      organization: "VyaparTaxone",
      location: "Surat, Gujarat",
      period: "July 2025 – December 2025",
      initials: "VT",
      logo: vyaparLogo,
      description: [
        "Built OCR pipelines with PyTesseract, EasyOCR, and DoctrOCR for bank statement PDFs",
        "Designed extraction workflows with PDFPlumber and structured prompt engineering",
      ],
      tech: ["Python", "OCR", "PDFPlumber", "PyTesseract", "EasyOCR"],
    },
    {
      title: "Research Intern",
      organization: "Charotar University of Science and Technology",
      location: "Anand, Gujarat",
      period: "May 2024 – June 2024",
      initials: "CU",
      logo: charusatLogo,
      description: [
        "Completed IBM AI Engineering six specialization courses",
        "Skin Cancer Classification project — 90% accuracy with deep learning",
      ],
      tech: ["PyTorch", "Deep Learning", "Computer Vision", "IBM AI"],
    },
  ];

  return (
    <section id="experience" className="py-32 bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-slate-400 text-sm tracking-[0.2em] uppercase mb-3">
            What I have done so far
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Work Experience.
          </h2>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-px -translate-x-1/2 bg-white/25" />
          <div className="md:hidden absolute left-[22px] top-4 bottom-4 w-px bg-white/20" />

          <div>
            {experiences.map((exp, index) => (
              <TimelineExperienceItem
                key={`${exp.title}-${exp.period}`}
                exp={exp}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
