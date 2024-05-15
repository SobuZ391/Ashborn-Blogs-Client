import { useState, useEffect } from 'react';
import useAuth from './../Hooks/useAuth';

const PostEmail = ({ blogId, blogEmail }) => {
  const { user } = useAuth(); // Get authentication information

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState('');
  const [text, setText] = useState('');

  useEffect(() => {
    // Update name, email, and image if user is authenticated
    if (user) {
      setName(user.displayName || '');
      setEmail(user.email || '');
      setImage(user.photoURL || '');
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if user can comment based on email
    if (email === blogEmail) {
      alert('Sorry, you cannot comment in your own blog.');
      return;
    }

    // Simulating API call to submit comment data
    fetch('https://server-khaki-zeta.vercel.app/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ blogId, name, email, image, text }),
    })
      .then(response => {
        if (response.ok) {
          console.log('Comment submitted successfully!');
          setName('');
          setEmail('');
          setImage('');
          setText('');
        } else {
          console.error('Failed to submit comment');
        }
      })
      .catch(error => {
        console.error('Error submitting comment:', error);
      });
  };

  return (
    <div className='container mx-auto  bg-white rounded-xl border-2 p-4'>
      <h3 className='text-xl font-semibold' >Add Comment</h3>
      <form onSubmit={handleSubmit} className="comment-form flex flex-col my-2">
  
        <textarea className=' border-2 rounded-xl my-2 p-4' placeholder="Your Comment" cols={10} rows={5}  value={text} onChange={(e) => setText(e.target.value)} />
        <button className='btn btn-success' type="submit">Add Comment</button>
      </form>
    </div>
  );
};

export default PostEmail;
