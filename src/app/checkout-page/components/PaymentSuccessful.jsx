import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

const PaymentSuccessful = () => {
  // Mock data for a successful order
  const orderData = {
    orderNumber: "KVR-10293847",
    shippingDetails: {
      email: "aaron.portobanco@example.com",
      fullName: "Aarón Portobanco",
      address: "Villa Fontana, Casa #L-25",
      cityStateZip: "Managua, Managua, 11001",
      phone: "+505 8765 4321",
      shippingMethod: "Delivery Estándar",
    },
    paymentDetails: {
      paymentMethod: "Tarjeta Bancaria",
      cardInfo: "Visa terminada en 3456", // Masked card info
      cardName: "Aarón Portobanco",
    },
    orderItems: [
      { name: "Producto Alpha", quantity: 1, price: 75.0 },
      { name: "Servicio Beta", quantity: 2, price: 25.5 },
    ],
    subtotal: 0, // Will be calculated
    impuestos: 0, // Will be calculated
    total: 0, // Will be calculated
  };

  // Calculate totals
  orderData.subtotal = orderData.orderItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  orderData.impuestos = orderData.subtotal * 0.16; // Assuming 16% tax
  orderData.total = orderData.subtotal + orderData.impuestos;

  return (
    <div className="flex flex-col md:flex-row justify-center items-start  rounded-lg w-full max-w-4xl mx-auto">
      {/* Left Side: Success Message and Actions */}
      <div className="py-6 md:py-8 w-full md:w-1/2 flex flex-col items-center justify-center text-center space-y-6">
        <div className="inline-block p-3 bg-green-700/30 rounded-full">
          <CheckCircle className="w-12 h-12 text-green-500 dark:text-green-400" />
        </div>
        <h2 className="text-2xl font-semibold">
          ¡Tu pedido ha sido procesado con éxito!
        </h2>
        <p className="text-sm max-w-sm">
          Gracias por tu compra. Recibirás un correo electrónico de confirmación
          en breve con los detalles de tu pedido.
        </p>
        <div className="text-sm text-muted-foreground">
          Número de Pedido:&nbsp;
          <span className="font-semibold">{orderData.orderNumber}</span>
        </div>
        <div className="w-full flex flex-col gap-3 max-w-xs mt-6">
          <Link href="/products" passHref>
            <Button className="w-full group">
              Continuar comprando
              <ArrowRight className="transition-transform duration-300 group-hover:-translate-x-1" />
            </Button>
          </Link>
          <Link href="/" passHref>
            <Button variant="outline" className="w-full group">
              <ArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
              Volver al sitio web
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessful;
