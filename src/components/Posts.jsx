import React, { useEffect, useState } from "react";
import axios from "axios";
import PostItem from "./PostItem";
import useAuth from "../Hooks/useAuth";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion"

const Posts = () => {
  // const [blogs, setBlogs] = useState([]);

  const {isPending,data:blogs}=useQuery({
    queryKey:['blogs'],
    queryFn:async()=>{
      const res =await fetch('http://localhost:5000/blogs')
      return res.json();
    }
  })
 

if(isPending){
  return (
    <div className="container mx-auto flex justify-center items-center">
      <span className="loading loading-bars loading-lg"></span>
    </div>
  )

}
  const addToWishlist = async (blog) => {
    try {
      // Fetch current wishlist from the server
      const response = await axios.get('http://localhost:5000/wishlists');
      const wishlist = response.data;
      
      // Check if the blog post is already in the wishlist
      const isInWishlist = wishlist.some(item => item._id === blog._id);
  
      if (isInWishlist) {
        // Show a popup message indicating that the post is already in the wishlist
        Swal.fire({
          title: 'Warning!',
          text: 'This blog post is already in your wishlist',
          icon: 'warning',
          confirmButtonText: 'OK'
        });
        return;
      }
      
      // If the blog post is not already in the wishlist, add it
      const { displayName, email, _id, title, category, image_url, short_description } = blog;
      await axios.post(`http://localhost:5000/wishlists`, { displayName, email, _id, title, category, image_url, short_description });
      console.log("Blog post added to wishlist successfully");
    } catch (error) {
      console.error("Failed to add blog post to wishlist:", error);
    }
  };
  return (
    <section className="p-4 gap-10 container mx-auto">
    
  

      {blogs?.length > 0 ? (
        <div className="posts_container grid lg:grid-cols-3">
          {blogs.slice(0, 6).map((blog) => ( // Limit to first 6 blogs
            <PostItem
              key={blog._id}
              postId={blog._id}
              thumbnail={blog.image_url}
              title={blog.title}
              category={blog.category}
              shortDescription={blog.short_description}
              longDescription={blog.long_description}
              addToWishlist={() => addToWishlist(blog)} // Pass blog as parameter
            />
          ))}
        </div>
      ) : (
        <h1 className="text-3xl font-bold text-center">No posts found</h1>
      )}
    </section>
  );
};

export default Posts;
