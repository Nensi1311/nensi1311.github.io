import React from "react";
import { motion } from "framer-motion";
import laNetLogo from "@/assets/la_net_logo.png";
import vyaparLogo from "@/assets/vyapar_logo.png";
import charusatLogo from "@/assets/charusat.png";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

const experiences = [
  {
    title: "SDE Intern",
    organization: "La Net Software Solutions Pvt. Ltd.",
    location: "Surat, Gujarat",
    period: "Jan 2026 – Present",
    logo: laNetLogo,
    current: true,
    description: [
      "Working on ERP project development",
      "Hands-on with JavaScript, React, Python, Prompt Engineering, LangChain and LangGraph",
    ],
    tech: ["JavaScript", "React", "Python", "LangChain", "LangGraph"],
  },
  {
    title: "SDE Intern",
    organization: "VyaparTaxone",
    location: "Surat, Gujarat",
    period: "Jul 2025 – Dec 2025",
    logo: vyaparLogo,
    description: [
      "Built OCR pipelines with PyTesseract, EasyOCR and DoctrOCR for bank-statement PDFs",
      "Designed extraction workflows with PDFPlumber and structured prompt engineering",
    ],
    tech: ["Python", "OCR", "PDFPlumber", "PyTesseract", "EasyOCR"],
  },
  {
    title: "Research Intern",
    organization: "Charotar University of Science and Technology",
    location: "Anand, Gujarat",
    period: "May 2024 – Jun 2024",
    logo: charusatLogo,
    description: [
      "Completed IBM AI Engineering six-specialization program",
      "Skin Cancer Classification project — 90% accuracy with deep learning",
    ],
    tech: ["PyTorch", "Deep Learning", "Computer Vision", "IBM AI"],
  },
];

function ExperienceCard({ exp }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-indigo-400 hover:shadow-lg hover:shadow-indigo-500/10 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-indigo-500/50">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            {exp.title}
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {exp.organization}
          </p>
        </div>
        {exp.current && (
          <span className="shrink-0 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
            Current
          </span>
        )}
      </div>
      <ul className="space-y-2.5">
        {exp.description.map((desc, i) => (
          <li
            key={i}
            className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300"
          >
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
            {desc}
          </li>
        ))}
      </ul>
      {exp.tech && (
        <div className="mt-5 flex flex-wrap gap-2 border-t border-slate-100 pt-4 dark:border-slate-800/70">
          {exp.tech.map((t) => (
            <span
              key={t}
              className="rounded border border-slate-200 bg-slate-50 px-2 py-0.5 text-[10px] text-slate-500 dark:border-slate-800 dark:bg-slate-950/50 dark:text-slate-400"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <Section id="experience" alt>
      <SectionHeader
        index="04"
        eyebrow="What I've done so far"
        title="Work"
        accent="experience."
      />

      <div className="relative">
        {/* vertical rail */}
        <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-indigo-500/60 via-slate-200 to-transparent dark:via-slate-800 md:left-1/2 md:-translate-x-1/2" />

        <div className="space-y-10 md:space-y-0">
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={`${exp.title}-${exp.period}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative md:mb-14 md:flex md:items-center md:gap-8"
              >
                {/* node */}
                <div className="absolute left-0 top-1 z-10 flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-white shadow-md ring-2 ring-indigo-500/30 dark:border-slate-900 dark:bg-slate-900 md:left-1/2 md:-translate-x-1/2">
                  <img
                    src={exp.logo}
                    alt={exp.organization}
                    className="h-full w-full bg-white object-cover"
                  />
                </div>

                {/* content on alternating sides (desktop) */}
                <div
                  className={`ml-14 md:ml-0 md:w-1/2 ${
                    isLeft ? "md:pr-12 md:text-left" : "md:order-2 md:pl-12"
                  }`}
                >
                  <ExperienceCard exp={exp} />
                </div>
                <div
                  className={`hidden md:block md:w-1/2 ${
                    isLeft ? "md:pl-12" : "md:order-1 md:pr-12 md:text-right"
                  }`}
                >
                  <span className="font-mono text-sm text-slate-500 dark:text-slate-400">
                    {exp.period}
                  </span>
                  <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">
                    {exp.location}
                  </p>
                </div>

                {/* period on mobile */}
                <p className="ml-14 mt-2 font-mono text-xs text-slate-500 dark:text-slate-400 md:hidden">
                  {exp.period} · {exp.location}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
