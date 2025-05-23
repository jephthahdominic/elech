import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { AuthAppLayout, MarkettingAppLayout, OrderLayout } from "./ui/AppLayout"
import Home from "./ui/Home"
import Cart from "./features/cart/Cart"
import Error from "./ui/Error"
import CreateOrder from "./features/order/CreateOrder"
import { ProductsProvider } from "./contexts/ProductContext"
import Products from "./features/products/Products"
import { OrderProvider } from "./features/order/OrderContext"
import SearchProducts from "./features/products/SearchProducts"
import Login from "./features/userAccount/Login"
import Signup from "./features/userAccount/Signup"
import VerifyEmail, { VerificationSuccess } from "./features/userAccount/VerifyEmail"
import ProtectedRoutes from "./features/userAccount/ProtectedRoutes"
import { SideBarProvider } from "./contexts/SidebarContext"
import Logout from "./features/userAccount/Logout"
import Product from "./features/products/Product"
import { UserProvider } from "./contexts/UserContext"
import Dashboard from "./features/dashboard/Dashboard"

const router = createBrowserRouter([
  {
    element: (
      <UserProvider>
        <SideBarProvider>
          <ProductsProvider>
            <MarkettingAppLayout />
          </ProductsProvider>
        </SideBarProvider>
      </UserProvider>
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
        element: <OrderProvider><Product /></OrderProvider>
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
      //admin dashboard
      {
        path: "/admin",
        element: <Dashboard />,
        children:[
          {
            path: "addProduct",
          }
        ]
      }
    ]
  },

  //auth group
  
  {
    element: ( 
      <AuthAppLayout />
    ),
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
      {
        path: "/logout",
        element: <Logout />,
      }
    ]
  },

  //order group

  {
    element:(
      <SideBarProvider>
        <OrderLayout />
      </SideBarProvider>
    ),
    errorElement: <Error />,
    children: [
      {
        path: "/cart",
        element: <ProtectedRoutes><Cart /></ProtectedRoutes>
      }
    ]
  },

])


export default function App() {
  return (
    <RouterProvider router={router}/>
  )
}
