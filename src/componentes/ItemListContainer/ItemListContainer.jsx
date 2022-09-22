import React from 'react';
import {useState, useEffect  } from 'react';
import ItemList from '../ItemList/ItemList'
import Spinner from 'react-bootstrap/Spinner';

 function ItemListContainer() {
  const [item, setItem] = useState ([]);
  const [isLoading, setIsLoading] = useState (true);


  ///////CONSUMIR API////////////////////////////////
  // const obtnerDatos = async () => {
  //   try {
  //    const res = await fetch("https://pokeapi.co/api/v2/pokemon")
  //   let dato= await res.json();
  //    console.log(dato.results)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  

  // useEffect(() => {
  //   obtnerDatos()
  //      fetch("https://pokeapi.co/api/v2/pokemon").then((res) =>  res.json()).then((res) => console.log(res.results))
  //    },[])
  

     //////////PRODUCTOS////////
  useEffect(()=> {
  let productos = [
    {
      id: "1",
      titulo: "Te Rojo",
      price: "360",
      stock: "100",
      img: "/assets/Imagenes/TE ROJO.png",
    },
    {
      id: "2",
      titulo: "Te Negro Rosas",
      price: "360",
      stock: "100",
      img: "/assets/Imagenes/TE NEGRO ROSAS.png",
    },
  ];
  new Promise((resolve,) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  })
    .then((data) => {
      setItem(data);
    })
    .catch()
    .finally(() => setIsLoading(false));
},[])

   return (
    <div>
      {isLoading && <Spinner animation="grow 2000 ms" />}
      <ItemList items={item}/> 
      
      </div>
  )
  }

  


   

export default ItemListContainer