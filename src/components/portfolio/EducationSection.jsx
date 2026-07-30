import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, School, BookOpen } from "lucide-react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import EducationIllustration from "./EducationIllustration";

const education = [
  {
    title: "B.Tech in Artificial Intelligence & Machine Learning",
    organization: "Charotar University of Science and Technology",
    location: "Anand, Gujarat",
    period: "2022 — 2026",
    description: "CGPA: 9.41 / 10",
    icon: GraduationCap,
  },
  {
    title: "Higher Secondary School",
    organization: "Kaushal Vidhyabhavan",
    location: "Surat, Gujarat",
    period: "2020 — 2022",
    description: "Percentage: 76.00%",
    icon: School,
  },
  {
    title: "Secondary School",
    organization: "Tapovan Vidhyalay",
    location: "Surat, Gujarat",
    period: "2019 — 2020",
    description: "Percentage: 92.16%",
    icon: BookOpen,
  },
];

function EducationCard({ edu, isActive }) {
  const Icon = edu.icon;
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ x: -4 }}
      className={`relative flex gap-4 rounded-2xl border p-5 transition-all md:p-6 ${
        isActive
          ? "border-indigo-400 bg-indigo-50/60 shadow-lg shadow-indigo-500/10 dark:border-indigo-500/40 dark:bg-indigo-500/5"
          : "border-slate-200 bg-white hover:border-indigo-300 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-indigo-500/30"
      }`}
    >
      <span className="absolute right-5 top-5 whitespace-nowrap font-mono text-xs font-medium text-indigo-600 dark:text-indigo-400 md:text-sm">
        {edu.period}
      </span>
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 md:h-14 md:w-14 dark:bg-indigo-500/15">
        <Icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" strokeWidth={1.75} />
      </div>
      <div className="min-w-0 pr-16 pt-0.5 md:pr-20">
        <h3 className="text-sm font-bold leading-snug text-slate-900 dark:text-white md:text-base">
          {edu.title}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {edu.organization}
        </p>
        <p className="mt-0.5 text-xs text-slate-400 dark:text-slate-500">
          {edu.location}
        </p>
        <p className="mt-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
          {edu.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function EducationSection() {
  return (
    <Section id="education">
      <SectionHeader
        index="05"
        eyebrow="My academic journey"
        title="Education"
        accent="& learning."
      />

      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <EducationIllustration />
        <div className="space-y-5">
          {education.map((edu, index) => (
            <EducationCard key={edu.title} edu={edu} isActive={index === 0} />
          ))}
        </div>
      </div>
    </Section>
  );
}
