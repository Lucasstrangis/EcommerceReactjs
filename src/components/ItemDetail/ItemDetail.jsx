// ItemDetail.jsx

import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { useNotification } from "../../Notification/NotificationContext";
import { Link } from "react-router-dom";
import classes from './ItemDetail.module.css';

const InputCount = ({ onAdd, stock, initial = 1 }) => {
  const [count, setCount] = useState(initial);

  const handleChange = (e) => {
    if (e.target.value <= stock) {
      setCount(e.target.value);
    }
  }

  return (
    <div>
      <input type='number' onChange={handleChange} value={count} />
      <button onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
  );
}

const ButtonCount = ({ onAdd, stock, initial = 1 }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  }

  const decrement = () => {
    setCount(count - 1);
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <button onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
  );
}

const ItemDetail = ({ id, name, category, img, price, stock, description }) => {
  const [inputType, setInputType] = useState('button');
  const ItemCount = inputType === 'button' ? ButtonCount : InputCount;

  const { addItem, isInCart } = useCart();
  const { setNotification } = useNotification();

  const handleOnAdd = (quantity) => {
    const productToAdd = {
      id, name, price, quantity
    }

    addItem(productToAdd);
    setNotification('error', `Se agregaron ${quantity} ${name}`);
  }

  return (
    <article className={classes.itemContainer}>
      <button onClick={() => setInputType(inputType === 'input' ? 'button' : 'input')}>
        Cambiar contador
      </button>
      <header>
        <h2>{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} className={classes.itemImage} />
      </picture>
      <section>
        <p>Categoria: {category}</p>
        <p>Descripción: {description}</p>
        <p>Precio: {price}</p>
      </section>
      <footer>
        {
          isInCart(id) ? (
            <Link to="/Cart">Finalizar Compra</Link>
          ) : (
            <ItemCount stock={stock} onAdd={handleOnAdd} />
          )
        }
      </footer>
    </article>
  );
}

export default ItemDetail;
