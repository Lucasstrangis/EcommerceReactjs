// Checkout.jsx

import React from "react";
import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { getDocs, collection, query, where, documentId, writeBatch, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import classes from "./Checkout.module.css";

// Nuevo componente OrderForm
const OrderForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email, phone });
  };

  return (
    <form onSubmit={handleSubmit} className={classes.orderForm}>
      <label>
        Nombre:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Teléfono:
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit" className={classes.orderButton}>
        Crear orden
      </button>
    </form>
  );
};

// Componente Checkout
const Checkout = () => {
  const [orderId, setOrderId] = useState("");
  const [loading, setLoading] = useState(false);
  const { cart, total, clearCart } = useCart();

  const createOrder = async (userData) => {
    try {
      setLoading(true);

      const objOrder = {
        buyer: {
          name: userData.name,
          email: userData.email,
          phone: userData.phone,
        },
        items: cart,
        total,
      };

      const batch = writeBatch(db);
      const outOfStock = [];

      const ids = cart.map((prod) => prod.id);

      const productsRef = query(collection(db, "products"), where(documentId(), "in", ids));

      const { docs } = await getDocs(productsRef);

      docs.forEach(async (documentSnapshot) => {
        const fields = documentSnapshot.data();
        const stockDb = fields.stock;

        const productAddedToCart = cart.find((prod) => prod.id === documentSnapshot.id);
        const prodQuantity = productAddedToCart.quantity;

        if (stockDb >= prodQuantity) {
          batch.update(documentSnapshot.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: documentSnapshot.id, ...fields });
        }
      });

      if (outOfStock.length === 0) {
        const ordersRef = collection(db, "orders");

        const { id } = await addDoc(ordersRef, objOrder);
        batch.commit();
        clearCart();
        setOrderId(id);
        console.log(`El id de su orden es ${id}`);
      } else {
        console.log("No hay stock de algun producto");
      }
    } catch (error) {
      console.error("Hubo un error generando la orden", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h1 className={classes.loadingMessage}>Estamos procesando su orden...</h1>;
  }

  if (orderId) {
    return <h1 className={classes.orderIdMessage}>El id de su orden es: {orderId}</h1>;
  }

  return (
    <div className={classes.checkoutContainer}>
      <h1 className={classes.checkoutHeader}>Checkout</h1>
      <OrderForm onSubmit={createOrder} />
    </div>
  );
};

export default Checkout;
