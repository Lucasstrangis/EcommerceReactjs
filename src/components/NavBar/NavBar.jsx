import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return(
    <nav>
        <h1>Papelera King</h1>
        <section>
            <button>Bolsas</button>
            <button>Bandejas</button>
            <button>Papeles</button>
            <CartWidget />
        </section>
    </nav>
    )
}

export default  NavBar