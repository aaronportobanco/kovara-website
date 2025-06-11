import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react"; // X icon removed as it's not needed for order confirmation
import Link from "next/link";
import { Separator } from "@/components/ui/separator"; // Added Separator

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
    <div className="flex flex-col md:flex-row justify-center items-start py-8 bg-slate-800/50 rounded-lg shadow-xl w-full max-w-4xl mx-auto my-10">
      {/* Left Side: Success Message and Actions */}
      <div className="p-6 md:p-8 w-full md:w-1/2 flex flex-col items-center justify-center text-center space-y-6">
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
        <div className="text-sm">
          Número de Pedido:{" "}
          <span className="font-semibold">{orderData.orderNumber}</span>
        </div>
        <div className="w-full flex flex-col gap-3 max-w-xs mt-6">
          <Link href="/products" passHref>
            <Button className="w-full">Continuar comprando</Button>
          </Link>
          <Link href="/" passHref>
            <Button variant="outline" className="w-full">Volver al sitio web</Button>
          </Link>
        </div>
      </div>

      {/* Right Side: Order Details Summary */}
      <div className="p-6 md:p-8 w-full md:w-1/2 space-y-6">
        <h3 className="text-xl font-semibold mb-4 text-center md:text-left">
          Detalles del Pedido
        </h3>

        {/* Shipping Information */}
        <div className="space-y-2">
          <h4 className="text-md font-semibold">Información de Envío</h4>
          <div className="text-sm space-y-1">
            <p>
              <span className="font-medium">Nombre:</span>{" "}
              {orderData.shippingDetails.fullName}
            </p>
            <p>
              <span className="font-medium">Dirección:</span>{" "}
              {orderData.shippingDetails.address}
            </p>
            <p>
              <span className="font-medium">Ciudad/Depto/CP:</span>{" "}
              {orderData.shippingDetails.cityStateZip}
            </p>
            <p>
              <span className="font-medium">Email:</span>{" "}
              {orderData.shippingDetails.email}
            </p>
            <p>
              <span className="font-medium">Teléfono:</span>{" "}
              {orderData.shippingDetails.phone}
            </p>
            <p>
              <span className="font-medium">Método de envío:</span>{" "}
              {orderData.shippingDetails.shippingMethod}
            </p>
          </div>
        </div>

        <Separator className="my-2 bg-gray-600" />

        {/* Payment Information */}
        <div className="space-y-2">
          <h4 className="text-md font-semibold">Información de Pago</h4>
          <div className="text-sm space-y-1">
            <p>
              <span className="font-medium">Método de pago:</span>{" "}
              {orderData.paymentDetails.paymentMethod}
            </p>
            <p>
              <span className="font-medium">Tarjeta:</span>{" "}
              {orderData.paymentDetails.cardInfo}
            </p>
            <p>
              <span className="font-medium">Nombre en tarjeta:</span>{" "}
              {orderData.paymentDetails.cardName}
            </p>
          </div>
        </div>

        <Separator className="my-2 bg-gray-600" />
        {/* Order Summary */}
        <div className="space-y-1">
          <div className="flex justify-between font-semibold text-md pt-1">
            <span>Total:</span>
            <span>C${orderData.total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessful;
