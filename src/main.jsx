import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Jobs from './Components/Jobs/Jobs';
import Blogs from './Components/Blogs/Blogs';
import Jobdetails from './Components/Jobdetails/Jobdetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children : [
      {
        path: "/",
        element : <Home></Home>
      },
      {
        path: "/jobs",
        element: <Jobs></Jobs>,
        loader : () => fetch('./jobs.json')
      },
      {
        path :"/blogs",
        element: <Blogs></Blogs>
      },
      {
        path : "/job/:id",
        element : <Jobdetails></Jobdetails>,
        loader : () => fetch('./jobs.json')
      }

    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
