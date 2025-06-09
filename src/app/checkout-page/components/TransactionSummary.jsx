import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

const TransactionSummary = ({onNext, onBack}) => {
  return (
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-slate-800 rounded-lg">
      
      {/* Sección de confirmación */}
      <Card className="flex flex-col justify-center items-center text-center gap-4 py-10 px-6 bg-slate-800 border-none">
        <CheckCircle2 className="w-16 h-16 text-green-600" />
        <div>
          <h2 className="text-xl font-semibold">¡Tu pedido ha sido finalizado!</h2>
          <p className="text-sm text-muted-foreground mt-2">
            Hemos recibido tu orden y ya está en proceso. Te notificaremos cuando esté lista para ser enviada.
          </p>
        </div>
        <div className="flex flex-col gap-3 w-full max-w-xs mt-4">
          <Button className="w-full" onClick={onNext}>Confirmar pedido</Button>
          <Button variant="outline" className="w-full" onClick={onBack}>Editar pedido</Button>
        </div>
      </Card>

      {/* Sección de resumen del pedido */}
      <Card className="shadow-lg bg-slate-900">
        <CardHeader>
          <CardTitle className="text-lg">Resumen del Pedido</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-muted-foreground">
          <div>
            <p className="text-muted-foreground">Cliente</p>
            <p className="text-foreground font-medium">Aarón Martínez</p>
          </div>

          <div>
            <p className="text-muted-foreground">Producto</p>
            <p className="text-foreground font-medium">Laptop HP Envy 15 - Intel Core i7, 16GB RAM, 512GB SSD</p>
          </div>

          <div className="border rounded-lg p-4 space-y-2 bg-slate-800">
            <div className="flex justify-between">
              <span>Lunes, 7 Junio 2025</span>
              <span>1 unidad</span>
            </div>
            <div className="flex justify-between">
              <span>Garantía extendida</span>
              <span>1 año</span>
            </div>
            <div className="flex justify-between font-medium text-foreground pt-2 border-t">
              <span>Total</span>
              <span>1 artículo</span>
            </div>
          </div>

          <div className="space-y-1 pt-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$950.00</span>
            </div>
            <div className="flex justify-between">
              <span>Envío</span>
              <span>$20.00</span>
            </div>
            <div className="flex justify-between ">
              <span>Envío</span>
              <span>Gratis</span>
            </div>
          </div>

          <div className="flex justify-between items-center border-t pt-4 mt-4">
            <span className="text-base font-semibold text-foreground">Total a pagar</span>
            <span className="text-2xl font-bold text-green-600">$920.00</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default TransactionSummary
