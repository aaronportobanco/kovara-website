"use client";

import { createContext, useContext, useState } from "react";
import { toast } from "sonner";

// Create a context for the cart
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // State to store the cart items
  const [cart, setCart] = useState([]);
  const [isClearCartDialogOpen, setIsClearCartDialogOpen] = useState(false);

  // Function to add a product to the cart
  // - Checks if the product already exists in the cart
  // - Updates the quantity if it exists, or adds a new product if it doesn't
  // - Ensures the quantity does not exceed the product's stock
  const addToCart = (product, quantity = 1) => {
    // Perform initial checks using the current `cart` state from the provider's scope.
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      const currentQuantity = existingProduct.quantity || 1;

      // Simulate loading time
      setTimeout(() => {
        // If initial checks pass, call setCart and then show the success toast.
        setCart((prevCart) => {
          // Re-evaluate based on prevCart for robust state update.
          const productInPrev = prevCart.find((p) => p.id === product.id);
          const prevQty = productInPrev ? productInPrev.quantity || 1 : 0;
          const finalNewQty = prevQty + quantity;

          // Defensive check with prevCart's data.
          if (finalNewQty > product.stock) {
            // If stock issue detected with prevCart, rely on the earlier toast.error.
            // This specific toast.error might not be necessary here if the outer check is sufficient
            // but kept for robustness if state changes between initial check and setCart execution.
            // toast.error("No se puede agregar más, stock insuficiente (actualizado)");
            return prevCart;
          }

          if (productInPrev) {
            return prevCart.map((item) =>
              item.id === product.id ? { ...item, quantity: finalNewQty } : item
            );
          } else {
            // This case (product existed in `cart` but not in `prevCart`) implies
            // it might have been removed and re-added, or a race condition.
            // For simplicity, if outer check said "existing", we try to update.
            // If not found in prevCart, it might be safer to add it as new if logic allows,
            // or handle as an edge case. Here, we proceed with update logic based on `finalNewQty`.
            // A more robust handling might be to add it if not `productInPrev`.
            // However, to align with the outer check's intent (update existing):
            return prevCart.map((item) =>
              item.id === product.id ? { ...item, quantity: finalNewQty } : item
            );
          }
        });
        toast.success("Producto agregado al carrito", {
          description: `${product.nombre} ha sido añadido.`,
        });
      }, 1000); // Simulate 1 second delay
    } else {
      // Product is new based on initial check against `cart`
      if (quantity > product.stock) {
        toast.error("Cantidad deseada excede el stock");
        return; // Exit early
      }

      // Simulate loading time
      setTimeout(() => {
        setCart((prevCart) => {
          // Check if it was added by a concurrent call that updated prevCart
          const productInPrev = prevCart.find((p) => p.id === product.id);
          if (productInPrev) {
            // Already added by another call, treat as update
            const prevQty = productInPrev.quantity || 1;
            const finalNewQty = prevQty + quantity;
            if (finalNewQty > product.stock) {
              // Rely on earlier toast.error if initial check failed.
              // toast.error("Cantidad deseada excede el stock (actualizado)");
              return prevCart;
            }
            return prevCart.map((item) =>
              item.id === product.id ? { ...item, quantity: finalNewQty } : item
            );
          }
          // If truly new to prevCart, add it.
          return [...prevCart, { ...product, quantity: quantity }];
        });
        toast.success("Producto agregado al carrito", {
          // Changed from toast.success
          description: `${product.nombre} ha sido añadido.`,
        });
      }, 1000); // Simulate 1 second delay
    }
  };

  // Function to remove a product from the cart by its ID
  const removeFromCart = (productId) => {
    const productToRemove = cart.find((item) => item.id === productId);
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    if (productToRemove) {
      toast.success("Producto eliminado del carrito", {
        // Changed from toast.success
        description: `${productToRemove.nombre} ha sido eliminado.`,
      });
    } else {
      // Fallback if product name can't be found, though ideally this case shouldn't happen
      // if productToRemove is fetched from the cart state before filtering.
      toast.success("Producto eliminado del carrito"); // Changed from toast.success
    }
  };

  // Function to open the clear cart confirmation dialog
  const clearCart = () => {
    if (cart.length > 0) {
      setIsClearCartDialogOpen(true);
    } else {
      toast.info("El carrito ya está vacío.");
    }
  };

  // Function to execute the cart clearing action
  const executeClearCart = () => {
    setCart([]);
    toast.success("El carrito ha sido vaciado"); // Changed from toast.success
    setIsClearCartDialogOpen(false);
  };

  // Function to cancel the clear cart action
  const cancelClearCart = () => {
    setIsClearCartDialogOpen(false);
  };

  // Function to update the quantity of a product in the cart
  // - Ensures the new quantity does not exceed the product's stock
  const updateQuantity = (productId, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id === productId) {
          if (newQuantity > item.stock) {
            console.log(
              `No se puede actualizar la cantidad, excede el stock (${item.stock})`
            );
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
    return cart.reduce(
      (sum, item) => sum + item.precio * (item.quantity || 1),
      0
    );
  };

  // Function to get the total number of items in the cart
  const getCartItemsCount = () => {
    return cart.length;
  };

  // Provide the cart context to child components
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

// Custom hook to use the cart context
export const useCart = () => {
  return useContext(CartContext);
};
