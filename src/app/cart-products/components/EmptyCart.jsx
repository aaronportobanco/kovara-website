import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShoppingBag } from "lucide-react";

const EmptyCart = () => {
  return (
    <div className="container px-4 py-16 pt-20 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-6 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
          <ShoppingBag className="h-10 w-10 text-muted-foreground" />
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter">Tu carrito está vacío</h1>
          <p className="text-muted-foreground">
            Parece que aún no has añadido productos a tu carrito.
          </p>
        </div>
        <Link href="/products">
          <Button className="mt-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Continuar comprando
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
