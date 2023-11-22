import { Link } from "react-router-dom"

const Item = ({ id, name, img, price}) => {
    return (
        <div>
            <h1>{name}</h1>
            <img src={img} style={{widht: 100}}/>
            <h2>${price}</h2>
            <Link to ={`/item/${id}`}>Ver detalle</Link>
        </div>
    )
}

export default Item