"use client";

import { createContext, useContext, useState } from "react";
import { toast } from "sonner";

// Create a context for the cart
const CartContext = createContext();

// Common style for success toast notifications
const successToastStyle = {
  backgroundColor: "#052e16",
  color: "white",
  borderColor: "#6b7280",
};

/**
 * Provides cart state and actions to its children components.
 * Manages cart items, quantities, and related operations like adding, removing, and clearing items.
 */
export const CartProvider = ({ children }) => {
  // State to store the cart items. Each item should have at least id, nombre, precio, stock, quantity.
  const [cart, setCart] = useState([]);
  // State to manage the visibility of the clear cart confirmation dialog.
  const [isClearCartDialogOpen, setIsClearCartDialogOpen] = useState(false);

  /**
   * Adds a product to the cart or updates its quantity if it already exists.
   * - Performs stock checks before adding/updating.
   * - Simulates a delay for asynchronous operations.
   * - Uses `prevCart` in `setCart` for robust state updates against concurrent changes.
   * @param {object} product - The product object to add.
   * @param {number} [quantity=1] - The quantity of the product to add.
   */
  const addToCart = (product, quantity = 1) => {
    // Initial check against the current `cart` state.
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      // Product already in cart, check if updating quantity exceeds stock.
      const currentQuantity = existingProduct.quantity || 0; // Default to 0 if quantity is somehow undefined
      if (currentQuantity + quantity > product.stock) {
        toast.error(
          `No se puede agregar más de "${product.nombre}". Stock insuficiente.`
        );
        return; // Stop if stock is exceeded
      }
    } else {
      // New product, check if initial quantity exceeds stock.
      if (quantity > product.stock) {
        toast.error(`Cantidad deseada de "${product.nombre}" excede el stock.`);
        return; // Stop if stock is exceeded
      }
    }

    // Simulate loading time before updating the cart and showing success.
    setTimeout(() => {
      setCart((prevCart) => {
        // Re-evaluate based on `prevCart` for robust state update,
        // handling potential concurrent modifications to the cart.
        const productInPrevCart = prevCart.find((p) => p.id === product.id);

        if (productInPrevCart) {
          // Product exists in prevCart: update its quantity.
          const newQuantity = (productInPrevCart.quantity || 0) + quantity;

          // Defensive stock check with prevCart's data.
          // If newQuantity exceeds stock (e.g. stock changed server-side, or concurrent cart modification),
          // cap at stock or return prevCart. Here, we map and update.
          // The primary stock check is done before setTimeout.
          if (newQuantity > product.stock) {
            // Si el stock cambió, limitamos la cantidad al stock disponible.
          }

          return prevCart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: Math.min(newQuantity, product.stock) } // Ensure not to exceed stock
              : item
          );
        } else {
          // Product is new to prevCart (or was removed concurrently and is being re-added): add it.
          // Stock for a new product was already checked outside setTimeout.
          return [
            ...prevCart,
            { ...product, quantity: Math.min(quantity, product.stock) },
          ]; // Ensure not to exceed stock
        }
      });

      toast.success("Producto agregado al carrito", {
        style: successToastStyle,
        description: `${product.nombre} ha sido añadido.`,
      });
    }, 1000); // Simulate 1 second delay
  };

  /**
   * Removes a product from the cart by its ID.
   * @param {string|number} productId - The ID of the product to remove.
   */
  const removeFromCart = (productId) => {
    const productToRemove = cart.find((item) => item.id === productId);
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));

    if (productToRemove) {
      toast.success("Producto eliminado del carrito", {
        style: successToastStyle,
        description: `${productToRemove.nombre} ha sido eliminado.`,
      });
    } else {
      // Fallback if product name can't be found (e.g., if cart state was inconsistent).
      // This case should ideally not happen if productToRemove is fetched from the cart state before filtering.
      toast.success("Producto eliminado del carrito", {
        style: successToastStyle,
      });
    }
  };

  /**
   * Initiates the process of clearing the cart.
   * Opens a confirmation dialog if the cart is not empty.
   * Shows an info toast if the cart is already empty.
   */
  const clearCart = () => {
    if (cart.length > 0) {
      setIsClearCartDialogOpen(true); // Open confirmation dialog
    } else {
      toast.info("El carrito ya está vacío.");
    }
  };

  /**
   * Executes the action of clearing all items from the cart.
   * Resets the cart state to an empty array and shows a success toast.
   * Closes the confirmation dialog.
   */
  const executeClearCart = () => {
    setCart([]); // Empty the cart
    toast.success("El carrito ha sido vaciado", {
      style: successToastStyle,
    });
    setIsClearCartDialogOpen(false); // Close confirmation dialog
  };

  /**
   * Cancels the cart clearing process.
   * Closes the confirmation dialog.
   */
  const cancelClearCart = () => {
    setIsClearCartDialogOpen(false); // Close confirmation dialog
  };

  /**
   * Updates the quantity of a specific product in the cart.
   * - Ensures the new quantity does not exceed the product's available stock.
   * @param {string|number} productId - The ID of the product to update.
   * @param {number} newQuantity - The new quantity for the product.
   */
  const updateQuantity = (productId, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id === productId) {
          // Ensure new quantity is at least 1 and does not exceed stock
          const validatedQuantity = Math.max(1, newQuantity); // Quantity cannot be less than 1
          if (validatedQuantity > item.stock) {
            // Log for debugging; consider a user-facing toast for better UX
            console.warn(
              `No se puede actualizar la cantidad de "${item.nombre}" a ${validatedQuantity}. Stock disponible: ${item.stock}. Se mantendrá la cantidad máxima posible.`
            );
            toast.error(
              `Stock insuficiente para "${item.nombre}". Solo ${item.stock} disponibles.`
            );
            return { ...item, quantity: item.stock }; // Set to max available stock
          }
          // Update the quantity of the product
          return { ...item, quantity: validatedQuantity };
        }
        return item; // Return other items unchanged
      })
    );
    // Log for debugging purposes
    // console.log(`Cantidad actualizada para ${productId}: ${newQuantity}`);
  };

  /**
   * Calculates the total monetary value of all items in the cart.
   * @returns {number} The total cost.
   */
  const getCartTotal = () => {
    return cart.reduce(
      (sum, item) => sum + item.precio * (item.quantity || 1), // Use quantity, default to 1 if undefined
      0
    );
  };

  /**
   * Gets the total number of unique product types in the cart.
   * @returns {number} The count of items in the cart.
   */
  const getCartItemsCount = () => {
    // This counts unique product entries. If you need total number of individual units,
    // you would sum item.quantity.
    return cart.length;
  };

  // Provide the cart context values to child components
  return (
    <CartContext.Provider
      value={{
        cart, // Current cart state
        addToCart, // Function to add items to the cart
        removeFromCart, // Function to remove items from the cart
        clearCart, // Function to request clear cart confirmation
        executeClearCart, // Function to execute cart clearing
        cancelClearCart, // Function to cancel cart clearing
        isClearCartDialogOpen, // State for dialog visibility
        updateQuantity, // Function to update item quantities
        getCartTotal, // Function to calculate total cost
        getCartItemsCount, // Function to get total item count
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context, simplifying access in components.
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
