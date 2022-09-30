import React from 'react'
import {Link} from 'react-router-dom';

function Item({ id, titulo, price, img }) {
  return (

    <div className="col-12 col-md-6 col-lg-4">
    <div className="cols-3">
      <div className="card">
        <Link to={`/item/${id}`}>
        <img src={img} className="card-img-top"
          alt={titulo} />
          </Link>
        <div className="card-body">
          <h5 className="card-title">{titulo}-{id}</h5>
          <p className="card-text">
          $ {price}
          </p>
        </div>
      </div>
    </div>
    </div>
    
    
  );
}
  



export default Item