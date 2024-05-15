import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="banner container mx-auto rounded-xl  bg-gradient-to-r from-gray-900 to-cyan-900 text-white flex items-center justify-center">
  <div className=" mx-auto px-8 py-16">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div>
        <h1 className="text-3xl lg:text-5xl font-bold leading-tight">Explore the Latest Blog Posts</h1>
        <p className="mt-4 text-lg">Discover insightful articles, tips, and stories written by passionate writers.</p>
        <Link to='/allblogs' className="mt-6 inline-block px-6 py-3 rounded-lg bg-white text-blue-700 font-bold hover:bg-blue-700 hover:text-white transition duration-300">Browse Blogs</Link>
      </div>
      <img src="https://www.ascian.in/creatives/wp-content/uploads/blog.jpg" alt="Banner Image" className="w-full rounded-lg h-full  shadow-lg" />
    </div>
  </div>
</div>

    );
};

export default Banner;