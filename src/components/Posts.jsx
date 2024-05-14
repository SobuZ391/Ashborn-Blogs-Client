import React, { useEffect, useState } from "react";
import axios from "axios";
import PostItem from "./PostItem";
import useAuth from "../Hooks/useAuth";

const Posts = () => {
  const [blogs, setBlogs] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL; // Assuming you have environment variables set up
  const { user } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/blogs`);
        setBlogs(response.data);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      }
    };
    fetchData();
  }, [apiUrl]);

  const addToWishlist = async (blog) => {
    try {
      const { displayName, email, _id, title, category, image_url, short_description } = blog;
      await axios.post(`${apiUrl}/wishlists`, { displayName, email, _id, title, category, image_url, short_description });
      console.log("Blog post added to wishlist successfully");
    } catch (error) {
      console.error("Failed to add blog post to wishlist:", error);
    }
  };

  return (
    <section className="p-4 gap-10 container mx-auto">
      {blogs.length > 0 ? (
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
