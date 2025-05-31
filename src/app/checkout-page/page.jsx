import React from 'react'
import BreadcrumbComp from '@/components/layout/BreadcrumbComp'

const CheckOut = () => {
  return (
    <section className="flex flex-col p-4 md:px-6 gap-8">
        {/* Breadcrumb y encabezado */}
        <BreadcrumbComp page="Carrito" />

        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Carrito de compras</h2>
          <p className="text-base text-muted-foreground">
            Revisa y gestiona tus productos antes de finalizar tu compra.
          </p>
        </div>
    </section>
  )
}

export default CheckOut