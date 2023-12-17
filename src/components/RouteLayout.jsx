import { Outlet } from "react-router-dom"
import MainNavigation from "./MainNavigation"

const RouteLayout = ()=>{
    return (
        <>
            <MainNavigation></MainNavigation>
            <Outlet></Outlet>
        </>
    )
}

export default RouteLayout