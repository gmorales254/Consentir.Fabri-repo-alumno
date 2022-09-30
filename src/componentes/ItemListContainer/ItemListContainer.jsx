import React from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../../Firebase/firebaseConfig";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";
import {COLLECTION_TE} from "../../constants";

function ItemListContainer() {
  const [item, setItem] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    const getProductos = async () => {
      setLoading(true);
      const querySnapshot = await getDocs(collection(db, COLLECTION_TE));
      const productos = [];
      querySnapshot.forEach((doc) => {
        productos.push(doc.data());
      });

      console.log('PRODUCTOS', productos);

      if (!category) {
        setItem(productos);
      } else {
        setItem(productos.filter((item) => item.id === category));
      }
      setLoading(false);
    };

    try {
      getProductos();
    } catch (error) {
      console.log("Error", error);
    }
  }, [category]);

  return (
    <>
      <div>
        {isLoading && <Spinner animation="grow 2000 ms" />}
        <ItemList items={item} />
      </div>
    </>
  );
}

export default ItemListContainer;
