import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Layout from './components/Layout';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
import Register from './Shared/Register';
import Login from './Shared/Login';
import UserProfile from './pages/UserProfile';
import Authors from './pages/Authors';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import CategoryPosts from './pages/CategoryPosts';
import Dashboard from './pages/Dashboard';
import AuthorPosts from './pages/AuthorPosts/AuthorPosts';
import FirebaseProvider from './FirebaseProvider/FirebaseProvider';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement:<ErrorPage/>,
    children:[{
      path:"/",
      element:<Home/>
    },
    {
      path:"/posts/:id",
      element:<PostDetail></PostDetail>
    },
    {
      path:"register",
      element:<Register/>
    },
  
    {
      path:"login",
      element:<Login/>
    },
   
    {
      path:"profile/:id",
      element:<UserProfile/>
    },
    {
      path:"authors",
      element:<Authors/>
    },
    {
      path:"create",
      element:<CreatePost/>
    },
    {
      path:`posts/categories/:category`,
      element:<CategoryPosts/>
    },
    {
      path:"posts/user/:id",
      element:<AuthorPosts/>
    },
    {
      path:"myposts/:id",
      element:<Dashboard/>
    },
    {
      path:"posts/:id/edit",
      element:<EditPost/>
    }
   
  
  
  ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <FirebaseProvider>
  <RouterProvider router={router}/>
  </FirebaseProvider>
</React.StrictMode>,
)
