import { Link } from "react-router-dom"

const MainNavigation = ()=>{
    return (
        <header className={` bg-slate-800  min-w-5xl m-auto p-8 flex justify-center text-2xl`}>
            <nav className="">
                <ul className="flex gap-8 ">
                    <li className=" decoration-solid  text-green-600">
                        <Link to='/'>Home</Link>
                    </li>
                    <li className=" decoration-solid  text-green-600">
                        <Link to='/products'>Products</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation