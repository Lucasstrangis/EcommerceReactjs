import React from "react"
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart, getTotal } = useCart();

  return (
    <div>
      <h1>Carrito de Compras</h1>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          <ul>
            {cart.map((product) => (
              <li key={product.id}>
                <span>{product.name}</span>
                <span>Precio: ${product.price}</span>
                <span>Cantidad: {product.quantity}</span>
                <span>Subtotal: ${product.price * product.quantity}</span>
              </li>
            ))}
          </ul>
          <p>Total: ${getTotal()}</p>
          <button onClick={clearCart}>Limpiar Carrito</button>
          <div>
          <Link to="/Checkout">Checkout</Link>
          </div>
        </div>
       
      )}
    </div>
  );
};

export default Cart;
