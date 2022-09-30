import React, { useState, createContext } from "react";

export const CartContext = createContext({});

export function CartProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  function addItem(items, quantity) {
    if (isInCart(items.id)) {
      let aux = carrito;
      let itemsIndex = aux.findIndex((element) => element.id === items.id);
      aux[itemsIndex].quantity += quantity;

      setCarrito(...aux);
    } else {
      setCarrito([...carrito, { ...items, quantity }]);
    }
  }

  function clear() {
    setCarrito([]);
  };

  const total = () => {
    return carrito.reduce((pv, av) => pv + (av.price * av.quantity), 0);
  };

  function removeItem(id) {
    setCarrito(carrito.filter((element) => element.id !== id));
  };

  function isInCart(itemsId) {
    carrito.find((element) => element.id === itemsId);
  };

  return (
    <CartContext.Provider
      value={{ addItem, removeItem, clear, carrito, total }}
    >
      {children}
    </CartContext.Provider>
  );
}
