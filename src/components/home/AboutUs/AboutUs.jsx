import React from "react";

export default function Header({ title, subtitle }) {
  return (
    <header className="flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold text-foreground tracking-normal mt-0">
        {title}
      </h1>
      <p className="text-base font-medium text-muted-foreground tracking-normal">
        {subtitle}
      </p>
    </header>
  );
}
