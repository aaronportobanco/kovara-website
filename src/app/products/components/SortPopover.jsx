import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Command, CommandGroup, CommandItem } from "@/components/ui/command";
import { ChevronDown } from "lucide-react";

export default function SortPopover({ sortBy, setSortBy, setCurrentPage }) {
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
    <Popover>
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
              }}
            >
              Precio: Menor a mayor
            </CommandItem>
            <CommandItem
              onSelect={() => {
                setSortBy("precioDesc");
                setCurrentPage(1);
              }}
            >
              Precio: Mayor a menor
            </CommandItem>
            <CommandItem
              onSelect={() => {
                setSortBy("nombreAsc");
                setCurrentPage(1);
              }}
            >
              Nombre: A-Z
            </CommandItem>
            <CommandItem
              onSelect={() => {
                setSortBy("nombreDesc");
                setCurrentPage(1);
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
