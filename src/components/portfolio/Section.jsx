import React from "react";

/**
 * Consistent section shell used across the whole portfolio so every
 * block shares the same rhythm, width and theme-aware background.
 */
export default function Section({
  id,
  children,
  alt = false,
  className = "",
  containerClassName = "",
}) {
  return (
    <section
      id={id}
      className={`relative bg-transparent py-24 md:py-32 ${className}`}
    >
      {/* hairline top divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />
      <div
        className={`relative z-10 mx-auto w-full max-w-6xl px-6 ${containerClassName}`}
      >
        {children}
      </div>
    </section>
  );
}
