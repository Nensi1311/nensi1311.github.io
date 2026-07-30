import React from "react";
import { motion } from "framer-motion";
import { Brain, Code2, Database, Sparkles } from "lucide-react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import AITerminal from "./AiTerminal";

const highlights = [
  { icon: Brain, title: "AI & Machine Learning", desc: "Deep Learning, NLP, Computer Vision" },
  { icon: Code2, title: "Programming", desc: "Python, SQL, C/C++" },
  { icon: Database, title: "Tools & Frameworks", desc: "TensorFlow, PyTorch, Scikit-learn" },
  { icon: Sparkles, title: "Research", desc: "Published in Wiley Journal" },
];

export default function AboutSection() {
  return (
    <Section id="about">
      <SectionHeader
        index="01"
        eyebrow="About"
        title="Turning research into"
        accent="production."
        description="AI-ML engineer focused on building models that solve real problems — and shipping them."
      />

      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-indigo-500/10 to-violet-500/10 blur-2xl" />
          <div className="relative rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
            <p className="mb-5 text-base leading-relaxed text-slate-600 dark:text-slate-300 md:text-lg">
              I'm an{" "}
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                AI-ML Engineer
              </span>{" "}
              and a graduate in Artificial Intelligence and Machine Learning from{" "}
              <span className="font-medium text-slate-900 dark:text-white">
                Charotar University of Science and Technology
              </span>
              , with a CGPA of 9.41/10.
            </p>
            <p className="mb-5 text-base leading-relaxed text-slate-600 dark:text-slate-300 md:text-lg">
              With expertise in frameworks like TensorFlow, PyTorch and
              Scikit-learn, I train and fine-tune models that solve real-world
              problems through deep learning, natural language processing and
              computer vision.
            </p>
            <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300 md:text-lg">
              My work has been published in the{" "}
              <span className="font-medium text-sky-600 dark:text-sky-400">
                International Journal of Imaging Systems and Technology (Wiley)
              </span>
              , and I've earned top honors in several hackathons and
              competitions, including a 1st-place finish at the ImmunoQuest
              Kaggle Competition.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-6"
        >
          <AITerminal />
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-indigo-400 hover:shadow-lg hover:shadow-indigo-500/10 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-indigo-500/50"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 transition-transform group-hover:scale-110 dark:bg-indigo-500/15">
                  <item.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="mb-1.5 font-semibold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
