import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, ArrowRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "../../cart-products/context/cart-context";
import TransactionOrderSummary from "./TransactionOrderSummary";
import scrollToSection from "@/utils/scroll-utils";

export default function TransactionSummary({ onBack, onNext }) {
  const { cart, getCartTotal, getCartItemsCount } = useCart();

  const subtotal = getCartTotal();
  const taxRate = 0.16; // Example tax rate (16%)
  const tax = subtotal * taxRate;
  const deliveryFee = 0; // Assuming free delivery as per the image
  const total = subtotal + tax + deliveryFee;

  // Placeholder data - replace with actual data source if available
  const orderDetailsPlaceholders = {
    orderId: "#0214582001",
    userName: "Aaron", // Or fetch from user context
    orderDate: "Mar 28, 2023",
    deliveryDate: "Abril 01, 2023",
    status: "En Progreso",
    paymentStatus: "Pagado",
    paymentMethod: "Contra Entrega", // Example: Cash on Delivery
    address: "718 Robbyn Meadow, Springfield",
  };

  return (
    <div className="grid md:grid-cols-5 gap-x-8 gap-y-6">
      {/* --- LEFT COLUMN --- */}
      <div className="md:col-span-3 space-y-5">
        <div className="flex justify-between items-end">
          <header className="flex flex-col items-start gap-2">
            <p className="text-blue-400 text-sm">Finalizar compra</p>
              <h3 className="text-lg font-bold">Resumen General</h3>
          </header>
          <p className="text-sm text-muted-foreground">
            ID del Pedido: {orderDetailsPlaceholders.orderId}
          </p>
        </div>
        <Separator className="my-2 bg-gray-600" />

        <Card className="bg-slate-800/50 border-foreground">
          <CardHeader>
            <CardTitle>Actualizaciones del Pedido</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Recibirás actualizaciones del pedido y envío por correo
              electrónico.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-foreground">
          <CardHeader>
            <CardTitle>Información del Pedido</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 text-sm">
            <div>
              <p className="text-muted-foreground">Fecha del Pedido</p>
              <p className="text-foreground font-medium">
                {orderDetailsPlaceholders.orderDate}
              </p>
            </div>
            <div>
              <p className="text-muted-foreground">Fecha de Entrega Estimada</p>
              <p className="text-foreground font-medium">
                {orderDetailsPlaceholders.deliveryDate}
              </p>
            </div>
            <div>
              <p className="text-muted-foreground">Estado</p>
              <p className="text-foreground font-medium">
                {orderDetailsPlaceholders.status}
              </p>
            </div>
            <div>
              <p className="text-muted-foreground">Estado del Pago</p>
              <p className="text-foreground font-medium">
                {orderDetailsPlaceholders.paymentStatus}
              </p>
            </div>
            <div>
              <p className="text-muted-foreground">Método de Pago</p>
              <p className="text-foreground font-medium">
                {orderDetailsPlaceholders.paymentMethod}
              </p>
            </div>
            <div className="sm:col-span-2">
              <p className="text-muted-foreground">Dirección de Envío</p>
              <p className="text-foreground font-medium">
                {orderDetailsPlaceholders.address}
              </p>
            </div>
          </CardContent>
        </Card>
        <div className="flex flex-row gap-2">
          <Button
            className="w-full group"
            variant="filled"
            onClick={() => {
              onBack();
              scrollToSection("checkout");
            }}
          >
            <ArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
            Volver
          </Button>
          <Button className="w-full group" onClick={onNext}>
            Confirmar pedido
            <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
      </div>

      {/* --- RIGHT COLUMN --- */}
      <TransactionOrderSummary
        cart={cart}
        getCartItemsCount={getCartItemsCount}
        subtotal={subtotal}
        taxRate={taxRate}
        tax={tax}
        deliveryFee={deliveryFee}
        total={total}
      />
    </div>
  );
}
