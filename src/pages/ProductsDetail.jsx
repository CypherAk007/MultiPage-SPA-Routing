import { Link, useParams } from "react-router-dom"

const ProductsDetails = ()=>{
    const params = useParams()
    return <div>
        <h1>Product Details!!</h1>
        {/* from app.js routes defination {path:'/products/:*** productId ***',element:<ProductsDetails></ProductsDetails>} */}
        <p>{params.productId}</p>
        <Link to='..' relative="path">back</Link>
    </div>
}

export default ProductsDetails