import { Link } from "react-router-dom";

const HomePage = ()=>{
    return(
        <>
        <div>Home Page</div>
        <p>
            Goto <Link to='/products'>The List of Products</Link>
            </p>
        </>
    )
}

export default HomePage;