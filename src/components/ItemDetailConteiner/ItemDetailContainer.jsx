// ItemDetailContainer.jsx

import { useEffect, useState } from "react";
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getProductById } from "../../firebase/firestore/products";
import classes from './ItemDetailContainer.module.css';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    getProductById(itemId)
      .then(response => {
        setProduct(response);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  if (loading) {
    return <h1>Cargando Producto</h1>;
  }

  if (!product) {
    return <h1>El producto no existe</h1>;
  }

  return (
    <main className={classes.container}>
      <h1>Detalle del producto</h1>
      <ItemDetail {...product} />
    </main>
  );
};

export default ItemDetailContainer;
