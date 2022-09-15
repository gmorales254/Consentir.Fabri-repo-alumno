import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';


const ItemCount = ({stock, inicial= 1, onAdd}) => {
const[itemCount,setItemCount] = useState(0)


  return (
    <>
   
    <Button variant="secondary" onClick={()=>setItemCount(itemCount + 1)} disabled={itemCount === stock}>+</Button>
    <span>{itemCount}</span>
    <Button onClick={()=>setItemCount(itemCount - 1)} disabled={itemCount <= inicial}>-</Button>
    <Button variant="success" onClick={()=>onAdd(itemCount)} disabled={itemCount < 1}>Agregar al carrito</Button>
    </>

  )
}

export default ItemCount