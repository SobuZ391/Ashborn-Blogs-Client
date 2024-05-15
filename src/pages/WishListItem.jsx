import React from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";


const WishlistItem = ({ postId, title, imageUrl, category, shortDescription,blogEmail,handleDelete }) => {


 
  return (
    <article className="w-[100%] lg:w-[80%] my-4 hover:shadow-md bg-slate-50 p-2 rounded-2xl border-y-2 pb-2 translate-x-0 cursor-default">
      <div>
        <img className="rounded-xl h-[16rem] overflow-hidden" src={imageUrl} alt="" />
      </div>
      <div className="mt-4">
        <div className="border-y-2 border-dashed my-4 rounded-lg">
          <p className="text-lg my-2 font-semibold">Category: {category}</p>
        </div>
        <h3 className="m-1 text-xl font-bold">{title}</h3>
        <p className="text-gray-600 font-medium m-2">{shortDescription}</p>
        <div className="mt-4">
          <div className="border-b border-dashed"></div>
          <div className="flex my-2 justify-evenly">
            <Button variant="outlined" color="error" onClick={() => handleDelete(postId)}>
              Delete
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

export default WishlistItem;
