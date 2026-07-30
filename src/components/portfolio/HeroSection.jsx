import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import RobotAnimation from "./RobotSection";

const metrics = [
  { value: "9.41", label: "CGPA / 10" },
  { value: "IF 3.0", label: "Wiley publication" },
];

export default function HeroSection() {
  const roles = ["AI-ML Engineer", "Deep Learning Researcher", "Applied Scientist"];
  const [currentRole, setCurrentRole] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(
      () => setCurrentRole((prev) => (prev + 1) % roles.length),
      2800
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-transparent">
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col-reverse items-center gap-12 px-6 py-28 lg:flex-row lg:justify-between lg:gap-8">
        {/* Left: content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/60 px-3.5 py-1.5 text-xs font-medium text-slate-600 backdrop-blur dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Open to AI / ML roles &amp; collaborations
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl"
          >
            Nensi Pansuriya
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 flex h-9 items-center justify-center gap-2 font-mono text-lg text-slate-700 dark:text-slate-300 lg:justify-start"
          >
            <span className="text-indigo-500">&gt;</span>
            <motion.span
              key={currentRole}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-gradient font-semibold"
            >
              {roles[currentRole]}
            </motion.span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.9, repeat: Infinity }}
              className="text-indigo-500"
            >
              _
            </motion.span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400 lg:mx-0 md:text-lg"
          >
            I build and fine-tune deep-learning, NLP and computer-vision systems
            that move from research into production — from a{" "}
            <span className="font-medium text-slate-900 dark:text-white">
              peer-reviewed Wiley publication
            </span>{" "}
            to{" "}
            <span className="font-medium text-slate-900 dark:text-white">
              first-place Kaggle
            </span>{" "}
            wins.
          </motion.p>

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mx-auto mt-8 grid max-w-xs grid-cols-2 gap-3 lg:mx-0"
          >
            {metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-xl border border-slate-200 bg-white/60 px-2 py-3 text-center backdrop-blur dark:border-slate-800 dark:bg-slate-900/50"
              >
                <div className="text-lg font-bold text-slate-900 dark:text-white sm:text-xl">
                  {m.value}
                </div>
                <div className="mt-0.5 text-[10px] leading-tight text-slate-500 dark:text-slate-400 sm:text-[11px]">
                  {m.label}
                </div>
              </div>
            ))}
          </motion.div>

        </div>

        {/* Right: robot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.35 }}
          className="relative flex h-[380px] w-full flex-1 items-center justify-center sm:h-[460px] lg:h-[520px]"
        >
          <RobotAnimation />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        aria-label="Scroll to about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-slate-400 dark:text-slate-600 md:block"
      >
        <ArrowDown className="h-6 w-6 animate-bounce" />
      </motion.a>
    </section>
  );
}
