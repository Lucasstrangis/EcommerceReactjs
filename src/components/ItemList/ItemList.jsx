// ItemList.jsx

import React from 'react';
import Item from '../Item/Item';
import classes from './ItemList.module.css';

const ItemList = ({ products }) => {
  return (
    <div className={classes.productList}>
      {products.map((prod) => (
        <Item key={prod.id} {...prod} />
      ))}
    </div>
  );
};

export default ItemList;
