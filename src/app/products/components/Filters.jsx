"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const defaultValues = {
  category: "Todas las categorías",
  availability: null,
  brand: null,
};

// --------------------------------------------------------------------
// Componente para los filtros de productos
// --------------------------------------------------------------------
const Filters = ({ filters, setFilters }) => {
  // --------------------------------------------------------------------
  // Manejo de cambio de filtro: Permite deseleccionar al hacer clic de nuevo.
  // --------------------------------------------------------------------
  const handleFilterChange = (type, value) => {
    const newValue = type === "brand" && value === "Todas las marcas" ? null : value;
    setFilters((prev) => ({
      ...prev,
      [type]: prev[type] === newValue ? defaultValues[type] : newValue,
    }));
  };

  return (
    <aside className="hidden md:block md:w-1/4 md:sticky md:top-5 h-fit">
      <h3 className="text-lg font-semibold mb-4">Filtros</h3>
      <Separator className="hidden md:block my-4 bg-gray-700" />
      <div className="space-y-6">
        {/* Filtro: Categorías */}
        <div>
          <h4 className="font-medium mb-2">Categorías</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            {[
              "Todas las categorías",
              "Laptops",
              "Monitores",
              "Accesorios",
              "Audífonos",
            ].map((cat, i) => (
              <Label key={i} className="flex items-center gap-2">
                <Checkbox
                  checked={filters.category === cat}
                  onCheckedChange={() => handleFilterChange("category", cat)}
                />
                {cat}
              </Label>
            ))}
          </div>
        </div>

        <Separator className="hidden md:block my-4 bg-gray-700" />

        {/* Filtro: Disponibilidad */}
        <div>
          <h4 className="font-medium mb-2">Disponibilidad</h4>
          <Label className="flex items-center gap-2 text-sm text-muted-foreground">
            <Checkbox
              checked={filters.availability === "inStock"}
              onCheckedChange={() =>
                handleFilterChange("availability", "inStock")
              }
            />
            Solo productos en stock
          </Label>
        </div>

        <Separator className="hidden md:block my-4 bg-gray-700" />

        {/* Filtro: Marcas */}
        <div>
          <h4 className="font-medium mb-2">Marcas</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            {[
              "Todas las marcas",
              "Sony",
              "Dell",
              "Logitech",
              "HP",
              "Lenovo",
              "Anker",
            ].map((marca, i) => (
              <Label key={i} className="flex items-center gap-2">
                <Checkbox
                  checked={filters.brand === (marca === "Todas las marcas" ? null : marca)}
                  onCheckedChange={() => handleFilterChange("brand", marca)}
                />
                {marca}
              </Label>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Filters;
