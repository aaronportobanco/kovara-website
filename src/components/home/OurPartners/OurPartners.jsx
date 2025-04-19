import { Card, CardContent } from "@/components/ui/card";
import React from "react";

const partnerLogos = [
  { id: 1, alt: "Partner Logo 1" },
  { id: 2, alt: "Partner Logo 2" },
  { id: 3, alt: "Partner Logo 3" },
  { id: 4, alt: "Partner Logo 4" },
  { id: 5, alt: "Partner Logo 5" },
];

export default function OurPartners() {
  return (
    <section
      aria-label="Socios claves"
      className="flex flex-col items-center justify-center gap-7"
    >
      <h2 className="text-sm font-bold text-center text-foreground tracking-normal">
        NUESTROS SOCIOS
      </h2>

      <div className="flex items-center justify-center gap-10 w-full">
        {partnerLogos.map((logo) => (
          <Card
            key={logo.id}
            className="w-[52px] h-[47px] bg-slate-300 border-0 rounded-md"
          >
            <CardContent className="p-0 h-full">
              {/* Partner logo would go here */}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
