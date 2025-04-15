"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { Search } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const NavBar = () => {
  return (
    <header className="bg-slate-800 px-4 py-2.5 flex items-center justify-between relative overflow-hidden">
      {/* Logo and Brand Name */}
      <div className="flex items-center gap-4 z-10">
        <span className="text-slate-50 text-base font-bold leading-7 tracking-[-0.08px]">
          Kovara
        </span>
      </div>

      {/* Navigation Links */}
      <nav
        className="flex items-center gap-2.5 w-full justify-center z-10"
        aria-label="Main navigation"
      >
        <Link href="/">
          <Button variant="link" className="text-white font-medium">
            Inicio
          </Button>
        </Link>
        <Button variant="link" className="text-white font-medium">
          Sobre Nosotros
        </Button>
        <Button variant="link" className="text-white font-medium">
          Productos
        </Button>
        <Button variant="link" className="text-white font-medium">
          Contacto
        </Button>
      </nav>

      {/* Action Icons */}
      <div className="flex items-center gap-2 z-10">
        <Button variant="with-icon" aria-label="Buscar">
          <Search className="h-4 w-4" strokeWidth={3} />
        </Button>
        <Link href="/cart-products">
          <Button variant="icon" aria-label="Carrito de compras">
            <ShoppingCart className="h-4 w-4" strokeWidth={3} />
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
