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
      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 px-4 py-8">
        {DataProducts.slice(0, 3).map((product) => (
          <VerticalCard key={product.id} data={product} />
        ))}
      </section>
      <Button>
        <ArrowRight strokeWidth={3}/>
        Ver más productos
      </Button>
    </section>
  );
};

export default FeaturedProducts;
