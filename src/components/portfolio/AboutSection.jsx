import React from "react";
import { motion } from "framer-motion";
import { Brain, Code, Database, Sparkles } from "lucide-react";
import AITerminal from "./AiTerminal";

export default function AboutSection() {
  const highlights = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      desc: "Deep Learning, NLP, Computer Vision",
    },
    {
      icon: Code,
      title: "Programming",
      desc: "Python, SQL, C/C++",
    },
    {
      icon: Database,
      title: "Tools & Frameworks",
      desc: "TensorFlow, PyTorch, Scikit-learn",
    },
    {
      icon: Sparkles,
      title: "Research",
      desc: "Published in Wiley Journal",
    },
  ];

  return (
    <section id="about" className="py-32 bg-slate-950 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-purple-500 font-bold tracking-widest uppercase text-3xl md:text-4xl mb-9">
            About Me
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl blur-2xl" />
              <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700/50">
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  I'm an <span className="text-purple-400 font-semibold">AI-ML Engineer</span> and a 
                  graduate in Artificial Intelligence and Machine Learning from{" "}
                  <span className="text-white font-medium">Charotar University of Science and Technology</span>, 
                  with a CGPA of 9.41/10.
                </p>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                With expertise in frameworks like TensorFlow, PyTorch and Scikit-learn, 
                I train and fine-tune models that solve real-world problems through deep learning, 
                natural language processing and computer vision.
                </p>
                <p className="text-slate-300 text-lg leading-relaxed">
                  My work has been published in the <span className="text-cyan-400 font-medium">International Journal of Imaging Systems and Technology (Wiley)</span> and 
                  I've earned top honors in several hackathons and competitions, including a 1st-place 
                  finish at the ImmunoQuest Kaggle Competition.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
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
                  className="group p-6 bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}