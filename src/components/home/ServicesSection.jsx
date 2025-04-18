import { DataFeatures } from "@/data/MockData";
import FeatureCard from "../FeatureCard/FeatureCard";
import Header from "../layout/Header";

function ServicesSection() {
  return (
    <section
      aria-label="services-section"
      className="flex flex-col items-center gap-12 relative px-4 md:px-8 lg:px-16 w-full "
    >
      <Header
        title="Lo que ofrecemos"
        subtitle="Descubre todos nuestros servicios"
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
