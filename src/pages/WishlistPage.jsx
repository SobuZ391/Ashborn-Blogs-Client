// WishlistPage.js
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

import useAuth from '../Hooks/useAuth';
import WishlistItem from './WishListItem';

const WishlistPage = () => {
  const { user } = useAuth();
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const response = await axios.get(`https://server-khaki-zeta.vercel.app/wishlists`);
        setWishlist(response.data);
      } catch (error) {
        console.error('Failed to fetch wishlist:', error);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchWishlist();
    }
  }, [user]);


  const handleDelete = id => {
    // Display a confirmation dialog using SweetAlert
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      // If user confirms the deletion
      if (result.isConfirmed) {
        // Send a delete request to delete the wishlist item
        fetch(`https://server-khaki-zeta.vercel.app/wishlists/${id}`, {
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          // Show a success message using SweetAlert
          Swal.fire(
            'Deleted!',
            'Your wishlist item has been deleted.',
            'success'
          );
          const remaining =wishlist.filter(wishlistD=> wishlistD._id != id);
          setWishlist(remaining)
        })
        .catch(error => {
          // Show an error message using SweetAlert if deletion fails
          Swal.fire(
            'Error!',
            'An error occurred while deleting the wishlist item.',
            'error'
          );
          console.error("Error deleting wishlist item:", error.message);
        });
      }
    });
  };

  return (
    <section className="p-4 gap-10 container min-h-screen mx-auto">
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
              blogEmail={item.blogEmail}
              handleDelete={handleDelete}
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
