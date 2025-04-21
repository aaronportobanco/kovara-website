"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

// Mismo contenido reutilizable
const FilterGroup = ({ title, options }) => (
  <AccordionItem value={title}>
    <AccordionTrigger>{title}</AccordionTrigger>
    <AccordionContent>
      <div className="space-y-2">
        {options.map((item, i) => (
          <Label
            key={i}
            className="flex items-center gap-2 text-sm text-muted-foreground"
          >
            <Checkbox /> {item}
          </Label>
        ))}
      </div>
    </AccordionContent>
  </AccordionItem>
);

const FiltersMobile = () => {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="gap-2 border border-gray-400">
            <Filter className="w-4 h-4" />
            Filtros
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] sm:w-[340px]">
          <SheetHeader>
            <SheetTitle className="text-left">Filtrar productos</SheetTitle>
          </SheetHeader>
          <Accordion type="multiple" className="mt-6 space-y-2">
            <FilterGroup
              title="Categorías"
              options={[
                "Todas",
                "Laptops",
                "Monitores",
                "Accesorios",
                "Audífonos",
              ]}
            />
            <FilterGroup
              title="Disponibilidad"
              options={["Solo productos en stock"]}
            />
            <FilterGroup
              title="Marcas"
              options={["Sony", "Dell", "Logitech", "HP", "Lenovo", "Anker"]}
            />
          </Accordion>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default FiltersMobile;
