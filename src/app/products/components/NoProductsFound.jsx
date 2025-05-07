import { Search } from "lucide-react";

export default function NoProductsFound() {
  return (
    <div className="container px-4 py-16 pt-20 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <Search className="h-10 w-10 text-gray-400" />
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter">
            No se encontraron productos
          </h1>
          <p className="text-muted-foreground">
            No hay productos que coincidan con tus criterios de búsqueda.
          </p>
        </div>
      </div>
    </div>
  );
}
