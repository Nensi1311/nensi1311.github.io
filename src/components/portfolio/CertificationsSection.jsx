import React from "react";
import { motion } from "framer-motion";
import { Award, BookOpen, ExternalLink } from "lucide-react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

const certifications = [
  { name: "Database Management System", url: "https://drive.google.com/file/d/1OlG_wBxa8xwQ9Vssy8crwHAZbzz2aaiK/view?usp=drive_link", provider: "NPTEL" },
  { name: "Introduction to Machine Learning", url: "https://drive.google.com/file/d/1_ehTlnC2WDHwEE3SuIeRU6paYjLQvZdj/view?usp=drive_link", provider: "NPTEL" },
  { name: "Deep Learning for Natural Language Processing", url: "https://drive.google.com/file/d/1cqg7tUykh0DWB2deOOAF0iTT6qr1Nnnv/view?usp=drive_link", provider: "NPTEL" },
  { name: "Exploratory Data Analysis for Machine Learning", url: "https://www.coursera.org/account/accomplishments/verify/FJ8SXC73BXRQ", provider: "Coursera" },
  { name: "AI Engineering Professional Certificate", url: "https://www.coursera.org/account/accomplishments/professional-cert/J3KBN9LQKGU0", provider: "Coursera · IBM" },
];

export default function CertificationsSection() {
  return (
    <Section id="certifications" alt>
      <SectionHeader
        index="06"
        eyebrow="Validations of skill"
        title="Certificates &"
        accent="publications."
      />

      {/* Publication — the headline credential, so it leads */}
      <div className="mb-16">
        <div className="mb-8 flex items-center gap-3">
          <BookOpen className="h-5 w-5 text-indigo-500" />
          <h3 className="font-mono text-lg font-bold text-slate-900 dark:text-white">
            publication
          </h3>
          <span className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
        </div>

        <motion.a
          href="https://onlinelibrary.wiley.com/doi/pdfdirect/10.1002/ima.70037"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -4 }}
          className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:border-indigo-400 hover:shadow-xl hover:shadow-indigo-500/10 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-indigo-500/50"
        >
          <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-100/80 px-5 py-3 dark:border-slate-800 dark:bg-slate-950/60">
            <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-red-500/70" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
            <span className="ml-2 font-mono text-xs text-slate-500">
              ~/papers/blood-cell-detection.pdf
            </span>
          </div>
          <div className="p-6 md:p-10">
            <h4 className="mb-3 flex items-start justify-between gap-4 text-lg font-bold text-slate-900 transition-colors group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400 md:text-xl">
              Benchmarking YOLO Variants for Enhanced Blood Cell Detection
              <ExternalLink className="mt-1 h-5 w-5 shrink-0 text-slate-400 transition-colors group-hover:text-indigo-500" />
            </h4>
            <p className="mb-5 text-sm leading-relaxed text-slate-600 dark:text-slate-400 md:text-base">
              A peer-reviewed research paper benchmarking YOLO variants (YOLOv5,
              YOLOv7, YOLOv8) tuned for medical-imaging datasets, optimising
              white- and red-blood-cell counts with high reliability.
            </p>
            <p className="mb-6 font-mono text-sm text-slate-500">
              International Journal of Imaging Systems and Technology — Wiley
            </p>
            <div className="flex flex-wrap gap-2.5">
              <span className="rounded-md border border-indigo-300/60 bg-indigo-50 px-3 py-1 font-mono text-xs text-indigo-700 dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-300">
                impact_factor: 3.0
              </span>
              <span className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1 font-mono text-xs text-slate-600 dark:border-slate-800 dark:bg-slate-950/60 dark:text-slate-400">
                peer_reviewed: true
              </span>
            </div>
          </div>
        </motion.a>
      </div>

      {/* Certifications */}
      <div>
        <div className="mb-8 flex items-center gap-3">
          <Award className="h-5 w-5 text-indigo-500" />
          <h3 className="font-mono text-lg font-bold text-slate-900 dark:text-white">
            certifications
          </h3>
          <span className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {certifications.map((cert, index) => (
            <motion.a
              key={cert.name}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              whileHover={{ y: -3 }}
              className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-indigo-400 hover:shadow-lg hover:shadow-indigo-500/10 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-indigo-500/50"
            >
              <span className="w-6 shrink-0 font-mono text-xs text-indigo-500/70">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0 flex-1">
                <span className="font-mono text-[10px] uppercase tracking-wider text-indigo-600/80 dark:text-indigo-400/80">
                  {cert.provider}
                </span>
                <p className="truncate text-sm font-semibold text-slate-700 transition-colors group-hover:text-indigo-600 dark:text-slate-200 dark:group-hover:text-indigo-300">
                  {cert.name}
                </p>
              </div>
              <ExternalLink className="h-4 w-4 shrink-0 text-slate-400 transition-colors group-hover:text-indigo-500" />
            </motion.a>
          ))}
        </div>
      </div>
    </Section>
  );
}
