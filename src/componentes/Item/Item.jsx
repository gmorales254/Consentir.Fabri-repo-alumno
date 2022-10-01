import React from 'react'
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Item({id, titulo, price, img }) {
  return (

    
    <div className="row row-cols-1 flex-wrap">
    <div className="col ">
    
      <div className="card">
        
        <img src={img} className="card-img-top"
          alt={titulo} />
          
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
          <p className="card-text">
          $ {price}
          </p>
          <Link to={`/item/${id}`}>
          <Button>Detalle</Button>
          </Link>
        </div>
      </div>
    </div>
    </div>
    
  );
}
  



export default Item