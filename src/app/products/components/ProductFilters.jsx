"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

// Componente para los filtros de productos
const ProductFilters = () => {
  return (
    <aside className="md:w-1/4">
      <h3 className="text-lg font-semibold mb-4">Filtros</h3>
      <Separator className="hidden md:block my-4 bg-gray-700" />
      <div className="space-y-6">
        
        {/* Categorías */}
        <div>
          <h4 className="font-medium mb-2">Categorías</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            {["Todas las categorías", "Laptops", "Monitores", "Accesorios", "Audífonos"].map(
              (cat, i) => (
                <Label key={i} className="flex items-center gap-2">
                  <Checkbox />
                  {cat}
                </Label>
              )
            )}
          </div>
        </div>

        <Separator className="hidden md:block my-4 bg-gray-700" />

        {/* Disponibilidad */}
        <div>
          <h4 className="font-medium mb-2">Disponibilidad</h4>
          <Label className="flex items-center gap-2 text-sm text-muted-foreground">
            <Checkbox /> Solo productos en stock
          </Label>
        </div>

        <Separator className="hidden md:block my-4 bg-gray-700" />

        {/* Marcas */}
        <div>
          <h4 className="font-medium mb-2">Marcas</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            {["Sony", "Dell", "Logitech", "HP", "Lenovo", "Anker"].map((marca, i) => (
              <Label key={i} className="flex items-center gap-2">
                <Checkbox /> {marca}
              </Label>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default ProductFilters;
