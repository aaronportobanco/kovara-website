import { Card, CardContent } from "@/components/ui/card";
import { Laptop } from "lucide-react";
import React from "react";

export default function ServicesCards({icon, title, description}) {
    return (
        <Card className="w-[315px] bg-tailwind-colors-slate-800 rounded-[10px] overflow-hidden">
            <CardContent className="p-5 flex flex-col gap-5">
                <header className="flex items-center gap-2.5 w-full">
                    <div className="inline-flex items-center justify-center p-3 bg-tailwind-colors-gray-500 rounded-[10px]">
                        {icon}
                    </div>
                    <h3 className="flex-1 font-bold-2xl text-foreground text-[length:var(--bold-2xl-font-size)] tracking-[var(--bold-2xl-letter-spacing)] leading-[var(--bold-2xl-line-height)] [font-style:var(--bold-2xl-font-style)]">
                        {title}
                    </h3>
                </header>
                <p className="text--muted-foreground font-basics-p text-[length:var(--basics-p-font-size)] tracking-[var(--basics-p-letter-spacing)] leading-[var(--basics-p-line-height)] [font-style:var(--basics-p-font-style)]">
                   {description}
                </p>
            </CardContent>
        </Card>
    );
}
