import React, {useContext} from 'react'
import { CartContext } from '../Context/CartContext';

export const Cartwidget = () => {
  const {item} = useContext(CartContext)
  return (
    <>

    {!item && <span>Carrito Vacio</span>}
        {item.lenght && <ol>
        {item.map(((items,indx)=><li key={indx}>{items.titulo} - {items.count}</li>))}
      </ol>}
    
      
     
   
  </>
  )
}
