import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Logo from "./Logo";

export const socialLinks = [
  { icon: <Facebook />, href: "#" },
  { icon: <Twitter />, href: "#" },
  { icon: <Instagram />, href: "#" },
  { icon: <Linkedin />, href: "#" },
];

export const quickLinks = [
  { label: "Inicio", id: "home" },
  { label: "Productos", id: "products" },
  { label: "Sobre Kovara", id: "about" },
  { label: "Contacto", id: "contact" },
  { label: "Carrito", href: "#" },
];

export const supportLinks = [
  "FAQ",
  "Política de devoluciones",
  "Información de garantía",
  "Soporte de productos",
  "Política de privacidad",
  "Términos y condiciones",
];

export const storeInfo = [
  {
    icon: <MapPin className="h-5 w-5 text-[#3B82F6] mt-1 mr-3" />,
    text: "123 Tech Plaza, Silicon Valley, CA 94043",
  },
  {
    icon: <Phone className="h-5 w-5 text-[#3B82F6] mt-1 mr-3" />,
    text: "+555 5848-4317",
  },
  {
    icon: <Mail className="h-5 w-5 text-[#3B82F6] mt-1 mr-3" />,
    text: "soporte@kovara.com",
  },
  {
    icon: <Clock className="h-5 w-5 text-[#3B82F6] mt-1 mr-3" />,
    text: (
      <>
        Lunes-Viernes: 9AM - 6PM
        <br />
        Sábado: 10AM - 4PM
      </>
    ),
  },
];

// Main Footer Component
// This component is responsible for rendering the footer of the website.
function Footer() {
  return (
    <footer className="bg-gray-800/50 mt-[150px] p-5 md:p-10">
      <div className="container max-w-[1200px] m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <FooterBrand />
          <FooterLinks />
          <FooterSupport />
          <FooterStoreInfo />
        </div>

        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Kovara. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// FooterBrand Component
// This component displays the brand logo and a brief description of the store.
function FooterBrand() {
  return (
    <div>
      <Link href="/" className="flex items-center mb-6">
        <Logo />
      </Link>
      <p className="text-gray-300 mb-6">
        Tu tienda de computación de confianza. Productos de calidad,
        asesoramiento experto y servicio excepcional.
      </p>
      <SocialLinks />
    </div>
  );
}

// SocialLinks Component
// This component displays the social media links of the store.
function SocialLinks() {
  return (
    <div className="flex space-x-4">
      {socialLinks.map((link, idx) => (
        <a
          key={idx}
          href={link.href}
          className="text-gray-400 hover:text-[#3B82F6] transition-colors"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}

// FooterLinks Component
// This component displays the quick access links of the store.
function FooterLinks() {
  return (
    <div>
      <h4 className="text-lg font-heading font-semibold mb-6">Acceso Rápido</h4>
      <ul className="space-y-3">
        {quickLinks.map((link, id) => (
          <li key={id}>
            <a
              href={link.href || `#${link.id}`}
              className="text-gray-300 hover:text-[#3B82F6] transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

// FooterSupport Component
// This component displays the support links of the store.
function FooterSupport() {
  return (
    <div>
      <h4 className="text-lg font-heading font-semibold mb-6">Soporte</h4>
      <ul className="space-y-3">
        {supportLinks.map((text, idx) => (
          <li key={idx}>
            <a
              href="#"
              className="text-gray-300 hover:text-[#3B82F6] transition-colors"
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

// FooterStoreInfo Component
// This component displays the store information such as address, phone, email, and working hours.
function FooterStoreInfo() {
  return (
    <div>
      <h4 className="text-lg font-heading font-semibold mb-6">
        Información de la Tienda
      </h4>
      <ul className="space-y-4">
        {storeInfo.map((info, idx) => (
          <li key={idx} className="flex items-start">
            {info.icon}
            <span className="text-gray-300">{info.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;
