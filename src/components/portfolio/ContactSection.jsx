import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Phone, ArrowUpRight } from "lucide-react";

export default function ContactSection() {
  const socials = [
    {
      name: "GitHub",
      url: "https://github.com/Nensi1311",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/nensi-pansuriya/",
      icon: Linkedin,
    },
    {
      name: "Email",
      url: "mailto:nensipansuriya1311@gmail.com",
      icon: Mail,
    },
  ];

  return (
    <section id="contact" className="py-32 bg-slate-900 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-purple-400 font-medium tracking-widest uppercase text-sm mb-4">
            Get in Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Work Together
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-12">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 mb-12"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-purple-400" />
              </div>
              <p className="text-slate-400 text-sm mb-1">Email</p>
              <a
                href="mailto:nensipansuriya1311@gmail.com"
                className="text-white font-medium hover:text-purple-400 transition-colors"
              >
                nensipansuriya1311@gmail.com
              </a>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-purple-400" />
              </div>
              <p className="text-slate-400 text-sm mb-1">Phone</p>
              <a
                href="tel:+919978640322"
                className="text-white font-medium hover:text-purple-400 transition-colors"
              >
                +91 9978640322
              </a>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-purple-400" />
              </div>
              <p className="text-slate-400 text-sm mb-1">Location</p>
              <p className="text-white font-medium">Surat, Gujarat, India</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center gap-4"
        >
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 bg-slate-800 rounded-full text-slate-300 hover:text-white hover:bg-slate-700 transition-all duration-300"
            >
              <social.icon className="w-5 h-5" />
              <span className="font-medium">{social.name}</span>
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}