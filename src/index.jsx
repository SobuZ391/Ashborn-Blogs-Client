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
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import CategoryPosts from './pages/CategoryPosts';
import Dashboard from './pages/Dashboard';
import AuthorPosts from './pages/AuthorPosts/AuthorPosts';
import FirebaseProvider from './FirebaseProvider/FirebaseProvider';
import WishlistPage from './pages/WishlistPage';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import WishlistItem from './pages/WishListItem';
import PostEmail from './pages/PostEmail';
import AllBlogs from './pages/AllBlogs';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement:<ErrorPage/>,
    children:[{
      path:"/",
      element:<Home/>,
      
    },
    {
      path:"/posts/:id",
      element:<PostDetail></PostDetail>,
      loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/blog/${params.id}`)
    },
    {
      path:"allblogs",
      element:<AllBlogs></AllBlogs>
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
      path:"addBlog",
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
      path:"featured",
      element:<Dashboard/>
    },
    {
      path:"posts/:id/edit",
      element:<EditPost/>,
      loader:({params})=>fetch(`http://localhost:5000/blog/${params.id}`)
    },
    {
      path:"/wishlist",
      element:<PrivateRoute><WishlistPage/></PrivateRoute>,
     
    },
    {
      path:"/postEmail",
      element:<PostEmail></PostEmail>,
      loader:({params})=>fetch(`http://localhost:5000/blog/${params.id}`)
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
