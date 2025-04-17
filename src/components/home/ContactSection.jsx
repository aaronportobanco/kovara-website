"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "../ui/separator";
import { Button } from "@/components/ui/button";
import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  ChevronRight,
} from "lucide-react";
import Header from "../layout/Header";

const ContactSection = () => {
  return (
    <section className="w-full px-4 py-12 md:px-8 lg:px-16 flex flex-col items-center gap-12 relative">
      <Header
        title="Contáctanos"
        subtitle="Envíanos un mensaje y en breve un miembro de Compuversa estará a tu servicio"
      />

      <div className="max-w-7xl mx-auto flex items-center flex-col md:flex-row gap-10">
        {/* Formulario */}
        <div className="flex-1 space-y-8">
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

            <div className="w-full flex justify-end">
              <Button type="button" className="flex items-center gap-2">
                Enviar Mensaje
                <ChevronRight strokeWidth={3} />
              </Button>
            </div>
          </form>
        </div>

        <Separator
          orientation="vertical"
          className="hidden md:block h-[400px] w-px bg-gray-700"
        />
        {/* Información de contacto */}
        <div className="flex-1 bg-slate-800 p-6 md:p-8 rounded-2xl space-y-8 shadow-md">
          <div className="space-y-6">
            <ContactItem
              icon={<Phone />}
              label="Teléfono"
              value="+505 5848-4317"
            />
            <ContactItem
              icon={<MapPin />}
              label="Dirección"
              value="De Donde fue la Sandak del Iván, 2Cuadras Arriba, 3Andenes al Sur"
            />
            <ContactItem
              icon={<Mail />}
              label="Email"
              value="kovara@gmail.com"
            />
          </div>

          <div>
            <p className="text-sm font-semibold mb-3">Mantente Conectado en:</p>
            <div className="flex gap-3">
              {[
                { icon: <Facebook />, name: "Facebook" },
                { icon: <Instagram />, name: "Instagram" },
                { icon: <Twitter />, name: "Twitter" },
              ].map((social, index) => (
                <SocialIcon
                  key={index}
                  icon={social.icon}
                  label={social.name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ContactItem Component
// This component is used to display contact information with an icon, label, and value
const ContactItem = ({ icon, label, value }) => (
  <div className="flex items-start gap-3">
    <div className="mt-1 text-primary">{icon}</div>
    <div>
      <p className="text-sm font-semibold">{label}</p>
      <p className="text-sm text-muted-foreground">{value}</p>
    </div>
  </div>
);

// SocialIcon Component
// This component is used to display social media icons with a hover effect
const SocialIcon = ({ icon, label }) => (
  <div
    className="p-2 rounded-md bg-[#334155] hover:bg-[#475569] cursor-pointer transition"
    aria-label={`Enlace a ${label}`}
    title={label}
  >
    {icon}
  </div>
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
        className="border border-gray-700 hover:border-primary transition-colors"
      />
    ) : (
      <Input
        id={id}
        placeholder={placeholder}
        className="border border-gray-700 hover:border-primary transition-colors"
      />
    )}
  </div>
);

export default ContactSection;
