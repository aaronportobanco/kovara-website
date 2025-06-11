import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import scrollToSection from "@/utils/scroll-utils";

export default function TransactionSummary({ onBack, onNext }) {
  // Placeholder data - replace with actual data source if available
  const orderDetailsPlaceholders = {
    orderId: "#0214582001",
    orderDate: "Mar 28, 2023",
    deliveryDate: "Abril 01, 2023", // This can be part of shipping or general info
    status: "En Progreso", // General order status
    // shippingDetails, paymentDetails, orderItems, and totals will be added
    shippingDetails: {
      email: "aaron.portobanco@example.com",
      fullName: "Aarón Portobanco",
      address: "718 Robbyn Meadow, Springfield", // Kept original for consistency
      cityStateZip: "Managua, Managua, 11001",
      phone: "+505 8765 4321",
      shippingMethod: "Delivery Estándar",
    },
    paymentDetails: {
      paymentMethod: "Contra Entrega", // Kept original
      cardInfo: "N/A para Contra Entrega", // Example for COD
      cardName: "N/A",
      paymentStatus: "Pendiente", // More specific payment status
    },
  };

  return (
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
            Recibirás actualizaciones del pedido y envío por correo electrónico.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/50 border-foreground">
        <CardHeader>
          <CardTitle>Información del Pedido</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm">
          {/* General Order Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
            <div>
              <p>
                <span className="text-muted-foreground">Fecha del Pedido:</span>{" "}
                <span className="text-foreground font-medium">
                  {orderDetailsPlaceholders.orderDate}
                </span>
              </p>
            </div>
            <div>
              <p>
                <span className="text-muted-foreground">
                  Fecha de Entrega Estimada:
                </span>{" "}
                <span className="text-foreground font-medium">
                  {orderDetailsPlaceholders.deliveryDate}
                </span>
              </p>
            </div>
            <div>
              <p>
                <span className="text-muted-foreground">
                  Estado del Pedido:
                </span>{" "}
                <span className="text-foreground font-medium">
                  {orderDetailsPlaceholders.status}
                </span>
              </p>
            </div>
          </div>

          <Separator className="my-2 bg-gray-700" />

          {/* Shipping Information */}
          <div>
            <h4 className="text-md font-semibold mb-2">Información de Envío</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm">
              <div className="space-y-2">
                <p>
                  <span className="font-medium text-muted-foreground">
                    Nombre:
                  </span>{" "}
                  <span className="text-foreground">
                    {orderDetailsPlaceholders.shippingDetails.fullName}
                  </span>
                </p>
                <p>
                  <span className="font-medium text-muted-foreground">
                    Dirección:
                  </span>{" "}
                  <span className="text-foreground">
                    {orderDetailsPlaceholders.shippingDetails.address}
                  </span>
                </p>
                <p>
                  <span className="font-medium text-muted-foreground">
                    Ciudad/Depto/CP:
                  </span>{" "}
                  <span className="text-foreground">
                    {orderDetailsPlaceholders.shippingDetails.cityStateZip}
                  </span>
                </p>
              </div>
              <div className="space-y-2">
                <p>
                  <span className="font-medium text-muted-foreground">
                    Email:
                  </span>{" "}
                  <span className="text-foreground">
                    {orderDetailsPlaceholders.shippingDetails.email}
                  </span>
                </p>
                <p>
                  <span className="font-medium text-muted-foreground">
                    Teléfono:
                  </span>{" "}
                  <span className="text-foreground">
                    {orderDetailsPlaceholders.shippingDetails.phone}
                  </span>
                </p>
                <p>
                  <span className="font-medium text-muted-foreground">
                    Método de envío:
                  </span>{" "}
                  <span className="text-foreground">
                    {orderDetailsPlaceholders.shippingDetails.shippingMethod}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <Separator className="my-2 bg-gray-700" />

          {/* Payment Information */}
          <div>
            <h4 className="text-md font-semibold mb-2">Información de Pago</h4>
            <div className="space-y-1">
              <p>
                <span className="font-medium text-muted-foreground">
                  Método de pago:
                </span>{" "}
                {orderDetailsPlaceholders.paymentDetails.paymentMethod}
              </p>
              {orderDetailsPlaceholders.paymentDetails.paymentMethod !==
                "Contra Entrega" && (
                <>
                  <p>
                    <span className="font-medium text-muted-foreground">
                      Info Tarjeta:
                    </span>{" "}
                    {orderDetailsPlaceholders.paymentDetails.cardInfo}
                  </p>
                  <p>
                    <span className="font-medium text-muted-foreground">
                      Nombre en tarjeta:
                    </span>{" "}
                    {orderDetailsPlaceholders.paymentDetails.cardName}
                  </p>
                </>
              )}
              <p>
                <span className="font-medium text-muted-foreground">
                  Estado del Pago:
                </span>{" "}
                {orderDetailsPlaceholders.paymentDetails.paymentStatus}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="flex gap-2">
        <Button
          className="w-full group"
          variant="filled"
          onClick={() => {
            onBack();
            scrollToSection("checkout");
          }}
        >
          <ArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
          Volver al método de pago
        </Button>
        <Button
          className="w-full group"
          onClick={() => {
            onNext();
            scrollToSection("checkout");
          }}
        >
          Confirmar pedido
          <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  );
}
