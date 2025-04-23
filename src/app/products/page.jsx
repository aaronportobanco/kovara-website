"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
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
import { sortProducts } from "./utils/sortProducts";
import SortPopover from "./components/SortPopover";

export default function ProductsPage() {
  // Estados de vista, página, filtros y ordenamiento
  const [view, setView] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(9);
  const [filters, setFilters] = useState({
    category: "Todas las categorías",
    availability: null,
    brand: null,
  });
  const [sortBy, setSortBy] = useState("destacados");

  // --------------------------------------------------------------------
  // Función para actualizar filtros y reiniciar la paginación
  // --------------------------------------------------------------------
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  // --------------------------------------------------------------------
  // Filtrado de productos según filtros aplicados
  // --------------------------------------------------------------------
  const filteredProducts = DataProducts.filter((product) => {
    const matchesCategory =
      filters.category === "Todas las categorías" ||
      product.categoria === filters.category;
    const matchesAvailability =
      !filters.availability ||
      (filters.availability === "inStock" && product.stock > 0);
    const matchesBrand = !filters.brand || product.marca === filters.brand;

    return matchesCategory && matchesAvailability && matchesBrand;
  });

  // --------------------------------------------------------------------
  // Ordenamiento usando el helper
  const sortedProducts = sortProducts(filteredProducts, sortBy);

  // --------------------------------------------------------------------
  // Cálculo y selección de productos para la página actual (paginación)
  // --------------------------------------------------------------------
  const totalPages = Math.ceil(sortedProducts.length / pageSize);
  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <section className="flex flex-col p-6 md:px-6 gap-8 md:gap-11 text-foreground bg-background">
      {/* Breadcrumb y encabezado */}
      <BreadcrumbComp page={"Productos"} />
      <div>
        <h2 className="text-foreground text-3xl font-bold leading-tight tracking-tight">
          Productos Destacados
        </h2>
        <p className="text-muted-foreground text-base font-medium leading-relaxed">
          Explora todo lo que tenemos para ti
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-1 md:gap-8">
        {/* Filtros para escritorio */}
        <Filters filters={filters} setFilters={handleFilterChange} />
        <div>
          <Separator
            orientation="vertical"
            className="hidden md:block bg-gray-700"
          />
        </div>
        <div className="flex-1 flex flex-col gap-4">
          {/* Barra de búsqueda y controles */}
          <div className="flex flex-col gap-3 md:flex-row md:items-center justify-between">
            <div className="flex items-center gap-2">
              <Input
                placeholder="Buscar productos..."
                className="border border-gray-400 hover:border-[#3B82F6] transition-colors"
              />
              <div className="md:hidden">
                <FiltersMobile
                  filters={filters}
                  setFilters={handleFilterChange}
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-3">
              {/* SortPopover se muestra primero en móvil */}
              <div className="order-1 md:order-1 w-full">
                <SortPopover sortBy={sortBy} setSortBy={setSortBy} setCurrentPage={setCurrentPage} />
              </div>
              <div className="order-2 md:order-2 flex flex-row items-center gap-2 w-full md:w-auto">
                <PageSizeSelector
                  value={pageSize}
                  onChange={(val) => {
                    setCurrentPage(1);
                    setPageSize(val);
                  }}
                />
                <ToggleGroup
                  type="single"
                  value={view}
                  onValueChange={(val) => {
                    if (val) {
                      setCurrentPage(1);
                      setView(val);
                    }
                  }}
                >
                  <ToggleGroupItem
                    value="grid"
                    aria-label="Vista de cuadrícula"
                    className="data-[state=on]:bg-foreground group"
                  >
                    <Grid className="text-foreground group-data-[state=on]:text-background" />
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="list"
                    aria-label="Vista de lista"
                    className="data-[state=on]:bg-foreground group"
                  >
                    <List className="text-foreground group-data-[state=on]:text-background" />
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
            </div>
          </div>

          {/* Información de paginación */}
          <p className="text-sm text-muted-foreground pt-4">
            Mostrando {paginatedProducts.length} de {DataProducts.length}{" "}
            productos
          </p>

          {/* Renderizado de productos */}
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
