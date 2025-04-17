"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { ArrowDownRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "../ui/separator";

const NavBar = () => {
  return (
    <>
      <header className="px-4 py-2.5 flex items-center justify-between relative overflow-hidden">
        {/* Logo and Brand Name */}
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

        {/* Navigation Links */}
        <nav
          className="flex items-center gap-2.5 w-full justify-center z-10"
          aria-label="Main navigation"
        >
          <Link href="/">
            <Button
              variant="link"
              className="font-medium group hover:bg-foreground/10 px-4 py-2 flex items-center gap-2 transition-all duration-300"
            >
              Inicio
              <ArrowDownRight className="max-w-0 overflow-hidden group-hover:max-w-[120px] transition-all duration-300" />
            </Button>
          </Link>
          <Button
            variant="link"
            className="font-medium group hover:bg-foreground/10 px-4 py-2 flex items-center gap-2 transition-all duration-300"
          >
            Sobre Nosotros
            <ArrowDownRight className="max-w-0 overflow-hidden group-hover:max-w-[120px] transition-all duration-300" />
          </Button>
          <Button
            variant="link"
            className="font-medium group hover:bg-foreground/10 px-4 py-2 flex items-center gap-2 transition-all duration-300"
          >
            Productos
            <ArrowDownRight className="max-w-0 overflow-hidden group-hover:max-w-[120px] transition-all duration-300" />
          </Button>
          <Button
            variant="link"
            className="font-medium group hover:bg-foreground/10 px-4 py-2 flex items-center gap-2 transition-all duration-300"
          >
            Contacto
            <ArrowDownRight className="max-w-0 overflow-hidden group-hover:max-w-[120px] transition-all duration-300" />
          </Button>
        </nav>

        {/* Action Icons */}
        <div className="flex items-center gap-2 z-10">
          <Button
            variant="with-icon"
            aria-label="Buscar"
            className="group hover:bg-foreground/10 px-4 py-2 flex items-center gap-2 transition-all duration-300"
          >
            <span className="max-w-0 overflow-hidden group-hover:max-w-[120px] transition-all duration-300">
              Buscar
            </span>
            <Search className="h-4 w-4" strokeWidth={3} />
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
              <ShoppingCart className="h-4 w-4" strokeWidth={3} />
            </Button>
          </Link>
        </div>
      </header>
      <Separator className="bg-foreground/10 mt-1" />
    </>
  );
};

export default NavBar;
