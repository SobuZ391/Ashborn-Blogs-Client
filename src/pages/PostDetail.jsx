import { Link, useLoaderData } from "react-router-dom";
import { Button, Container } from "@mui/material";
import axios from "axios";
import PostEmail from "./PostEmail";
import CommentList from "./CommentList";
import useAuth from "../Hooks/useAuth";

const PostDetail = () => {
  
  const blog = useLoaderData();
 
  

  const handleDelete = async (id) => {
    const proceed = window.confirm("Are you sure you want to delete?");
    if (!proceed) return;

    try {
      const response = await axios.delete(`http://localhost:5000/blogs/${id}`);
      console.log(response.data);
  } catch (error) {
      console.error("Error deleting post:", error.message);
    }
  };
    console.log(blog.blogEmail);
  return (
    <section className="bg-gray-200">
      <Container
        maxWidth="md"
        className="post_detail_container py-6 bg-white pt-4 rounded-xl border-gray-600 border-y-2  mx-auto"
      >
        <div className="post_detail_header flex justify-end mb-2">
          <div className="post_detail_button flex gap-4">
            <Button variant="outlined">
              <Link to={`/posts/${blog._id}/edit`}>Edit</Link>
            </Button>

            <Button
              variant="outlined"
              color="error"
              onClick={() => handleDelete(blog._id)}
            >
              Delete
            </Button>
          </div>
        </div>
        <h1 className="text-5xl m-2 font-bold">{blog.title}</h1>
        <div className="m-2 h-fit">
          <img
            className="rounded-xl my-4 overflow-hidden object-contain lg:w-[45rem] w-[100%]"
            src={blog.image_url}
            alt=""
          />
        </div>
        <div className="w-[85%]">
          <div className="text-xl font-bold my-4">{blog.short_description}</div>
          <div className="container">{blog.long_description}</div>
        </div>
      </Container>
      <div>
      
     <div className="w-2/3 mx-auto">
     <CommentList blogId={blog._id} />
      <PostEmail blogId={blog._id} blogEmail={blog.blogEmail}  />
      
     </div>
    </div>
    </section>
  );
};

export default PostDetail;
