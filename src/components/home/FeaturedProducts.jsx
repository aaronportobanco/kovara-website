import { VerticalCard } from "../products/VerticalCard";
import { DataProducts } from "@/data/MockData";
import Header from "../layout/Header";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const FeaturedProducts = () => {
  return (
    <section>
      <Header
        title={"Productos más populares"}
        subtitle={"Conoce algunos de nuestros productos más vendidos"}
      />
      <section
        aria-label="Productos destacados"
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 px-4 py-8"
      >
        {DataProducts.slice(0, 3).map((product) => (
          <VerticalCard key={product.id} data={product} />
        ))}
      </section>
      <div className="group flex justify-center md:justify-end items-center px-4">
        <Button className="rounded-full transition-transform duration-300 group-hover:translate-x-1">
          Ver más productos
          <ArrowRight strokeWidth={3} />
        </Button>
      </div>
    </section>
  );
};

export default FeaturedProducts;
