"use client";

import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    console.log("Producto agregado al carrito");
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    console.log("Producto eliminado del carrito");
  };

  const clearCart = () => {
    setCart([]);
    console.log("Carrito vaciado");
  };

  // Nueva función para actualizar la cantidad de un producto
  const updateQuantity = (productId, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
    console.log(`Cantidad actualizada para ${productId}: ${newQuantity}`);
  };

  // Actualizar getCartTotal para usar la cantidad de cada producto
  const getCartTotal = () => {
    return cart.reduce((sum, item) => sum + item.precio * (item.quantity || 1), 0);
  };

  const getCartItemsCount = () => {
    return cart.length;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        updateQuantity,      // Nueva función agregada
        getCartTotal,        // Actualizada
        getCartItemsCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};