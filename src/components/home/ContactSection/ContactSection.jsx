"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Send,
} from "lucide-react";
import Header from "../../layout/Header";
import MapDisplay from "./MapDisplay";

// ContactSection Component
// This component is used to create a contact section with a form and contact information
const ContactSection = () => {
  const mapEmbedSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125195.85728429257!2d-86.35086368359375!3d12.114993300000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f73ffcf5e84c9b5%3A0x3d1b2c5e8f9a7b6c!2sManagua%2C%20Nicaragua!5e0!3m2!1sen!2sus!4v1635959000000!5m2!1sen!2sus";

  return (
    <section
      id="contact"
      aria-label="Contact section"
      className="p-5 md:px-8 lg:p-16 w-full flex flex-col items-center gap-12 relative"
    >
      {/* Imagen decorativa posicionada libremente */}
      <Image
        src="/assets/bg-9.webp"
        alt="Decoración abstracta"
        width={700}
        height={700}
        className="absolute rotate-6 left-[120px] top-[40px] z-0 opacity-10 scale-x-[-1] filter blur-sm"
      />
      <Header
        title="Contáctanos"
        subtitle="Envíanos un mensaje y en breve un miembro de Compuversa estará a tu servicio"
      />

      <div className="max-w-7xl mx-auto flex items-center flex-col md:flex-row gap-10">
        <ContactForm />
        <Separator
          orientation="vertical"
          className="hidden md:block h-[400px] bg-gray-700"
        />
        <ContactInfo />
      </div>
      <MapDisplay
        mapSrc={mapEmbedSrc}
        className="w-full mt-12 z-10 rounded-xl bg-gray-800/30 p-5 md:px-8 lg:p-16"
      />
    </section>
  );
};

// ContactForm Component
// This component is used to create a contact form with fields for name, email, subject, and message
const ContactForm = () => {
  return (
    <div className="flex-1 space-y-8 z-10">
      <div className="space-y-2">
        <h2 className="text-xl font-bold">Envía un Mensaje</h2>
        <p className="text-sm text-muted-foreground">
          Provee tu información de contacto para que un miembro de nuestro
          equipo te asesore personalmente
        </p>
      </div>

      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            id="nombre"
            label="Nombre"
            placeholder="Escribe un nombre y un apellido"
          />
          <FormField
            id="email"
            label="Email"
            placeholder="e.g.: example@gmail.com"
          />
        </div>
        <FormField id="asunto" label="Asunto" placeholder="Asunto" />
        <FormField
          id="mensaje"
          label="Mensaje"
          placeholder="Escribe tu Mensaje Aquí"
          isTextarea
          rows={4}
        />

        <div className="group w-full flex justify-end">
          <Button type="button" className="rounded-full z-10">
            Enviar Mensaje
            <Send className="transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
      </form>
    </div>
  );
};

// ContactInfo Component
// This component is used to display contact information such as phone, address, and email
const ContactInfo = () => {
  return (
    <div className="flex-1 bg-slate-800/50 p-6 md:p-8 rounded-2xl space-y-8 shadow-md z-10">
      <div className="space-y-6">
        <ContactItem
          icon={<Phone className="h-5 w-5 text-[#3B82F6]" />}
          label="Teléfono"
          value={
            <Link
              href="https://wa.me/+50558484317"
              target="_blank"
              className="underline"
            >
              Contacta por WhatsApp
            </Link>
          }
        />
        <ContactItem
          icon={<MapPin className="h-5 w-5 text-[#3B82F6]" />}
          label="Dirección"
          value="De Donde fue la Sandak del Iván, 2Cuadras Arriba, 3Andenes al Sur"
        />
        <ContactItem
          icon={<Mail className="h-5 w-5 text-[#3B82F6]" />}
          label="Email"
          value="soporte@kovara.com"
        />
      </div>
      <SocialIcons />
    </div>
  );
};

// SocialIcons Component
// This component is used to display social media icons with a hover effect
const SocialIcons = () => {
  const socials = [
    { icon: <Facebook />, name: "Facebook" },
    { icon: <Instagram />, name: "Instagram" },
    { icon: <Twitter />, name: "Twitter" },
    { icon: <Linkedin />, name: "LinkedIn" },
  ];

  return (
    <div>
      <p className="text-sm font-semibold mb-3">Mantente Conectado en:</p>
      <div className="flex gap-3">
        {socials.map((social, index) => (
          <SocialIcon key={index} icon={social.icon} label={social.name} />
        ))}
      </div>
    </div>
  );
};

// ContactItem Component
// This component is used to display contact information with an icon, label, and value
const ContactItem = ({ icon, label, value }) => (
  <div className="flex items-start gap-3">
    <div className="bg-[#3B82F6]/20 p-3 rounded-lg mr-2">{icon}</div>
    <div>
      <p className="text-sm font-semibold">{label}</p>
      <p className="text-sm text-muted-foreground">{value}</p>
    </div>
  </div>
);

// SocialIcon Component
// This component is used to display social media icons with a hover effect
const SocialIcon = ({ icon, label }) => (
  <Button
    variant="secondary"
    size="icon"
    className="bg-gray-700 hover:bg-gray-600 rounded-lg z-10"
    aria-label={`Enlace a ${label}`}
    title={label}
  >
    {icon}
  </Button>
);

// FormField Component
// This component is used to create a form field with a label and an input or textarea
const FormField = ({ id, label, placeholder, isTextarea, rows = 3 }) => (
  <div className="flex flex-col gap-1">
    <Label htmlFor={id} className="text-sm font-medium text-foreground">
      {label}
    </Label>
    {isTextarea ? (
      <Textarea
        id={id}
        placeholder={placeholder}
        rows={rows}
        className="border border-gray-400 hover:border-[#3B82F6] transition-colors"
      />
    ) : (
      <Input
        id={id}
        placeholder={placeholder}
        className="border border-gray-400 hover:border-[#3B82F6] transition-colors"
      />
    )}
  </div>
);

export default ContactSection;
