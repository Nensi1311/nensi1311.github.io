import React from "react";
import { motion } from "framer-motion";
import { Award, BookOpen, ExternalLink } from "lucide-react";

export default function CertificationsSection() {
  const certifications = [
    {
      name: "Database Management System",
      url: "https://drive.google.com/file/d/1OlG_wBxa8xwQ9Vssy8crwHAZbzz2aaiK/view?usp=drive_link",
      provider: "NPTEL",
    },
    {
      name: "Introduction to Machine Learning",
      url: "https://drive.google.com/file/d/1_ehTlnC2WDHwEE3SuIeRU6paYjLQvZdj/view?usp=drive_link",
      provider: "NPTEL",
    },
    {
      name: "Deep Learning for Natural Language Processing",
      url: "https://drive.google.com/file/d/1cqg7tUykh0DWB2deOOAF0iTT6qr1Nnnv/view?usp=drive_link",
      provider: "NPTEL",
    },
    {
      name: "Exploratory Data Analysis for Machine Learning",
      url: "https://www.coursera.org/account/accomplishments/verify/FJ8SXC73BXRQ",
      provider: "Coursera",
    },
    {
      name: "AI Engineering Professional Certificate",
      url: "https://www.coursera.org/account/accomplishments/professional-cert/J3KBN9LQKGU0",
      provider: "Coursera IBM",
    },
  ];

  return (
    <section id="certifications" className="py-32 bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.008)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-rose-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-amber-400 font-mono text-sm tracking-[0.25em] uppercase mb-3">
            Validations of Skill
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Certificates & Publications.
          </h2>
        </motion.div>

        {/* Certifications Subsection */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-10">
            <Award className="w-5 h-5 text-amber-400" />
            <h3 className="text-xl font-bold text-white font-mono">
              certifications<span className="text-amber-400">.list()</span>
            </h3>
            <div className="flex-1 h-px bg-gradient-to-r from-amber-500/30 to-transparent" />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <motion.a
                key={cert.name}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -3, scale: 1.01 }}
                className="group flex items-center gap-4 bg-slate-950/80 border border-slate-800/80 hover:border-amber-500/30 rounded-xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.2)] transition-all duration-300"
              >
                <span className="font-mono text-xs text-amber-500/60 w-6 shrink-0">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 flex-1">
                  <span className="font-mono text-[10px] text-amber-400/80 uppercase tracking-wider">
                    {cert.provider}
                  </span>
                  <p className="text-sm font-semibold text-slate-300 group-hover:text-amber-200 transition-colors truncate">
                    {cert.name}
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-amber-400 shrink-0 transition-colors" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Publications Subsection */}
        <div>
          <div className="flex items-center gap-3 mb-10">
            <BookOpen className="w-5 h-5 text-rose-400" />
            <h3 className="text-xl font-bold text-white font-mono">
              publications<span className="text-rose-400">[0]</span>
            </h3>
            <div className="flex-1 h-px bg-gradient-to-r from-rose-500/30 to-transparent" />
          </div>

          <motion.a
            href="https://onlinelibrary.wiley.com/doi/pdfdirect/10.1002/ima.70037"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="group block bg-slate-950/80 rounded-2xl border border-slate-800/80 hover:border-rose-500/30 overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-all duration-300"
          >
            <div className="flex items-center gap-2 px-5 py-3.5 bg-slate-900/80 border-b border-slate-800">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80 animate-pulse" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              <span className="ml-2 text-xs text-slate-500 font-mono">~/papers/blood-cell-detection.pdf</span>
            </div>
            <div className="p-6 md:p-10">
              <h4 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-rose-300 transition-colors flex items-start justify-between gap-4">
                Benchmarking YOLO Variants for Enhanced Blood Cell Detection
                <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-rose-400 shrink-0 mt-1 transition-colors" />
              </h4>
              <p className="text-slate-400 text-sm md:text-base mb-5 leading-relaxed">
                Authored a peer-reviewed research paper benchmarking YOLO variants (YOLOv5, YOLOv7, YOLOv8) specifically tuned for medical imaging datasets to optimize white and red blood cell counts with high reliability.
              </p>
              <p className="text-slate-500 text-sm font-mono mb-6">
                International Journal of Imaging Systems and Technology — Wiley
              </p>
              <div className="flex flex-wrap gap-2.5">
                <span className="font-mono text-xs px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 rounded-md">
                  impact_factor: 3.0
                </span>
                <span className="font-mono text-xs px-3 py-1 bg-slate-900 text-slate-400 border border-slate-800 rounded-md">
                  peer_reviewed: true
                </span>
              </div>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
