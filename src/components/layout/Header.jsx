import React from "react";

export default function Header({ title, subtitle }) {
  return (
    <header className="flex flex-col items-center justify-center gap-2">
      <h1 className="text-[30px] font-bold text-foreground leading-normal text-center">
        {title}
      </h1>
      <p className="leading-6 [&:not(:first-child)]:text-muted-foreground">
        {subtitle}
      </p>
    </header>
  );
}