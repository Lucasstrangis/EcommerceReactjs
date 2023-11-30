// Cart.jsx

import React from "react";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import classes from "./Cart.module.css";

const Cart = () => {
  const { cart, clearCart, getTotal } = useCart();

  return (
    <div className={classes.cartContainer}>
      <h1 className={classes.cartHeader}>Carrito de Compras</h1>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          <ul className={classes.cartItems}>
            {cart.map((product) => (
              <li key={product.id} className={classes.cartItem}>
                <span>{product.name}</span>
                <span>Precio: ${product.price}</span>
                <span>Cantidad: {product.quantity}</span>
                <span>Subtotal: ${product.price * product.quantity}</span>
              </li>
            ))}
          </ul>
          <p className={classes.cartTotal}>Total: ${getTotal()}</p>
          <div className={classes.cartButtons}>
            <button className={classes.clearCartButton} onClick={clearCart}>
              Limpiar Carrito
            </button>
            <Link to="/Checkout" className={classes.checkoutLink}>
              Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
