import HeroSection from "@/components/home/HeroSection/HeroSection";
import AboutUs from "@/components/home/AboutUs/AboutUs";
import FeaturedProducts from "@/components/home/FeaturedProducts/FeaturedProducts";
import ContactSection from "@/components/home/ContactSection/ContactSection";
import ServicesSection from "@/components/home/ServicesSection/ServicesSection";
import CheckList from "@/components/home/CheckList/CheckList";
import CustomersTestimonials from "@/components/home/CustomersTestimonials/CustomersTestimonials";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-[180px] w-full p-5 md:p-10">
      <HeroSection />
      <AboutUs />
      <ServicesSection />
      <FeaturedProducts />
      <CheckList />
      <CustomersTestimonials />
      <ContactSection />
    </div>
  );
}
