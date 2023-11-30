import { useState, createContext, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (productToAdd) => {
    if (!isInCart(productToAdd.id)) {
      setCart((prev) => [...prev, productToAdd]);
    } else {
      console.log("el producto ya esta agregado");
    }
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const removeItem = (id) => {
    const cartUpdated = cart.filter((prod) => prod.id !== id);
    setCart(cartUpdated);
  };

  const getTotalQuantity = () => {
    let totalQuantity = 0;

    cart.forEach((prod) => {
      totalQuantity += prod.quantity;
    });

    return totalQuantity;
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotal = () => {
    let total = 0;

    cart.forEach((prod) => {
      total += prod.price * prod.quantity;
    });

    return total;
  };
  
  return (
    <CartContext.Provider value={{ cart, addItem, clearCart, removeItem, isInCart, getTotalQuantity, getTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
