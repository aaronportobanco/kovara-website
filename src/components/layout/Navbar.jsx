"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ArrowUpRight, Search, Menu } from "lucide-react";
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
import { Separator } from "../ui/separator";
import scrollToSection from "@/utils/scroll-utils";

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
        id="navbar"
        aria-label="Main navigation"
        className={`border-b fixed top-0 left-0 right-0 px-0 py-4 md:p-4 flex items-center justify-between z-50 backdrop-blur-md transition-transform duration-300 ${
          show ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Mobile navbar: hamburger and Logo on left, cart on right */}
        <div className="md:hidden flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <MobileMenu />
            <Link href="/" aria-label="Ir a la página de inicio">
              <Logo />
            </Link>
          </div>
          <Link href="/cart-products">
            <Button
              variant="icon"
              aria-label="Carrito de compras"
              className="group hover:text-[#3B82F6] hover:bg-foreground/10 flex items-center gap-2 transition-all duration-300"
            >
              <ShoppingCart strokeWidth={3} />
            </Button>
          </Link>
        </div>
        {/* Desktop navbar: Logo, nav links and action icons */}
        <div className="hidden md:flex w-full items-center">
          <Link href="/" aria-label="Ir a la página de inicio">
            <Logo />
          </Link>
          <NavLinks />
          <ActionIcons />
        </div>
      </nav>
      <Separator className="bg-foreground/10 mt-1" />
    </>
  );
};

const NavLinks = () => {
  return (
    <div
      className="flex items-center gap-3 w-full justify-center"
      aria-label="Main navigation"
    >
      {Datalinks.slice(0, 4).map((link) => {
        if (link.label === "Contacto") {
          return (
            <a
              key={link.label}
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
            >
              <Button
                variant="link"
                aria-label={link.label}
                className="hover:text-[#3B82F6] font-medium group flex items-center gap-2 transition-all duration-300"
              >
                {link.label}
                <ArrowUpRight className="max-w-0 overflow-hidden group-hover:max-w-[120px] transition-all duration-300" />
              </Button>
            </a>
          );
        } else {
          return (
            <Link key={link.label} href={link.href}>
              <Button
                variant="link"
                aria-label={link.label}
                className="hover:text-[#3B82F6] font-medium group flex items-center gap-2 transition-all duration-300"
              >
                {link.label}
                <ArrowUpRight className="max-w-0 overflow-hidden group-hover:max-w-[120px] transition-all duration-300" />
              </Button>
            </Link>
          );
        }
      })}
    </div>
  );
};

// Action icons component
const ActionIcons = () => {
  return (
    <div className="flex items-center">
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
  const [open, setOpen] = useState(false); // Added state to control sidebar

  return (
    <Sheet open={open} onOpenChange={setOpen}>
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
          {Datalinks.slice(0, 4).map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              <Button variant="ghost" className="w-full justify-start">
                {link.Icon}
                {link.label}
              </Button>
            </Link>
          ))}
          <Link href="/cart-products" onClick={() => setOpen(false)}>
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
