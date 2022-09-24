import React from 'react';
import { getFirestore, collection, getDocs, query, where} from 'firebase/firestore'
import db from '../../Firebase/firebaseConfig';
import {useState, useEffect  } from 'react';
import ItemList from '../ItemList/ItemList'
import Spinner from 'react-bootstrap/Spinner';

 function ItemListContainer() {
  const [item, setItem] = useState ([]);
  const [isLoading, setIsLoading] = useState (true);



 //////////PRODUCTOS////////
  useEffect(()=> {
    const db = getFirestore ();
    const itemCollection = query(collection(db, 'productos'), where('category', '==', 'Recargas '));

    getDocs(itemCollection).then((res)=>{
      const auxArray = res.docs.map((item)=>({...item.data(), id: item.id}));
      setItem(auxArray)
    })
    .catch()
    .finally(() => setIsLoading(false));
  },[]);


  // let productos = [
  //   {
  //     id: "1",
  //     titulo: "Te Rojo",
  //     price: 360,
  //     stock: "100",
  //     img: "/assets/Imagenes/TE ROJO.png",
  //   },
  //   {
  //     id: "2",
  //     titulo: "Te Negro Rosas",
  //     price: 360,
  //     stock: "100",
  //     img: "/assets/Imagenes/TE NEGRO ROSAS.png",
  //   },
  // ];
  
//   new Promise((resolve,) => {
//     setTimeout(() => {
//       resolve(productos);
//     }, 2000);
//   })
//     .then((data) => {
//       setItem(data);
//     })
//     .catch()
//     .finally(() => setIsLoading(false));
// };[])

   return (
    <div>
      {isLoading && <Spinner animation="grow 2000 ms" />}
      <ItemList items={item}/> 
      
      </div>
  )
   
   }
  


   

export default ItemListContainer