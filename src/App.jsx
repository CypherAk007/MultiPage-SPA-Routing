import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import HomePage from "./pages/Home"
import ProductsPage from "./pages/Products"
import RouteLayout from "./components/RouteLayout"
import ErrorPage from "./pages/Error"

// **** Prefered ****
const router = createBrowserRouter([
  {path:'/',element:<RouteLayout></RouteLayout>,
  errorElement:<ErrorPage></ErrorPage>,
  children:[

    {path:'/',element:<HomePage></HomePage>},
    {path:'/products',element:<ProductsPage></ProductsPage>},
  ]}
  // {path:'',},
])

// ------Aternative(OLD Method)------

//  const routeDefinations = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage></HomePage>}/>
//     <Route path="/products" element={<ProductsPage></ProductsPage>}/>
//   </Route>

// )

// const router = createBrowserRouter(routeDefinations)


const App = ()=>{
  return (
    <div className=" ">
      <div>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  )
} 

export default App 