import React, {useContext} from 'react'
import { Button } from 'react-bootstrap';
import { CartContext } from '../Context/CartContext';


export const Cart = () => {
  const {carrito, clear, removeItem,Total} = useContext(CartContext)
  console.log(carrito)
  return (
   <>
   <div>
     {!carrito && <span>Carrito Vacio</span>}
        {carrito.length && <ol>
        {carrito.map((items,indx)=><li key={indx}>
          {items?.titulo} 
          {items?.quantity}
         
          <Button onClick={()=>removeItem(items.id)}>Remover Producto</Button>
          </li>)}
      </ol>}
      <h2> $ {Total}</h2>
    </div>
    <Button onClick={clear}>Vaciar el Carrito</Button>
    
  </>
  )
}
