
import { useCart } from "../../context/CartContext";

const CartWidget = () => {
    const { totalQuantity } = useCart()

    return(
        <button>
            <img/>
            {totalQuantity}
        </button>
    )
}

export default CartWidget;