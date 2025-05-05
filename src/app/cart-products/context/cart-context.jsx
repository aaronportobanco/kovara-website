"use client";

import { createContext, useContext, useState } from "react";

// Create a context for the cart
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // State to store the cart items
  const [cart, setCart] = useState([]);

  // Function to add a product to the cart
  // - Checks if the product already exists in the cart
  // - Updates the quantity if it exists, or adds a new product if it doesn't
  // - Ensures the quantity does not exceed the product's stock
  const addToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        const currentQuantity = existingProduct.quantity || 1;
        const newQuantity = currentQuantity + quantity;
        if (newQuantity > product.stock) {
          console.log("No se puede agregar más elementos, stock insuficiente");
          return prevCart; // Return the cart unchanged if stock is insufficient
        }
        // Update the quantity of the existing product
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: newQuantity } : item
        );
      } else {
        if (quantity > product.stock) {
          console.log("No se puede agregar la cantidad deseada, stock insuficiente");
          return prevCart; // Return the cart unchanged if stock is insufficient
        }
        // Add the new product to the cart
        return [...prevCart, { ...product, quantity: quantity }];
      }
    });
    console.log("Producto agregado al carrito");
  };

  // Function to remove a product from the cart by its ID
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    console.log("Producto eliminado del carrito");
  };

  // Function to clear all items from the cart
  const clearCart = () => {
    setCart([]);
    console.log("Carrito vaciado");
  };

  // Function to update the quantity of a product in the cart
  // - Ensures the new quantity does not exceed the product's stock
  const updateQuantity = (productId, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map(item => {
        if (item.id === productId) {
          if (newQuantity > item.stock) {
            console.log(`No se puede actualizar la cantidad, excede el stock (${item.stock})`);
            return item; // Return the item unchanged if stock is insufficient
          }
          // Update the quantity of the product
          return { ...item, quantity: newQuantity };
        }
        return item; // Return other items unchanged
      })
    );
    console.log(`Cantidad actualizada para ${productId}: ${newQuantity}`);
  };

  // Function to calculate the total cost of items in the cart
  const getCartTotal = () => {
    return cart.reduce((sum, item) => sum + item.precio * (item.quantity || 1), 0);
  };

  // Function to get the total number of items in the cart
  const getCartItemsCount = () => {
    return cart.length;
  };

  // Provide the cart context to child components
  return (
    <CartContext.Provider
      value={{
        cart,               // Current cart state
        addToCart,          // Function to add items to the cart
        removeFromCart,     // Function to remove items from the cart
        clearCart,          // Function to clear the cart
        updateQuantity,     // Function to update item quantities
        getCartTotal,       // Function to calculate total cost
        getCartItemsCount,  // Function to get total item count
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => {
  return useContext(CartContext);
};