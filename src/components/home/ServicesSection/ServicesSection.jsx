import { DataFeatures } from "@/data/MockData";
import Image from "next/image";
import FeatureCard from "./FeatureCard";
import Header from "../../layout/Header";

function ServicesSection() {
  return (
    <section
      id="services"
      aria-label="services-section"
      className="flex flex-col items-center gap-12 relative p-5 md:px-8 lg:p-16 w-full"
    >
      <Image
        src="/assets/bg-8.webp"
        alt="Decoración abstracta"
        width={900}
        height={900}
        className="absolute rotate-6 left-[60px] top-[-90px] z-0 opacity-10 filter blur-sm"
      />
      <Header
        title="Servicios que Marcan la Diferencia"
        subtitle="Calidad Premium, Entrega Rápida y Soporte Experto: Todo lo que necesitas para una experiencia excepcional"
      />

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {DataFeatures.map((item, index) => (
          <FeatureCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
