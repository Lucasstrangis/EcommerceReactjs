// NavBar.jsx

import React from 'react';
import classes from "./NavBar.module.css";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={classes.nav}>
      <NavLink to="/" className={classes.brand}>Papelera King</NavLink>
      <section className={classes.navLinks}>
        <NavLink to="/category/Bolsas" className={classes.navLink}>Bolsas</NavLink>
        <NavLink to="/category/Bandejas" className={classes.navLink}>Bandejas</NavLink>
        <NavLink to="/category/Papeles" className={classes.navLink}>Papeles</NavLink>
      </section>
      <div className={classes.cartSection}>
        <CartWidget />
      </div>
    </nav>
  );
}

export default NavBar;
