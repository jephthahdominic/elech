import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { AuthAppLayout, MarkettingAppLayout, OrderLayout } from "./ui/AppLayout"
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
import VerifyEmail, { VerificationSuccess } from "./features/userAccount/VerifyEmail"
import ProtectedRoutes from "./features/userAccount/ProtectedRoutes"

const router = createBrowserRouter([
  {
    element: (
      <ProductsProvider>
        <MarkettingAppLayout />
      </ProductsProvider>
    ),
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
        element: <ProtectedRoutes><CreateOrder /></ProtectedRoutes>
      },
      {
        path: "/search",
        element: <SearchProducts />,
        errorElement: <Error />
      },
    ]
  },

  //auth group
  
  {
    element: <AuthAppLayout />,
    errorElement: <Error />,
    children: [
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
        element: <ProtectedRoutes><VerifyEmail /></ProtectedRoutes>
      },
      {
        path: "/verifyEmail/success",
        element: <ProtectedRoutes><VerificationSuccess /></ProtectedRoutes>
      },
    ]
  },

  //order group

  {
    element: <OrderLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/cart",
        element: <ProtectedRoutes><Cart /></ProtectedRoutes>
      }
    ]
  }

])

export default function App() {
  return (
    <RouterProvider router={router}/>
  )
}
