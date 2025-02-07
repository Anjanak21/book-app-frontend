import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Register from "../components/Register";
import Login from "../components/Login";
import CartPage from "../pages/Books/CartPage";
import Checkout from "../pages/Books/Checkout";
import SingleBooks from "../pages/Books/SingleBooks";
import PrivateRoute from "./privateRoute";
import OrderPage from "../pages/Books/OrderPage";
import AdminLogin from "../components/AdminLogin";
import AdminRoute from "./AdminRoute";
import DashboardLayout from "../pages/Dashboard/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import ManageBooks from "../pages/Dashboard/ManageBooks/ManageBooks";
import AddBook from "../pages/Dashboard/AddBook/AddBook";
import UpdateBook from "../pages/Dashboard/EditBook/UpdateBook";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[{
        path:"/",
        element:<Home/>,
      },
      {
    path:"/order",
    element:<PrivateRoute><OrderPage/></PrivateRoute>
},{
    path:"/about",
    element:<h1>About</h1>
}

    ,
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/register",
      element:<Register/>
    },
    {
      path:"/cart",
      element:<CartPage/>
    },
    {
      path:"/checkout",
      element:<PrivateRoute><Checkout/></PrivateRoute>},
    {
    path:"/books/:id",
    element:<SingleBooks/>}  ]
  }, 
  {
   path:"/admin",
   element:<AdminLogin/>
  },
    {
      path:"/dashboard",
      element:<AdminRoute>
        <DashboardLayout/>
      </AdminRoute>,
      children:[
        {
          path: "",
          element: <AdminRoute><Dashboard/></AdminRoute>
        },
        {
          path: "add-new-book",
          element: <AdminRoute>
            <AddBook/>
          </AdminRoute>
        },
        {
          path: "edit-book/:id",
          element: <AdminRoute>
            <UpdateBook/>
          </AdminRoute>
        },
        {
          path: "manage-books",
          element: <AdminRoute>
            <ManageBooks/>
          </AdminRoute>
        }
      ]
    
}
  ]);
  export default router;