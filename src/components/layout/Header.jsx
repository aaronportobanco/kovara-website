import React from "react";

export default function Header({ title, subtitle }) {
  return (
    <header className="flex flex-col items-center justify-center gap-4 w-full text-center">
      <h2 className="text-slate-50 text-3xl font-bold leading-tight tracking-tight">
        {title}
      </h2>
      <p className="text-slate-400 text-base font-medium leading-relaxed">
        {subtitle}
      </p>
    </header>
  );
}