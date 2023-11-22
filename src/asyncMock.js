const products = [ 
{
    id: "1",
    name: "Bolsa camiseta 30x40",
    price: "300",
    category: "Bolsas",
    img: "https://http2.mlstatic.com/D_NQ_NP_980368-MLA49635139228_042022-F.webp",
    stock: 10,
    description: "Bolsa camiseta 30x40 línea económica"
},
    {
    id: "2",
    name: "Bolsa camiseta 40x50",
    price: "790",
    category: "Bolsas",
    img: "https://http2.mlstatic.com/D_NQ_NP_718640-MLA47658000063_092021-O.webp",
    stock: 20,
    description: "Bolsa camiseta 40x50 línea reforzada"
},
    {
    id: "3",
    name: "Bandeja dorada 25CM",
    price: "250",
    category: "Bandejas",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtXH7F_U6Jly3KFk4hSy_PetgQ3r2vU3IP_Q&usqp=CAU",
    stock: 10,
    description: "Bandeja dorada para tortas"
},
    {
    id: "4",
    name: "Bandeja de aluminio",
    price: "200",
    category: "Bandejas",
    img: "https://i0.wp.com/libreriaflash.com.ar/wp-content/uploads/2021/03/bandeja-aluminio-f100.jpg?fit=1701%2C1701&ssl=1",
    stock: 20,
    description: "Bandeja de aluminio para horno"
},  
    {
    id: "5",
    name: "Papel diario x1KG",
    price: "1180",
    category: "Papeles",
    img: "https://http2.mlstatic.com/D_NQ_NP_933101-MLA70532207422_072023-O.webp",
    stock: 10,
    description: "Papel diario para envolver fiambre, facturas, entre otras cosas"
},
    {
    id: "6",
    name: "Láminas separadoras x1KG",
    price: "2350",
    category: "Papeles",
    img: "https://http2.mlstatic.com/D_NQ_NP_761559-MLA44887262637_022021-F.webp",
    stock: 20,
    description: "Separador de fiambre, hamburguesas, facturas"
},
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(products)
    }, 1000)
    })
}
    
export const getProductsById = (id => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id == id))
        }, 500)
    })
})

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category == categoryId))
        }, 500)
    })
}

