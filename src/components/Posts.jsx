import { useState } from 'react';

import PostItem from './PostItem';

import DUMMY_POSTS from '../data';

const Posts = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS);
  
  return (
    <section className='  p-4 gap-10 container mx-auto  ' >
     {posts.length > 0 ?  <div className=' posts_container grid lg:grid-cols-3 ' >

      {posts.map(post => (
        <PostItem
          key={post.id}
          postId={post.id}
          thumbnail={post.thumbnail}
          title={post.title}
          category={post.category}
          description={post.desc}
          authorID={post.authorID}
        />
      ))}   </div> : <h1 className=' text-3xl font-bold text-center  ' >No  posts founds</h1> }
    </section>
  );
};

export default Posts;
