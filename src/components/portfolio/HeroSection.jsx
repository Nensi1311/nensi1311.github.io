import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText, ChevronDown } from "lucide-react";
import RobotAnimation from "./RobotSection";

export default function HeroSection() {
  const roles = ["AI-ML Engineer", "Deep Learning Enthusiast", "Researcher"];
  const [currentRole, setCurrentRole] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12 min-h-screen py-24">
        
        {/* Left: Text content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-purple-400 font-medium tracking-widest uppercase text-sm mb-6 flex items-center gap-2 justify-center lg:justify-start">
              <span className="inline-block w-8 h-px bg-purple-400" />
              AI-ML Engineer
              <span className="inline-block w-8 h-px bg-purple-400" />
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Nensi
            </span>
            <br />Pansuriya
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-12 flex items-center mb-6 justify-center lg:justify-start"
          >
            <span className="text-lg md:text-xl text-cyan-400 font-mono">
              &gt;{" "}
              <motion.span
                key={currentRole}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-slate-300"
              >
                {roles[currentRole]}
              </motion.span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="text-purple-400"
              >_</motion.span>
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-slate-400 text-lg max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
          >
            A tech-forward AI engineer, always curious to learn new technologies and
            push the boundaries of what's next.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center gap-4 mb-10 justify-center lg:justify-start"
          >
            <a
              href="mailto:nensipansuriya1311@gmail.com"
              className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              Get in Touch
            </a>
            <a
              href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68b7cc6cb5ce888f3f2a4624/bb69fd7c4_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-slate-700 rounded-full text-white font-medium hover:bg-slate-800 hover:border-slate-600 transition-all duration-300"
            >
              <FileText className="w-5 h-5" />
              Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center gap-4 justify-center lg:justify-start"
          >
            <a href="https://github.com/Nensi1311" target="_blank" rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700 transition-all duration-300">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/nensi-pansuriya/" target="_blank" rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700 transition-all duration-300">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:nensipansuriya1311@gmail.com"
              className="p-3 rounded-full bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700 transition-all duration-300">
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* Right: Robot animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex-1 w-full h-[500px] relative flex items-center justify-center"
        >
          <RobotAnimation />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-slate-500 animate-bounce" />
      </motion.div>
    </section>
  );
}