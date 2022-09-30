import React, { useState, useContext } from "react";
import { CartContext } from "../Context/CartContext";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { addDoc, collection } from "firebase/firestore";
import db from "../../Firebase/firebaseConfig";
import {COLLECTION_PEDIDOS} from "../../constants";

export const CheckOut = () => {
  const { carrito, total } = useContext(CartContext);
  const [nombre, setNombre] = useState(" ");
  const [apellido, setApellido] = useState(" ");
  const [telefono, setTelefono] = useState(" ");
  const [email, setEmail] = useState(" ");

  const handleClick = (e) => {
    e.preventDefault();
    const totalShop = total();
    const pedido = {
      buyer: { nombre, apellido, telefono, email },
      carrito,
      totalShop
    };

    try {
      addDoc(collection(db, COLLECTION_PEDIDOS), pedido).then((data) => console.log('DATA', data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="nombre">
        <Form.Control
          type="nombre"
          placeholder="Ingrese Nombre"
          onChange={(e) => setNombre(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="apellido">
        <Form.Control
          type="apellido"
          placeholder="Ingrese Apellido"
          onChange={(e) => setApellido(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="email">
        <Form.Control
          type="email"
          placeholder="Ingrese Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="telefono">
        <Form.Control
          type="telefono"
          placeholder="Ingrese Telefono"
          onChange={(e) => setTelefono(e.target.value)}
        />
      </Form.Group>

      <Button onClick={handleClick} variant="primary" type="submit">
        Comprar
      </Button>
    </Form>
  );
};
