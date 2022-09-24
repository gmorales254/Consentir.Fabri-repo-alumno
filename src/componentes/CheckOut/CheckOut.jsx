import React, { useState, useContext } from 'react'
import { CartContext } from '../Context/CartContext';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const CheckOut = () => {
    const {carrito, Total} = useContext(CartContext)
    const [nombre,setNombre] =useState(" ")
    const [telefono,setTelefono] =useState(" ")
    const [email,setEmail] =useState(" ")
 
    function handleClick() {
        const pedido ={
        buyer: {nombre:nombre,telefono:telefono, email:email},
       carrito: [
        {carrito, Total}
       ],

     }}

   return (
       <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label onChange={(e)=> setNombre(e.target.value) }   >{nombre}</Form.Label>
            <Form.Control type="nombre" placeholder="Ingrese Nombre" />
          </Form.Group>
           <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label onChange={(e)=> setEmail(e.target.value) } >{email}</Form.Label>
            <Form.Control type="email" placeholder="Ingrese Email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label onChange={(e)=> setTelefono(e.target.value) } >{telefono}</Form.Label>
            <Form.Control type="telefono" placeholder="Ingrese Telefono" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button onClick={handleClick}    variant="primary" type="submit">
            Comprar
          </Button>
        </Form>
      );
   }
  

