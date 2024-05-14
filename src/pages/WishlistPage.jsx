import React, { useEffect, useState } from "react";
import axios from "axios";
import WishlistItem from './WishListItem';


const WishlistPage = () => {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiUrl = import.meta.env.VITE_API_URL;
  
  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const response = await axios.get(`${apiUrl}/wishlists`); 
        setWishlist(response.data)
      } catch (error) {
        console.error("Failed to fetch wishlist:", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchWishlist();
  }, [apiUrl]);



  return (
    <section className="p-4 gap-10 container mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">My Wishlist</h1>
      {loading ? (
        <p className="text-xl font-semibold text-center">Loading...</p>
      ) : wishlist.length > 0 ? (
        <div className="wishlist-container grid lg:grid-cols-3 gap-6">
          {wishlist.map((item) => (
            <WishlistItem
              key={item._id}
              postId={item._id}
              title={item.title}
              imageUrl={item.image_url}
              category={item.category}
              shortDescription={item.short_description}
            />
          ))}
        </div>
      ) : (
        <h2 className="text-xl font-semibold text-center">Your wishlist is empty</h2>
      )}
    </section>
  );
};

export default WishlistPage;