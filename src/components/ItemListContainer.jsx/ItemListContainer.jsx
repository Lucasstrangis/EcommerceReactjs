// ItemListContainer.jsx

import React from 'react';
import { useParams } from 'react-router-dom';
import { useAsync } from '../../hooks/useAsync';
import { getProducts } from '../../firebase/firestore/products';
import ItemList from '../ItemList/ItemList';
import classes from './ItemListContainer.module.css';

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();

  const asyncFunction = () => getProducts(categoryId);

  const { data: products, loading, error } = useAsync(asyncFunction, [categoryId]);

  if (loading) {
    return <h1 className={classes.loadingMessage}>Loading...</h1>;
  }

  if (error) {
    return <h1 className={classes.loadingMessage}>Hubo un error al cargar los productos</h1>;
  }

  if (products.length === 0) {
    return <h1 className={classes.loadingMessage}>No existen productos para esta categoría</h1>;
  }

  return (
    <div className={classes.container}>
      <h1>{greeting}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
