import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppLayout from "./ui/AppLayout"
import Home from "./ui/Home"
import ProductDetails from "./features/products/ProductDetails"
import Cart from "./features/cart/Cart"
import Error from "./ui/Error"
import CreateOrder from "./features/order/CreateOrder"
import { ProductsProvider } from "./features/products/ProductContext"
import Products from "./features/products/Products"
import { OrderProvider } from "./features/order/OrderContext"
import SearchProducts from "./features/products/SearchProducts"
import Login from "./features/userAccount/Login"
import Signup from "./features/userAccount/Signup"
import VerifyEmail from "./features/userAccount/VerifyEmail"

const router = createBrowserRouter([
  {
    element: <ProductsProvider>
          <AppLayout />
    </ProductsProvider>,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <Error />
      },
      {
        path: "/products",
        element: <Products />,
        errorElement: <Error/>
      },
      {
        path: "/products/:productId",
        element: <OrderProvider><ProductDetails /></OrderProvider>
      },
      {
        path: "/order",
        element: <CreateOrder />
      },
      {
        path: "/search",
        element: <SearchProducts />,
        errorElement: <Error />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signup",
        element: <Signup />
      },
      {
        path: "/verifyEmail",
        element: <VerifyEmail />
      },
    ]
  },
  
])

export default function App() {
  return (
      <RouterProvider router={router}/>
  )
}
