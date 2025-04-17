"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  ShoppingCart,
  ArrowDownRight,
  Search,
  Menu,
  House,
  Phone,
  Boxes,
  Users,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "../ui/separator";

// Main Navbar component
const NavBar = () => {
  return (
    <>
      <header className="px-4 py-2.5 flex items-center justify-between relative overflow-hidden">
        <Logo />
        {/* Mobile menu (hamburger) */}
        <div className="md:hidden">
          <MobileMenu />
        </div>
        {/* Desktop nav */}
        <div className="hidden md:flex items-center justify-between gap-4 w-full">
          <NavLinks />
          <ActionIcons />
        </div>
      </header>
      <Separator className="bg-foreground/10 mt-1" />
    </>
  );
};

// Logo component
const Logo = () => {
  return (
    <div className="flex items-center gap-2 z-10">
      <Image
        src="/assets/logo/logo.webp"
        alt="Logo de Kovara"
        width={18}
        height={27}
      />
      <span className="text-foreground text-base font-bold leading-7 tracking-[-0.08px]">
        Kovara
      </span>
    </div>
  );
};

// Navigation links component
const links = [
  {
    href: "/",
    label: "Inicio",
    Icon: <House className="mr-2" strokeWidth={3} />,
  },
  {
    href: "/about",
    label: "Sobre Nosotros",
    Icon: <Users className="mr-2" strokeWidth={3} />,
  },
  {
    href: "/products",
    label: "Productos",
    Icon: <Boxes className="mr-2" strokeWidth={3} />,
  },
  {
    href: "/contact",
    label: "Contacto",
    Icon: <Phone className="mr-2" strokeWidth={3} />,
  },
];

const NavLinks = () => {
  return (
    <nav
      className="flex items-center gap-2.5 w-full justify-center z-10"
      aria-label="Main navigation"
    >
      {links.map((link) => (
        <Link key={link.label} href={link.href}>
          <Button
            variant="link"
            className="font-medium group hover:bg-foreground/10 px-4 py-2 flex items-center gap-2 transition-all duration-300"
          >
            {link.label}
            <ArrowDownRight className="max-w-0 overflow-hidden group-hover:max-w-[120px] transition-all duration-300" />
          </Button>
        </Link>
      ))}
    </nav>
  );
};

// Action icons component
const ActionIcons = () => {
  return (
    <div className="flex items-center z-10">
      <Button
        variant="with-icon"
        aria-label="Buscar"
        className="group hover:bg-foreground/10 px-4 py-2 flex items-center gap-2 transition-all duration-300"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-[120px] transition-all duration-300">
          Buscar
        </span>
        <Search strokeWidth={3} />
      </Button>
      <Link href="/cart-products">
        <Button
          variant="icon"
          aria-label="Carrito de compras"
          className="group hover:bg-foreground/10 px-4 py-2 flex items-center gap-2 transition-all duration-300"
        >
          <span className="max-w-0 overflow-hidden group-hover:max-w-[120px] transition-all duration-300">
            Ver carrito
          </span>
          <ShoppingCart strokeWidth={3} />
        </Button>
      </Link>
    </div>
  );
};

// Mobile menu component
const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="icon" aria-label="Abrir menú">
          <Menu />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="w-64 bg-background">
        <SheetHeader className="text-start mt-4">
          <SheetTitle>Menú principal</SheetTitle>
          <SheetDescription>
            Explora nuestros productos y servicios
          </SheetDescription>
        </SheetHeader>

        <div className="flex flex-col gap-4 mt-6">
          <Separator className="my-2" />
          {links.map((link) => (
            <Link key={link.label} href={link.href}>
              <Button variant="ghost" className="w-full justify-start">
                {link.Icon}
                {link.label}
              </Button>
            </Link>
          ))}

          <Separator className="my-2" />

          <Button variant="ghost" className="justify-start">
            <Search className="mr-2" strokeWidth={3} />
            Buscar
          </Button>

          <Link href="/cart-products">
            <Button variant="ghost" className="justify-start">
              <ShoppingCart className="mr-2" strokeWidth={3} />
              Ver carrito
            </Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavBar;
