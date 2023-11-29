import classes from "./NavBar.module.css"
import CartWidget from "../CartWidget/CartWidget"
import { NavLink } from "react-router-dom"


const NavBar = () => {
    return(
    <nav>
        <NavLink to="/">Papelera King</NavLink>
        <section>
            <NavLink to="/category/Bolsas" className={({ isActive}) => isActive ? classes.active : "" }>Bolsas</NavLink>
            <NavLink to="/category/Bandejas" className={({ isActive}) => isActive ? classes.active : "" }>Bandejas</NavLink>
            <NavLink to="/category/Papeles" className={({ isActive}) => isActive ? classes.active : "" }>Papeles</NavLink>
            <CartWidget />
        </section>
    </nav>
    )
}

export default  NavBar