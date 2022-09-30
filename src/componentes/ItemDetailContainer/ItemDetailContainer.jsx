import React, { useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import db from "../../Firebase/firebaseConfig";
import {COLLECTION_TE} from "../../constants";

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const getProductos = async () => {
      setLoading(true);
      const dbItem = await getDoc(
        doc(db,COLLECTION_TE,id)
      );
      console.log('dbItem', dbItem);
      setItem({...dbItem.data(), id:dbItem.id});
      setLoading(false);
    };

    try {
      getProductos();
    } catch (error) {
      console.log("Error", error);
    }
  }, [id]);

  return (
    <>
      {isLoading ? 'Loading....' : <ItemDetail items={item} />}
    </>
  );
}
