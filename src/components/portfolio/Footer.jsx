import React from "react";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 bg-slate-950 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Nensi Pansuriya. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-pink-500" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
}