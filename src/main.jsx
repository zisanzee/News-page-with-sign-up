import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  Link,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './components/Root.jsx';
import Home from './pages/Home.jsx';
import NewsHome from './pages/NewsHome/NewsHome.jsx';
import NewsCategoryBased from './pages/NewsHome/NewsCategoryBased.jsx';
import Details from './pages/Details.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import PrivateRoute from './pages/PrivateRoute';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    children: [
      {
        path: '/',
        element: <Home/>,
        children: [
          {
            path: '/',
            element: <NewsHome/>
          },
          {
            path: '/category/:id',
            element: <NewsCategoryBased/>
          },
          
          
        ]
      },
      {
        path: '/details/:id',
        element: <PrivateRoute><Details/></PrivateRoute>
      },
      {
        path: '/about',
        element: <div>
          <h1>about</h1>
          <Link to={'/'}>home</Link>
        </div>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/register',
        element: <Register/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router}/></AuthProvider>
  </React.StrictMode>,
)
