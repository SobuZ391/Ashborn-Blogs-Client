import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import PostItem from "../components/PostItem";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const { user } = useAuth();
  const apiUrl = import.meta.env.VITE_API_URL; // Assuming you have environment variables set up

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${apiUrl}/blogs`);
      setBlogs(response.data);
      setFilteredBlogs(response.data);
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    }
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const filtered = blogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(searchTerm) ||
        blog.category.toLowerCase().includes(searchTerm)
    );
    setFilteredBlogs(filtered);
  };

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    const filtered = blogs.filter((blog) =>
      category ? blog.category === category : true
    );
    setFilteredBlogs(filtered);
  };

  const addToWishlist = async (blog) => {
    try {
      const { _id, title, category, image_url, short_description } = blog;
      await axios.post(`${apiUrl}/wishlists`, {
        userId: user.id,
        blogId: _id,
        title,
        category,
        image_url,
        short_description,
      });
      console.log("Blog post added to wishlist successfully");
    } catch (error) {
      console.error("Failed to add blog post to wishlist:", error);
    }
  };

  return (
    <section className="p-4 gap-10 container mx-auto">
      <div className="flex  justify-between items-center mb-4">
       
        <input
          type="text"
          placeholder="Search by title or category"
          value={searchTerm}
          onChange={handleSearch}
          className="p-2 border input-bordered rounded-md w-[80%]"
        />
        <select
          value={selectedCategory}
          onChange={(e) => handleCategoryFilter(e.target.value)}
          className="p-2 border rounded-md"
        >
          <option value="">All Categories</option>
          <option value="Photography">Photography</option>
          <option value="Lifestyle">Lifestyle</option>
          <option value="Food & Cooking">Food & Cooking</option>
          <option value="Technology">Technology</option>
          <option value="Wellness">Wellness</option>
          <option value="Fashion & Beauty">Fashion & Beauty</option>
          <option value="Agriculture">Agriculture</option>
          <option value="Business">Business</option>
          <option value="Education">Education</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Art">Art</option>
          <option value="Investment">Investment</option>
          <option value="Uncategorized">Uncategorized</option>
          <option value="Weather">Weather</option>
        </select>
      </div>
      {filteredBlogs.length > 0 ? (
        <div className="posts_container grid lg:grid-cols-3">
          {filteredBlogs.map((blog) => (
            <PostItem
              key={blog._id}
              postId={blog._id}
              thumbnail={blog.image_url}
              title={blog.title}
              category={blog.category}
              shortDescription={blog.short_description}
              longDescription={blog.long_description}
              addToWishlist={() => addToWishlist(blog)}
            />
          ))}
        </div>
      ) : (
        <h1 className="text-3xl font-bold text-center">No posts found</h1>
      )}
    </section>
  );
};

export default AllBlogs;
