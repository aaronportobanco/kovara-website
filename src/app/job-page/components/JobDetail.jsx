"use client";

import React, { useState, useEffect } from "react";
import { JobData } from "@/data/MockData";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  BriefcaseBusiness,
  MapPinned,
  Clock,
  ArrowLeft,
  CircleDollarSign,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Share2, // Added Share2
  Copy, // Added Copy
  Check, // Added Check
} from "lucide-react";
import Link from "next/link";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { Input } from "@/components/ui/input";

const JobDetail = ({ jobId }) => {
  const job = JobData.find((job) => job.id === jobId);
  const [currentUrl, setCurrentUrl] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const handleCopyUrl = () => {
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000); // Reset copied status after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy URL: ", err);
        // Optionally, inform the user that copying failed
      });
  };

  if (!job) {
    return <div className="p-8 text-center text-red-500">Job not found</div>;
  }

  return (
    <section
      id={`job-${job.id}`}
      className="min-h-screen container p-4 md:px-6 gap-3"
    >
      <div className="flex flex-col lg:flex-row lg:items-start gap-24">
        {/* Left Column - Main Job Details */}
        <div className="flex flex-col gap-8 md:gap-11 lg:w-2/3">
          {/* Header: Logo, Posted Date, Job ID */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm gap-2">
            <Link href="/job-page" passHref>
              <Button
                variant="link"
                className="p-0 text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft />
                Volver a la lista de vacantes
              </Button>
            </Link>
            <div className="text-xs sm:text-sm">
              <span className="text-sm text-muted-foreground">
                ID de la Vacante:&nbsp;{job.id}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {/* Job Title */}
            <h1 className="text-3xl md:text-4xl font-bold">{job.title}</h1>
            <span className="text-sm text-blue-400">
              Departamento de {job.department}.
            </span>
            <span className="text-sm text-muted-foreground">
              Vacante actualizada el: {job.posted}.
            </span>
            {/* Tags */}
            <div className="flex flex-wrap gap-2 items-center">
              {job.type && (
                <Badge
                  variant="outline"
                  className="text-gray-700 border border-blue-300 px-3 py-1.5 gap-2 rounded-lg text-sm font-medium flex items-center"
                >
                  <BriefcaseBusiness className="h-4 w-4 text-blue-500" />
                  <span className="text-xs font-medium text-foreground">
                    {job.type}
                  </span>
                </Badge>
              )}
              {job.hours && (
                <Badge
                  variant="outline"
                  className="text-gray-700 border border-blue-300 px-3 py-1.5 gap-2 rounded-lg text-sm font-medium flex items-center"
                >
                  <Clock className="h-4 w-4 text-blue-500" />
                  <span className="text-xs font-medium text-foreground">
                    {job.hours}
                  </span>
                </Badge>
              )}
              {job.location && (
                <Badge
                  variant="outline"
                  className="text-gray-700 border border-blue-300 px-3 py-1.5 gap-2 rounded-lg text-sm font-medium flex items-center"
                >
                  <MapPinned className="text-blue-500 h-4 w-4" />
                  <span className="text-xs font-medium text-foreground">
                    {job.location}
                  </span>{" "}
                </Badge>
              )}
              {job.salaryRange && (
                <Badge
                  variant="outline"
                  className="text-gray-700 border border-blue-300 px-3 py-1.5 gap-2 rounded-lg text-sm font-medium flex items-center"
                >
                  <CircleDollarSign className="text-blue-500 h-4 w-4" />
                  <span className="text-xs font-medium text-foreground">
                    {job.salaryRange}
                  </span>{" "}
                </Badge>
              )}
            </div>
          </div>

          {/* Company Intro / Job Description */}
          {job.resumen && (
            <p className="leading-relaxed text-justify">{job.resumen}</p>
          )}

          {/* Job Overview */}
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Descripción del puesto</h2>
            <p className="leading-relaxed text-justify">{job.descripcion}</p>
          </div>

          {/* Responsibilities */}
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Responsabilidades</h2>
            <ul className="list-none space-y-2">
              {job.responsibilities &&
                job.responsibilities.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">&#9679;</span>
                    {item}
                  </li>
                ))}
            </ul>
          </div>
          {/* SKILLS */}
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold">Habilidades Necesarias</h2>
            <p className="leading-relaxed text-justify">{job.skillsIntro}</p>
            <div className="flex flex-wrap gap-2 items-center">
              {job.skills &&
                job.skills.length > 0 &&
                job.skills.map((skill, idx) => (
                  <Badge
                    key={idx}
                    variant="outline"
                    className="text-gray-700 border border-blue-300 px-3 py-1.5 gap-2 rounded-lg font-medium flex items-center"
                  >
                    <span className="text-xs font-medium text-foreground">
                      {skill}
                    </span>
                  </Badge>
                ))}
            </div>
          </div>
        </div>

        {/* This closes the lg:w-2/3 div (left column) */}
        {/* Right Column - Sidebar */}
        <aside className="lg:sticky top-10 flex flex-col gap-4 lg:w-1/3">
          <div className="bg-slate-800/50 border-gray-700 p-6 rounded-lg shadow-sm">
            <h3 className="text-lg text-center font-semibold mb-4">
              ¿Te gusta como suena?
            </h3>
            <div className="flex flex-col gap-4">
              <Button className="w-full bg-blue-500 hover:bg-blue-600 text-foreground font-semibold">
                Aplicar Ahora
              </Button>
              <Button className="w-full">
                Suscribirse para Actualizaciones
              </Button>
              <Link href="#" className="text-sm underline text-center block">
                ¿Ya aplicaste?
              </Link>
            </div>
          </div>

          {/* Contact Person */}
          <div className="bg-slate-800/50 p-6 rounded-lg shadow-sm">
            <div className="flex flex-row gap-3 items-center mb-3">
              <Avatar className="border border-muted-foreground items-center justify-center">
                <AvatarFallback>JP</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-semibold">Jeffry Paot</h4>
                <p className="text-sm text-muted-foreground">
                  Gerente de recursos humanos
                </p>
              </div>
            </div>
            <p className="p-4 border border-gray-600 rounded-lg bg-background text-sm mb-4 leading-relaxed">
              ¡Hola! <br />
              Mi nombre es Jeffry, soy HR. Manager en Kovara. <br />
              Contáctanos si tienes preguntas o no encontraste lo que buscabas
              👋.
            </p>
            <Button className="w-full">Contáctanos</Button>
          </div>

          {/* Share Job Section */}
          <div className="bg-slate-800/50 border-gray-700 p-6 rounded-lg shadow-sm">
            <p className="text-sm font-semibold mb-3">Comparte esta vacante:</p>

            <div className="relative w-full mb-4">
              <Input
                type="text"
                value={currentUrl}
                readOnly
                className="hover:border-blue-600 transition-colors bg-gray-700/40 h-11 border-gray-600 pr-28 pl-3 text-sm text-gray-300 select-none focus:ring-0 focus:outline-none"
                aria-label="URL de la vacante"
              />
              <Button
                variant="ghost"
                onClick={handleCopyUrl}
                className="absolute right-1 top-1 bottom-1 h-auto px-3 text-xs font-semibold hover:bg-gray-600 flex items-center gap-1.5"
                aria-label="Copiar URL"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-green-400" />
                    <span>Copiado</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    <span>Copiar</span>
                  </>
                )}
              </Button>
            </div>
            <SocialIcons />
          </div>
        </aside>
      </div>
    </section>
  );
};

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
      <div className="flex gap-3">
        {socials.map((social, index) => (
          <SocialIcon key={index} icon={social.icon} label={social.name} />
        ))}
      </div>
  );
};

export default JobDetail;
