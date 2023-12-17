import { Link } from "react-router-dom"

const PRODUCTS = [
    {
        id:'p1',title:'product1'
    },
    {
        id:'p2',title:'product2'
    },
    {
        id:'p3',title:'product3'
    },
]

const ProductsPage = ()=>{
    return <div>
            <h1 className="text-5xl">The Products Page</h1>
            <ul className="text-3xl my-8 text-green-500">
            {PRODUCTS.map((product)=>(<li key={product.id}>
                <Link to={`/products/${product.id}`}>{product.title}</Link>
            </li>))}

            </ul>
        </div>
}

export default ProductsPage