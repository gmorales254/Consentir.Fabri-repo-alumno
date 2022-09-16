import { clear } from '@testing-library/user-event/dist/clear';
import React, {useContext} from 'react'
import { Button } from 'react-bootstrap';
import { CartContext } from '../Context/CartContext';


export const Cartwidget = () => {
  const {carrito} = useContext(CartContext)
  return (
   <>
   <div>
     {!carrito && <span>Carrito Vacio</span>}
        {carrito.lenght && <ol>
        {carrito.map(((items,indx)=><li key={indx}>{items?.titulo} - {items?.quantity}</li>))}
      </ol>}
    </div>
    <Button onClick={clear}>Vaciar el Carrito</Button>
    
  </>
  )
}
