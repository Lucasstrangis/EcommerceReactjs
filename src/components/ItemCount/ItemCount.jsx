import { useCount } from "../../hooks/useCount"

const ItemCount = ({ onAdd }) => {
    const { count, decrement, increment } = useCount(0)

    return (
        <>
            <h1>{count}</h1>
            <button onClick={decrement}>-</button>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
            <button onClick={increment}>+</button>
        </>
    )
}

export default ItemCount