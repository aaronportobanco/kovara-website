"use client";

import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Updated addToCart to receive quantity parameter and check against product.stock
  const addToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        const currentQuantity = existingProduct.quantity || 1;
        const newQuantity = currentQuantity + quantity;
        if (newQuantity > product.stock) {
          console.log("No se puede agregar más elementos, stock insuficiente");
          return prevCart;
        }
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: newQuantity } : item
        );
      } else {
        if (quantity > product.stock) {
          console.log("No se puede agregar la cantidad deseada, stock insuficiente");
          return prevCart;
        }
        return [...prevCart, { ...product, quantity: quantity }];
      }
    });
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

  // Updated updateQuantity to ensure newQuantity does not exceed stock
  const updateQuantity = (productId, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map(item => {
        if (item.id === productId) {
          if (newQuantity > item.stock) {
            console.log(`No se puede actualizar la cantidad, excede el stock (${item.stock})`);
            return item;
          }
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
    console.log(`Cantidad actualizada para ${productId}: ${newQuantity}`);
  };

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
        updateQuantity,      // Función actualizada
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