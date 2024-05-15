import { Link, Navigate, useLoaderData } from "react-router-dom";
import { Button, Container } from "@mui/material";
import axios from "axios";
import PostEmail from "./PostEmail";
import CommentList from "./CommentList";
import useAuth from "../Hooks/useAuth";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const PostDetail = () => {
  const blog = useLoaderData();
  const {  user } = useAuth(); // Assuming useAuth provides current user information including email
  const handleDelete = async (id) => {
    // Display a confirmation dialog using SweetAlert
    const confirmation = await Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    });
  
    // If user confirms the deletion
    if (confirmation.isConfirmed) {
      try {
        // Send a delete request to delete the blog post
        const response = await axios.delete(`https://server-khaki-zeta.vercel.app/blogs/${id}`);
        console.log(response.data);
        // Show a success message
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
        // Navigate to the home page
        window.location.href = '/'; // Change this to the URL of your home page
      } catch (error) {
        // Show an error message if deletion fails
        Swal.fire(
          'Error!',
          'An error occurred while deleting the post.',
          'error'
        );
        console.error("Error deleting post:", error.message);
      }
    }
  };
  
  return (
    <section className="bg-gray-200">
      <Container
        maxWidth="md"
        className="post_detail_container py-6 bg-white pt-4 rounded-xl border-gray-600 border-y-2  mx-auto"
      >
        <div className="post_detail_header flex justify-end mb-2">
          <div className="post_detail_button flex gap-4">
            { user?.email === blog.blogEmail && ( // Check if current user's email matches the blog owner's email
              <Button variant="outlined">
                <Link to={`/posts/${blog._id}/edit`}>Edit</Link>
              </Button>
            )}
            { user?.email === blog.blogEmail && ( // Check if current user's email matches the blog owner's email
              <Button
                variant="outlined"
                color="error"
                onClick={() => handleDelete(blog._id)}
              >
                Delete
              </Button>
            )}
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
          <PostEmail blogId={blog._id} blogEmail={blog.blogEmail} />
        </div>
      </div>
    </section>
  );
};

export default PostDetail;
