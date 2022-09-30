import React from 'react'
import { Button } from 'react-bootstrap';
import { useState, useContext} from 'react';
import ItemCount from '../ItemCount/ItemCount'
import {Link} from 'react-router-dom'
import { CartContext } from '../Context/CartContext';

const ItemDetail = ({items}) => {
    const {id ,titulo , price , img} = items;
    const {addItem} =useContext(CartContext);
    const [counter,setcounter] = useState (0);
    function onAdd (quantity) {
        setcounter (quantity);
      
        addItem(items, quantity,);
    }
  return (
    <div className="row featurette ">
      <div className="col-md-7 order-md-2 align-content-center flex-wrap ">
        <h2 className="featurette-heading">{titulo}-{id}</h2>
        <p className="lead">descripcion</p>
        <h3 className="fw-bold">${price}</h3>
        {counter !==0 ?
    <Link to="/Cart"><Button>Ir a carrito</Button></Link>:
    <ItemCount inicial={1} stock={10} onAdd={onAdd} />
     }
      </div>
      <div className="col-md-5 order-md-1">
      <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src={img}  aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
    </div>
    </div>
  )
}

export default ItemDetail