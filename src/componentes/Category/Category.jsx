import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { getDocs, collection, query, where } from "firebase/firestore";
import db from "../../Firebase/firebaseConfig";
import { COLLECTION_TE, CATEGORY } from "../../constants";
import Spinner from "react-bootstrap/Spinner";

export const Category = () => {
  const { idCategory } = useParams();
  const [item, setItem] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const collectionRef = collection(db, COLLECTION_TE);
    const whereRef = where(CATEGORY, "==", idCategory);
    const queryRef = query(collectionRef, whereRef);

    const getProductos = async () => {
      setLoading(true);
      const querySnapshot = await getDocs(queryRef);
      const productos = [];
      querySnapshot.forEach((doc) => {
        productos.push({...doc.data(), id: doc.id});
      });

      console.log("productos", productos);

      setItem(productos);
      setLoading(false);
    };

    try {
      getProductos();
    } catch (error) {
      console.log("Error", error);
    }
  }, [idCategory]);

  return (
    <>
      <div>Category - {idCategory}</div>
      <div>
        {isLoading && <Spinner animation="grow 2000 ms" />}
        <ItemList items={item} />
      </div>
    </>
  );
};
