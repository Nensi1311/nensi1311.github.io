import React from "react";
import { Heart, Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/Nensi1311", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/nensi-pansuriya/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:nensipansuriya1311@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-transparent py-10 dark:border-slate-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-6 md:flex-row">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="font-semibold tracking-tight text-slate-900 dark:text-white"
        >
          Nensi<span className="text-indigo-500">.</span>
        </a>

        <div className="flex items-center gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="rounded-full border border-slate-200 p-2 text-slate-500 transition-all hover:-translate-y-0.5 hover:border-indigo-400 hover:text-indigo-600 dark:border-slate-800 dark:text-slate-400 dark:hover:border-indigo-500 dark:hover:text-indigo-400"
            >
              <s.icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        <div className="flex flex-col items-center gap-1 text-sm text-slate-500 dark:text-slate-400 md:items-end">
          <p>© {new Date().getFullYear()} Nensi Pansuriya</p>
          <p className="flex items-center gap-1.5">
            Made with <Heart className="h-3.5 w-3.5 fill-indigo-500 text-indigo-500" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
}
