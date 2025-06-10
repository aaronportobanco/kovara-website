import { Separator } from "@/components/ui/separator";
import TransactionItem from "./TransactionItem";

const TransactionOrderSummary = ({
  cart,
  getCartItemsCount,
  subtotal,
  taxRate,
  tax,
  deliveryFee,
  total,
}) => {
  return (
    <div className="md:col-span-2">
      <div className="lg:sticky top-10 w-full h-fit border border-foreground max-w-lg rounded-lg p-5 bg-slate-800/50 space-y-4">
        <h3 className="text-lg font-semibold">Detalle del pedido</h3>

        <div className="text-sm text-muted-foreground">
          Productos a pagar: {getCartItemsCount()}
        </div>
        <Separator className="my-2 bg-gray-600" />

        <div className="overflow-y-auto max-h-60 space-y-3">
          {cart && cart.length > 0 ? (
            cart.map((product) => (
              <TransactionItem key={product.id} data={product} />
            ))
          ) : (
            <p className="text-center text-muted-foreground">
              No hay productos en tu orden.
            </p>
          )}
        </div>
        <Separator className="my-2 bg-gray-600" />

        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Subtotal</span>
            <span className="font-medium">C$&nbsp;{subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">
              Impuestos ({(taxRate * 100).toFixed(0)}%)
            </span>
            <span className="font-medium">C$&nbsp;{tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Envío</span>
            <span className="font-medium">
              {deliveryFee === 0 ? "Gratis" : `C$&nbsp;${deliveryFee.toFixed(2)}`}
            </span>
          </div>
        </div>

        <Separator className="my-2 bg-gray-600" />

        <div className="flex justify-between text-base font-bold">
          <span>Total</span>
          <span>C$&nbsp;{total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default TransactionOrderSummary;
