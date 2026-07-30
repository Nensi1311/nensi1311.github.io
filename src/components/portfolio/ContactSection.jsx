import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Phone, ArrowUpRight, FileText } from "lucide-react";
import Section from "./Section";

const RESUME_URL =
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68b7cc6cb5ce888f3f2a4624/bb69fd7c4_Resume.pdf";

const contacts = [
  { icon: Mail, label: "Email", value: "nensipansuriya1311@gmail.com", href: "mailto:nensipansuriya1311@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 99786 40322", href: "tel:+919978640322" },
  { icon: MapPin, label: "Location", value: "Surat, Gujarat, India", href: null },
];

const socials = [
  { name: "GitHub", url: "https://github.com/Nensi1311", icon: Github },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/nensi-pansuriya/", icon: Linkedin },
  { name: "Email", url: "mailto:nensipansuriya1311@gmail.com", icon: Mail },
  { name: "Résumé", url: RESUME_URL, icon: FileText },
];

export default function ContactSection() {
  return (
    <Section id="contact" alt containerClassName="max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <div className="mb-4 flex items-center justify-center gap-3 font-mono text-xs uppercase tracking-wider">
          <span className="text-indigo-600 dark:text-indigo-400">08</span>
          <span className="h-px w-8 bg-indigo-500/50" />
          <span className="text-slate-500 dark:text-slate-400">Get in touch</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
          Let's build something<span className="text-gradient"> together.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 dark:text-slate-400 md:text-lg">
          I'm always open to discussing new projects, research ideas or
          opportunities to be part of your team.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="mt-12 grid gap-4 sm:grid-cols-3"
      >
        {contacts.map((c) => {
          const inner = (
            <>
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 dark:bg-indigo-500/15">
                <c.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <p className="mb-1 text-sm text-slate-500 dark:text-slate-400">
                {c.label}
              </p>
              <p className="break-words font-medium text-slate-900 dark:text-white">
                {c.value}
              </p>
            </>
          );
          const cls =
            "rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all hover:border-indigo-400 hover:shadow-lg hover:shadow-indigo-500/10 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-indigo-500/50";
          return c.href ? (
            <a key={c.label} href={c.href} className={`${cls} block`}>
              {inner}
            </a>
          ) : (
            <div key={c.label} className={cls}>
              {inner}
            </div>
          );
        })}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="mt-10 flex flex-wrap justify-center gap-4"
      >
        {socials.map((s) => (
          <a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 font-medium text-slate-700 transition-all hover:-translate-y-0.5 hover:border-indigo-400 hover:text-indigo-600 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:border-indigo-500 dark:hover:text-indigo-400"
          >
            <s.icon className="h-5 w-5" />
            {s.name}
            <ArrowUpRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
          </a>
        ))}
      </motion.div>
    </Section>
  );
}
