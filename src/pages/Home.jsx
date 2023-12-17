import { Link, useNavigate } from "react-router-dom";

const HomePage = ()=>{
    const navigate = useNavigate()
    const navigateHandler = ()=>{
        navigate('/products')
    }
    return(
        <div  className="">
        <div className="text-5xl">Home Page</div>
        {/* <p>
            Goto <Link to='/products'>The List of Products</Link>
            </p> */}
        <button  className='text-2xl bg-black text-white px-4 py-2 my-8' onClick={navigateHandler}>Navigate</button>
        </div>
    )
}

export default HomePage;