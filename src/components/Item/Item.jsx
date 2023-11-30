// Item.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Item.module.css';

const Item = ({ id, name, img, price }) => {
  return (
    <div className={classes.itemContainer}>
      <h1 className={classes.itemTitle}>{name}</h1>
      <img src={img} alt={name} className={classes.itemImage} />
      <h2 className={classes.itemPrice}>${price}</h2>
      <Link to={`/item/${id}`} className={classes.itemLink}>
        Ver detalle
      </Link>
    </div>
  );
};

export default Item;
