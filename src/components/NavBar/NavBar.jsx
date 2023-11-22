import CartWidget from "../CartWidget/CartWidget"
import { NavLink } from "react-router-dom"

const NavBar = () => {
    return(
    <nav>
        <h1>Papelera King</h1>
        <section>
            <NavLink to="/category/Bolsas">Bolsas</NavLink>
            <NavLink to="/category/Bandejas">Bandejas</NavLink>
            <NavLink to="/category/Papeles">Papeles</NavLink>
            <CartWidget />
        </section>
    </nav>
    )
}

export default  NavBar