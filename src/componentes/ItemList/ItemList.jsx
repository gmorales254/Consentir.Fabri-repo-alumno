import React from 'react'
import Item from '../Item/Item';

const ItemList = ({ items}) => {
  return (
    <div className="d-flex flex-row m-3 pb-3 ">
      {items.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          titulo={item.titulo}
          price={item.price}
          stock={item.stock}
          img={item.img}
        />
      ))}
    </div>
  );
};

export default ItemList;