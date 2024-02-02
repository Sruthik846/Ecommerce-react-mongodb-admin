import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddProduct from './Components/AddProduct.jsx';
import ListProduct from './Components/ListProduct.jsx';
import PaidOrders from './Components/PaidOrders.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children :[
      {
        path:"/addproduct",
        element:<AddProduct/>
      },
      {
        path:"/listproduct",
        element:<ListProduct/>
      },
      {
        path:"/orederlists",
        element:<PaidOrders/>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
