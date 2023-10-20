import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './pages/Home/Home.jsx'
import Contact from './pages/Contact/Contact.jsx';
import Login from './pages/Login/Login.jsx'
import Register from './pages/Register/Register.jsx'
import AddProducts from './PrivateRoute/AddProducts/AddProducts.jsx';
import ProductDetails from './pages/Products/ProductDetails/ProductDetails.jsx';
import Store from './pages/Stores/Store.jsx';
import Error from './components/Error/Error.jsx';
import Cart from './components/Cart/Cart.jsx';
// import DeleteProducts from './PrivateRoute/DeleteProducts/DeleteProducts.jsx';
// import UpdateProducts from './PrivateRoute/UpdateProducts/UpdateProducts.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "/",
        element: <Home/>,
        loader: () => fetch('http://localhost:5000/products').then(res => res.json()),
      },
      { 
        path: "/error", 
        element: <Error/>
      },
      { 
        path: "/cart-page", 
        element: <Cart/>
      },
      { 
        path: "/contact", 
        element: <Contact/>
      },
      { 
        path: "/stores", 
        element: <Store/>
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
        path: "/products/:id",
        element: <ProductDetails/>,
        loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`).then(res => res.json()),
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
      //   loader: () => fetch('http://localhost:5000/products').then(res => res.json()),
      // }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
