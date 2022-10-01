import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import isEmpty from "lodash/isEmpty";
import  "./cart.css"

export const Cart = () => {
  const { carrito, clear, removeItem, total } = useContext(CartContext);
  return (
    <>
      <div>
        {isEmpty(carrito) ? (
          <>
            <span>Carrito Vacio</span>
            <Link to="/">
              <Button className="volver">Volver a inicio</Button>
            </Link>
          </>
        ) : (
          <>
            <ol className="carrito">
              {carrito.map((items, indx) => (
                <li key={indx}>
                  {items?.titulo}
                  {items?.quantity}
                  {items.img}

                  <button className="remover"onClick={() => removeItem(items.id)}>
                    Remover Producto
                  </button>
                </li>
              ))}
            </ol>
            <h2> $ {total()}</h2>
            <Button className="vaciar"onClick={clear}>Vaciar el Carrito</Button>
            <Link to="/Checkout">
              <Button className="finalizar">Finalizar compra</Button>
            </Link>
          </>
        )}
      </div>
    </>
  );
};
