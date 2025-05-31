"use client";

import BreadcrumbComp from "@/components/layout/BreadcrumbComp";
import PageItem from "./components/PageItem";
import Checkout from "./components/Checkout";
import EmptyCart from "./components/EmptyCart"; // Nuevo import
import { useCart } from "./context/cart-context";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const CartPage = () => {
  const {
    cart,
    clearCart,
    executeClearCart,
    cancelClearCart,
    isClearCartDialogOpen,
  } = useCart(); // Obtener productos y funciones del carrito

  if (cart.length === 0 && !isClearCartDialogOpen) {
    return <EmptyCart />;
  }

  return (
    <>
      <section className="flex flex-col p-4 md:px-6 gap-8">
        {/* Breadcrumb y encabezado */}
        <BreadcrumbComp page="Carrito" />

        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Carrito de compras</h2>
          <p className="text-base text-muted-foreground">
            Revisa y gestiona tus productos antes de finalizar tu compra.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-7 w-full">
          <div className="flex flex-col gap-6 flex-1 w-full lg:order-1">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-bold">Productos ({cart.length})</h2>
              <Button
                variant="outline"
                className="flex items-center gap-2 text-white hover:bg-red-500 hover:text-white transition"
                onClick={clearCart} // This will now open the dialog
                disabled={cart.length === 0}
              >
                <Trash2 className="w-4 h-4" />
                Vaciar carrito
              </Button>
            </div>
            {cart.map((product) => (
              <PageItem key={product.id} data={product} />
            ))}
          </div>

          <div className="w-full lg:w-[350px] shrink-0 lg:sticky lg:top-24 h-fit lg:order-2">
            <Checkout />
          </div>
        </div>
      </section>

      <AlertDialog
        open={isClearCartDialogOpen}
        onOpenChange={(open) => !open && cancelClearCart()}
      >
        <AlertDialogContent className="bg-slate-800/50 backdrop-blur-md rounded-md ">
          <AlertDialogHeader>
            <AlertDialogTitle>¿Estás seguro?</AlertDialogTitle>
            <AlertDialogDescription>
              Esta acción vaciará completamente tu carrito de compras. No podrás
              deshacer esta acción.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={cancelClearCart}>
              Cancelar
            </AlertDialogCancel>
            <AlertDialogAction onClick={executeClearCart}>
              Confirmar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default CartPage;
