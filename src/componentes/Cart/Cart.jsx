import React, {useContext} from 'react'
import { Button } from 'react-bootstrap';
import { CartContext } from '../Context/CartContext';


export const Cart = () => {
  const {carrito, clear, removeItem, items} = useContext(CartContext)
  console.log(carrito)
  return (
   <>
   <div>
     {!carrito && <span>Carrito Vacio</span>}
        {carrito.length && <ol>
        {carrito.map((items,indx)=><li key={indx}>
          {items?.titulo} 
          {items?.quantity}
          </li>)}
      </ol>}
      <h2>Total = ${carrito.reduce((pv,cv)=>pv +(cv.price * cv.quantity),0)}</h2>
    </div>
    <Button onClick={clear}>Vaciar el Carrito</Button><Button onClick={()=>removeItem(items?.id)}>Remover Producto</Button>
    
  </>
  )
}
