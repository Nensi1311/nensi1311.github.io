import React from "react";
import { motion } from "framer-motion";
import { Trophy, Medal, Star, Target, Award } from "lucide-react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

const achievements = [
  { icon: Trophy, title: "1st Rank — ImmunoQuest Kaggle", description: "Won among 50 teams (₹5,000 prize) with a WBC classification system." },
  { icon: Medal, title: "1st Rank — Solution Challenge 2024", description: "Organised by IT, CSPIT — CHARUSAT." },
  { icon: Star, title: "Top 40 — Solution Challenge 2024", description: "Built a bi-level image-classification system and won ₹7,500." },
  { icon: Target, title: "Top 75 — Odoo × CHARUSAT Hackathon", description: "Selected from 2,200+ teams; developed the AgriSutra web app." },
  { icon: Award, title: "Top 800 — Meta × PyTorch OpenEnv", description: "Recognised (of 75,000+) for building ScholarEnv." },
];

const competitive = [
  { label: "CodeChef Max Rating", value: "1362" },
  { label: "CodeChef Starters 188 · Div-4", value: "Global Rank 1509" },
];

export default function AchievementsSection() {
  return (
    <Section id="achievements">
      <SectionHeader
        index="07"
        eyebrow="Recognition"
        title="Awards &"
        accent="achievements."
      />

      <div className="mb-10 grid gap-5 md:grid-cols-2">
        {achievements.map((a, index) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{ y: -5 }}
            className="group flex gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-indigo-400 hover:shadow-lg hover:shadow-indigo-500/10 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-indigo-500/50"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 transition-transform group-hover:scale-110 dark:bg-indigo-500/15">
              <a.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <h3 className="mb-1 font-semibold text-slate-900 dark:text-white">
                {a.title}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {a.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl border border-slate-200 bg-gradient-to-r from-indigo-50 to-violet-50 p-8 dark:border-slate-800 dark:from-slate-900/80 dark:to-slate-900/40"
      >
        <h3 className="mb-6 text-center text-lg font-semibold text-slate-900 dark:text-white">
          Competitive Programming
        </h3>
        <div className="flex flex-wrap justify-center gap-10">
          {competitive.map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-gradient text-2xl font-bold sm:text-3xl">
                {item.value}
              </p>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
