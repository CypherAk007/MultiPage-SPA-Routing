import { Link, NavLink } from "react-router-dom"
import classes from './MainNavigation.module.scss'
const MainNavigation = ()=>{
    return (
        <header className={` bg-slate-800  min-w-5xl m-auto p-8 flex justify-center text-2xl`}>
            <nav className="">
                <ul className={`flex gap-8 ${classes.list}`}>
                    <li className=" decoration-solid  text-green-600">
                    <NavLink to='/' className={({isActive})=>isActive?classes.active:undefined} end>Home</NavLink>
                    </li>
                    <li className=" decoration-solid  text-green-600">
                        <NavLink to='/products' className={({isActive})=>isActive?'text-white underline':undefined}>Products</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation