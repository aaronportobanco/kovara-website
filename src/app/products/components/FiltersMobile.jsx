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

// --------------------------------------------------------------------
/// Componente FilterGroup: maneja el cambio de filtro para cada grupo.
// --------------------------------------------------------------------
const FilterGroup = ({ title, options, type, filters, setFilters }) => {
  // Manejo de cambio de filtro
  const handleFilterChange = (value) => {
    setFilters((prev) => ({
      ...prev,
      [type]: value === "Todas las categorías" ? "Todas las categorías" : value,
    }));
  };
  return (
    <AccordionItem value={title}>
      <AccordionTrigger>{title}</AccordionTrigger>
      <AccordionContent>
        <div className="space-y-2">
          {options.map((item, i) => (
            <Label
              key={i}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <Checkbox
                checked={filters[type] === item}
                onCheckedChange={() => handleFilterChange(item)}
              />
              {item}
            </Label>
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

const FiltersMobile = ({ filters, setFilters }) => {
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
            {/* Grupo de Filtro: Categorías */}
            <FilterGroup
              title="Categorías"
              options={[
                "Todas las categorías",
                "Laptops",
                "Monitores",
                "Accesorios",
                "Audífonos",
              ]}
              type="category"
              filters={filters}
              setFilters={setFilters}
            />
            {/* Grupo de Filtro: Disponibilidad */}
            <FilterGroup
              title="Disponibilidad"
              options={["Solo productos en stock"]}
              type="availability"
              filters={filters}
              setFilters={setFilters}
            />
            {/* Grupo de Filtro: Marcas */}
            <FilterGroup
              title="Marcas"
              options={["Sony", "Dell", "Logitech", "HP", "Lenovo", "Anker"]}
              type="brand"
              filters={filters}
              setFilters={setFilters}
            />
          </Accordion>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default FiltersMobile;
