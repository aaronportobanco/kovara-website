import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Command, CommandGroup, CommandItem } from "@/components/ui/command";
import { ChevronDown } from "lucide-react";

export default function SortPopover({ sortBy, setSortBy, setCurrentPage }) {
  // Estado para controlar la apertura del Popover
  const [open, setOpen] = useState(false);

  const getLabel = () => {
    switch (sortBy) {
      case "precioAsc":
        return "Precio: Menor a mayor";
      case "precioDesc":
        return "Precio: Mayor a menor";
      case "nombreAsc":
        return "Nombre: A-Z";
      case "nombreDesc":
        return "Nombre: Z-A";
      default:
        return "Ordenar por";
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="w-full md:w-auto border border-gray-400"
        >
          {getLabel()}
          <ChevronDown />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 w-56">
        <Command>
          <CommandGroup>
            <CommandItem
              onSelect={() => {
                setSortBy("precioAsc");
                setCurrentPage(1);
                setOpen(false);
              }}
            >
              Precio: Menor a mayor
            </CommandItem>
            <CommandItem
              onSelect={() => {
                setSortBy("precioDesc");
                setCurrentPage(1);
                setOpen(false);
              }}
            >
              Precio: Mayor a menor
            </CommandItem>
            <CommandItem
              onSelect={() => {
                setSortBy("nombreAsc");
                setCurrentPage(1);
                setOpen(false);
              }}
            >
              Nombre: A-Z
            </CommandItem>
            <CommandItem
              onSelect={() => {
                setSortBy("nombreDesc");
                setCurrentPage(1);
                setOpen(false);
              }}
            >
              Nombre: Z-A
            </CommandItem>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
