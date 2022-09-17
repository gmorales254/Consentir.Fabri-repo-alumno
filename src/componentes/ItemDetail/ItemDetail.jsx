import React from 'react'
import { Button } from 'react-bootstrap';
import { useState, useContext} from 'react';
import ItemCount from '../ItemCount/ItemCount'
import {Link} from 'react-router-dom'
import { CartContext } from '../Context/CartContext';

const ItemDetail = ({items}) => {
    const {id, titulo , price , img} = items;
    const {addItem} =useContext(CartContext);
    const [counter,setcounter] = useState (0);
    function onAdd (quantity) {
        setcounter (quantity);

        addItem(items, quantity,);
    }
  return (
    <div className="container rem-4 rem-lg-5 mt-5">
      <div className="card h-100">
      <div className="text-center">
    <h1>{titulo} - {id}</h1>
    </div>
    <img variant="top"src={img} alt={""}></img>
    <h3>{price}</h3>
    {counter !==0 ?
    <Link to="/CartWidget"><Button>Finalizar compra</Button></Link>:
    <ItemCount inicial={1} stock={10} onAdd={onAdd} />
     }
     
     </div>
    </div>
  )
}

export default ItemDetail