import React from "react";
import { motion } from "framer-motion";
import { Trophy, Medal, Star, Target, Award } from "lucide-react";

export default function AchievementsSection() {
  const achievements = [
    {
      icon: Trophy,
      title: "1st Rank - ImmunoQuest Kaggle",
      description: "Won among 50 teams with INR 5000 prize implementing WBC classification system",
      color: "from-yellow-500 to-amber-600",
    },
    {
      icon: Medal,
      title: "1st Rank - Solution Challenge 2024",
      description: "Organized by IT, CSPIT - CHARUSAT",
      color: "from-purple-500 to-violet-600",
    },
    {
      icon: Star,
      title: "Top 40 - Solution Challenge 2024",
      description: "Implemented Bi-level image classification system and won INR 7500",
      color: "from-cyan-500 to-blue-600",
    },
    {
      icon: Target,
      title: "Top 75 - Odoo x CHARUSAT Hackathon",
      description: "Selected out of 2200+ teams, developed AgriSutra web application",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Award,
      title: "Top 800 - Meta x Scaler x PyTorch x HuggingFace",
      description: "Recognized in the Meta x PyTorch OpenEnv Hackathon for building ScholarEnv",
      color: "from-indigo-500 to-purple-600",
    }
  ];

  const competitive = [
    { label: "CodeChef Max Rating", value: "1362" },
    { label: "CodeChef Starters 188 Div-4", value: "Global Rank 1509" },
  ];

  return (
    <section id="achievements" className="py-32 bg-slate-950 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-purple-400 font-medium tracking-widest uppercase text-sm mb-4">
            Recognition
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Achievements
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-all duration-500`} />
              <div className="relative bg-slate-900/80 rounded-2xl border border-slate-800 hover:border-slate-700 p-6 transition-all duration-300">
                <div className={`w-12 h-12 bg-gradient-to-r ${achievement.color} rounded-xl flex items-center justify-center mb-4`}>
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {achievement.title}
                </h3>
                <p className="text-slate-400 text-sm">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Competitive Programming */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700/50"
        >
          <h3 className="text-xl font-semibold text-white mb-6 text-center">
            Competitive Programming
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {competitive.map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {item.value}
                </p>
                <p className="text-slate-400 text-sm mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}