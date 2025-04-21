"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import BreadcrumbComp from "@/components/layout/BreadcrumbComp";
import { Grid, List } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import CardHorizontal from "./components/CardHorizontal";
import CardVertical from "./components/CardVertical";
import { DataProducts } from "@/data/MockData";
import Filters from "./components/Filters";
import FiltersMobile from "./components/FiltersMobile";
import PageSizeSelector from "./components/PageSizeSelector";
import Pagination from "./components/Pagination";

// Componente principal de la página de productos
export default function ProductsPage() {
  // Estado para alternar entre vista de cuadrícula y lista
  const [view, setView] = useState("grid");
  // Estado para la página actual
  const [currentPage, setCurrentPage] = useState(1);
  // Estado para el tamaño de página
  const [pageSize, setPageSize] = useState(9);

  // Total de páginas basado en pageSize
  const totalPages = Math.ceil(DataProducts.length / pageSize);

  // Productos paginados según pageSize
  const paginatedProducts = DataProducts.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <section className="flex flex-col p-6 md:px-6 gap-10 md:gap-14 text-foreground bg-background">
      {/* Componente de breadcrumb */}
      <BreadcrumbComp page={"Productos"} />

      {/* Encabezado de la página */}
      <div>
        <h2 className="text-foreground text-3xl font-bold leading-tight tracking-tight">
          Productos Destacados
        </h2>
        <p className="text-muted-foreground text-base font-medium leading-relaxed">
          Explora todo lo que tenemos para ti
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-1 md:gap-8">
        {/* Filtros */}
        <Filters />

        <div>
          <Separator
            orientation="vertical"
            className="hidden md:block bg-gray-700"
          />
        </div>

        <div className="flex-1 flex flex-col gap-4">
          {/* Barra de búsqueda y opciones de vista */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center justify-between">
            <div className="flex items-center gap-2">
              <Input
                placeholder="Buscar productos..."
                className="border border-gray-400 hover:border-[#3B82F6] transition-colors"
              />

              {/* Filtros responsivos */}
              <div className="md:hidden">
                <FiltersMobile />
              </div>
            </div>
            <div className="flex flex-row-reverse md:flex-row items-center gap-2">
              <ToggleGroup
                type="single"
                value={view}
                onValueChange={(val) => {
                  if (val) {
                    setCurrentPage(1); // Reinicia la página al cambiar la vista
                    setView(val);
                  }
                }}
              >
                <ToggleGroupItem value="grid" aria-label="Vista de cuadrícula">
                  <Grid />
                </ToggleGroupItem>
                <ToggleGroupItem value="list" aria-label="Vista de lista">
                  <List />
                </ToggleGroupItem>
              </ToggleGroup>

              <Button variant="outline" className="border border-gray-400">
                Destacados
              </Button>
              <PageSizeSelector
                value={pageSize}
                onChange={(val) => {
                  setCurrentPage(1); // Reinicia la página al cambiar el tamaño
                  setPageSize(val);
                }}
              />
            </div>
          </div>

          {/* Información de productos mostrados */}
          <p className="text-sm text-muted-foreground">
            Mostrando {paginatedProducts.length} de {DataProducts.length}{" "}
            productos
          </p>

          {/* Renderizado de productos según la vista seleccionada */}
          {view === "grid" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedProducts.map((product) => (
                <CardVertical key={product.id} data={product} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {paginatedProducts.map((product) => (
                <CardHorizontal key={product.id} data={product} />
              ))}
            </div>
          )}

          {/* Componente de paginación */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </section>
  );
}
