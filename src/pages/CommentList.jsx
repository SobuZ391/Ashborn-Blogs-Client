import React, { useState, useEffect } from 'react';

const CommentList = ({ blogId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetch comments for the specific blog when the component mounts
    fetchComments();
  }, [blogId]);

  const fetchComments = async () => {
    try {
      const response = await fetch(`https://server-khaki-zeta.vercel.app/comments/${blogId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch comments');
      }
      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  return (
    <div className="comment-list lg:container mx-auto text-center w-full  rounded-xl border-2 my-2">
      <h3 className='text-xl font-bold ' >Comments</h3>
      <ul>
        {comments.map(comment => (
          <li className='my-2 mx-auto border rounded-xl bg-slate-300    lg:w-[50%] p-1'  key={comment._id}>
            <div className='flex items-center p-4 justify-center rounded-xl border' >
              <img  src={comment.image} alt="Profile" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
            <p className='mt-6' >  <strong  >{comment.name}</strong>: {comment.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
