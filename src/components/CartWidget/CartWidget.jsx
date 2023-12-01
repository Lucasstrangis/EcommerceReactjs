// CartWidget.jsx

import React from "react";
import cart from "./assets/cart.jpg";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import classes from "./CartWidget.module.css";

const CartWidget = () => {
  const { totalQuantity } = useCart();
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate("/cart")} className={classes.cartButton}>
      <img src={cart} alt="Cart" className={classes.cartIcon} />
      {totalQuantity > 0 && <span className={classes.cartQuantity}>{totalQuantity}</span>}
    </button>
  );
};

export default CartWidget;
