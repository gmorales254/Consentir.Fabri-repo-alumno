import React, { useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [items, setItems] = useState({});

  useEffect(() => {
    let productos = [
      {
        id: "1",
        titulo: "Te Rojo",
        price: "$360",
        stock: "100",
        img: "/assets/Imagenes/TE ROJO.png",
      },
      {
        id: "2",
        titulo: "TE NEGRO ROSAS",
        price: "$360",
        stock: "100",
        img: "/assets/Imagenes/TE NEGRO ROSAS.png",
      },
    ];
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos.find((element) =>element.id===id));
      }, 2000);
    }).then((data) => {
      setItems(data);
    })
  }, [id]);

  return (
    <>
     { Object.getOwnPropertyNames(items).length !== 0 && <ItemDetail  items={items} /> }
    </>
  );
}


