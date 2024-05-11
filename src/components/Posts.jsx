import { useState } from 'react';
import Thumbnail1 from '../assets/blog1.jpg';
import Thumbnail2 from '../assets/blog2.jpg';
import Thumbnail3 from '../assets/blog3.jpg';
import Thumbnail4 from '../assets/blog4.jpg';
import PostItem from './PostItem';

const DUMMY_POSTS = [
  {
    id: 1,
    thumbnail: Thumbnail1,
    category: "Technology",
    title: "Introduction to Artificial Intelligence",
    desc: "Learn the basics of AI and its applications in various fields.",
    authorID: 1
  },
  {
    id: 2,
    thumbnail: Thumbnail2,
    category: "Cooking",
    title: "Italian Cuisine: Pasta and Pizza Recipes",
    desc: "Discover authentic recipes for pasta and pizza from Italy.",
    authorID: 2
  },
  {
    id: 3,
    thumbnail: Thumbnail3,
    category: "Travel",
    title: "Exploring Southeast Asia",
    desc: "A journey through the vibrant cultures and landscapes of Southeast Asia.",
    authorID: 3
  },
  {
    id: 4,
    thumbnail: Thumbnail4,
    category: "Fitness",
    title: "Yoga for Beginners",
    desc: "Learn the basic yoga poses and techniques for beginners.",
    authorID: 4
  }
];

const Posts = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS);
  
  return (
    <section className='  p-4 grid lg:grid-cols-3 gap-10 container mx-auto  ' >
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
      ))}
    </section>
  );
};

export default Posts;
