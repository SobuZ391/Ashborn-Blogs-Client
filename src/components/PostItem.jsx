import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const PostItem = ({ postId, thumbnail, title, category, shortDescription, longDescription, addToWishlist}) => {
  
  
  const handleAddToWishlist = () => {
    addToWishlist(postId); // Call addToWishlist function with postId as parameter
  };

  return (
    <article className='w-[100%]  lg:w-[80%]  my-4 hover:shadow-md bg-slate-50 p-2 rounded-2xl border-y-2  pb-2 translate-x-0 cursor-default'>
      <div>
        <img className='rounded-xl h-[16rem]  overflow-hidden ' src={thumbnail} alt='' />
      </div>
      <div className='mt-4'>
        <Link>
          <h3 className='m-1 text-xl font-bold'>{title}</h3>
        </Link>
        <p className='text-gray-600 font-medium m-2'>{shortDescription}</p>

        <div className='mt-4  '>
          <div className='border-b border-dashed '></div>

          <div className='flex my-2 justify-evenly '>
            <Button variant='outlined' onClick={handleAddToWishlist}>
              { 'Add to Wishlist'}
            </Button>
            <Button variant='outlined'>
              <Link to={`/posts/${postId}`}>Details</Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostItem;
