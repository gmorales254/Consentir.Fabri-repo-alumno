import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import isEmpty from "lodash/isEmpty";

export const Cart = () => {
  const { carrito, clear, removeItem, total } = useContext(CartContext);
  return (
    <>
      <div>
        {isEmpty(carrito) ? (
          <>
            <span>Carrito Vacio</span>
            <Link to="/">
              <Button>Volver a inicio</Button>
            </Link>
          </>
        ) : (
          <>
            <ol>
              {carrito.map((items, indx) => (
                <li key={indx}>
                  {items?.titulo}
                  {items?.quantity}

                  <Button onClick={() => removeItem(items.id)}>
                    Remover Producto
                  </Button>
                </li>
              ))}
            </ol>
            <h2> $ {total()}</h2>
            <Button onClick={clear}>Vaciar el Carrito</Button>
            <Link to="/Checkout">
              <Button>Finalizar compra</Button>
            </Link>
          </>
        )}
      </div>
    </>
  );
};
