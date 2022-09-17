import React, {useContext} from 'react'
import { Button } from 'react-bootstrap';
import { CartContext } from '../Context/CartContext';


export const Cartwidget = () => {
  const {carrito, clear,total} = useContext(CartContext)
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
          <h2>Total:${total}</h2>
      </ol>}
    </div>
    <Button onClick={clear}>Vaciar el Carrito</Button>
    
  </>
  )
}
