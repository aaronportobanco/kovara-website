import React from "react";

export default function Header({ title, subtitle }) {
  return (
    <header className="flex flex-col items-center justify-center gap-4 w-full text-center">
      <h2 className="text-foreground text-3xl font-bold leading-tight tracking-tight">
        {title}
      </h2>
      <p className="text-muted-foreground text-base font-medium leading-relaxed">
        {subtitle}
      </p>
    </header>
  );
}
