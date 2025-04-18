import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const socialLinks = [
  { icon: <Facebook />, href: "#" },
  { icon: <Twitter />, href: "#" },
  { icon: <Instagram />, href: "#" },
  { icon: <Linkedin />, href: "#" },
  { icon: <Youtube />, href: "#" },
];

const quickLinks = [
  { label: "Home", id: "home" },
  { label: "Products", id: "products" },
  { label: "About Us", id: "about" },
  { label: "Contact", id: "contact" },
  { label: "Blog", href: "#" },
  { label: "Careers", href: "#" },
];

const supportLinks = [
  "FAQ",
  "Shipping & Returns",
  "Warranty Information",
  "Product Support",
  "Privacy Policy",
  "Terms of Service",
];

const storeInfo = [
  {
    icon: <MapPin className="h-5 w-5 text-[#3B82F6] mt-1 mr-3" />,
    text: "123 Tech Plaza, Silicon Valley, CA 94043",
  },
  {
    icon: <Phone className="h-5 w-5 text-[#3B82F6] mt-1 mr-3" />,
    text: "+1 (555) 123-4567",
  },
  {
    icon: <Mail className="h-5 w-5 text-[#3B82F6] mt-1 mr-3" />,
    text: "support@kovara.com",
  },
  {
    icon: <Clock className="h-5 w-5 text-[#3B82F6] mt-1 mr-3" />,
    text: (
      <>
        Mon-Fri: 9AM - 6PM
        <br />
        Sat: 10AM - 4PM
      </>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-800/50 mt-[100px] py-8">
      <div className="container max-w-[1200px] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand & Social */}
          <div>
            <Link href="/" className="flex items-center mb-6">
              <div className="mr-2">
                <Image
                  src="/assets/logo/logo.webp"
                  alt="Logo de Kovara"
                  width={18}
                  height={27}
                />
              </div>
              <span className="text-xl font-heading font-bold text-[#F8FAFC]">
                KOVARA
              </span>
            </Link>
            <p className="text-gray-300 mb-6">
              Your one-stop destination for premium computer components,
              accessories, and expert tech advice.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="text-gray-400 hover:text-[#3B82F6] transition-all duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href || `#${link.id}`}
                    className="text-gray-300 hover:text-[#3B82F6] transition-all duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((text, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-[#3B82F6] transition-all duration-300"
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Store Info */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">
              Store Information
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
        </div>

        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Kovara. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
