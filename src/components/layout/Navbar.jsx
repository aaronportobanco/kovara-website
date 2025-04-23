"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  ShoppingCart,
  ArrowDownRight,
  Search,
  Menu,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import Link from "next/link";
import Logo from "./Logo";
import { Datalinks } from "@/data/MockData";
import { scrollToSection } from "@/lib/scroll-utils";;
import { Separator } from "../ui/separator";

// Main Navbar component
const NavBar = () => {
  // Estado para controlar la visibilidad y para almacenar el último scroll
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down; ocultamos el navbar
        setShow(false);
      } else {
        // Scrolling up; mostramos el navbar
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <>
      <nav
        className={`border border-b fixed top-0 left-0 right-0 p-4 flex items-center justify-between z-50 backdrop-blur-md transition-transform duration-300 ${
          show ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Logo />
        {/* Mobile menu (hamburger) */}
        <div className="md:hidden">
          <MobileMenu />
        </div>
        {/* Desktop nav */}
        <div className="hidden md:flex w-full">
          <NavLinks />
          <ActionIcons />
        </div>
      </nav>
      <Separator className="bg-foreground/10 mt-1" />
    </>
  );;
};


const handleNavClick = (e, href) => {
  e.preventDefault();
  const sectionId = href.startsWith("#") ? href.substring(1) : href;
  scrollToSection(sectionId);
};

const NavLinks = () => {
  return (
    <div
      className="flex items-center gap-3 w-full justify-center z-10"
      aria-label="Main navigation"
    >
      {Datalinks.map((link) => (
        <Link key={link.label} href={link.href}>
          <Button
            variant="link"
            aria-label={link.label}
            onClick={(e) => handleNavClick(e, link.href)}
            className="hover:text-[#3B82F6] font-medium group flex items-center gap-2 transition-all duration-300"
          >
            {link.label}
            <ArrowDownRight className="max-w-0 overflow-hidden group-hover:max-w-[120px] transition-all duration-300" />
          </Button>
        </Link>
      ))}
    </div>
  );
};

// Action icons component
const ActionIcons = () => {
  return (
    <div className="flex items-center z-10">
      <Button
        variant="with-icon"
        aria-label="Buscar"
        className="group hover:text-[#3B82F6] hover:bg-foreground/10 flex items-center gap-1 transition-all duration-300"
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
          className="group hover:text-[#3B82F6] hover:bg-foreground/10 flex items-center gap-2 transition-all duration-300"
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
          {Datalinks.map((link) => (
            <Link key={link.label} href={link.href}>
              <Button variant="ghost" className="w-full justify-start">
                {link.Icon}
                {link.label}
              </Button>
            </Link>
          ))}

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
