import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './pages/Home/Home.jsx'
import Login from './pages/Login/Login.jsx'
import Register from './pages/Register/Register.jsx'
import AddProducts from './PrivateRoute/AddProducts/AddProducts.jsx';
import ProductDetails from './pages/Products/ProductDetails/ProductDetails.jsx';
// import UpdateProducts from './PrivateRoute/UpdateProducts/UpdateProducts.jsx';
// import DeleteProducts from './PrivateRoute/DeleteProducts/DeleteProducts.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      { 
        path: "/login", 
        element: <Login/>
      },
      {
        path: "/register",
        element: <Register/>,
      },
      {
        path: "/product-details",
        element: <ProductDetails/>,
      },
     
      {
        path: "/add-products",
        element: <AddProducts/>,
      },
      // {
      //   path: "/update-products",
      //   element: <UpdateProducts/>,
      // },
      // {
      //   path: "/delete-products",
      //   element: <DeleteProducts/>,
      // }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
