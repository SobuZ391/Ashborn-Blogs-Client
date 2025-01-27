import { useState } from "react";
import Swal from "sweetalert2"; // Import SweetAlert
import "react-quill/dist/quill.snow.css";
import useAuth from "../Hooks/useAuth";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [short_description, setShort_description] = useState("");
  const [category, setCategory] = useState("Uncategorized");
  const [long_description, setLong_description] = useState("");
  const [image_url, setImage_url] = useState("");
  const { user } = useAuth();

  const POST_CATEGORIES = [
    "Photography",
    "Lifestyle",
    "Food & Cooking",
    "Technology",
    "Wellness",
    "Fashion & Beauty",
    "Agriculture",
    "Business",
    "Education",
    "Entertainment",
    "Art",
    "Investment",
    "Uncategorized",
    "Weather",
  ];

  const handleAddBlog = (e) => {
    e.preventDefault();
    const newBlog = {
      blogEmail: user.email,
      title,
      category,
      short_description,
      long_description,
      image_url,
      ownerName: user.displayName,
      ownerProfilePicture: user.photoURL,
    };

    fetch(`https://server-khaki-zeta.vercel.app/blogs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBlog),
    })
      .then((res) => {
        if (res.ok) {
          // Blog created successfully
          Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Blog created successfully!',
          }).then(() => {
            window.location.href = "/"; // Navigate to home page
          });
        } else {
          // Blog creation failed
          throw new Error("Failed to create blog.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.message,
        });
      });
  };

  return (
    <section className="container mx-auto my-16 post bg-slate-200 rounded-xl p-4">
      <div>
        <div className="flex items-center justify-center bg-accent rounded-xl">
          <h2 className="lg:text-4xl text-center border my-4 w-1/3 rounded-xl btn text-gray-700 font-bold">
            Create Blog
          </h2>
        </div>
        <label className="text-lg font-bold">Blog Title:</label>
        <form
          onSubmit={handleAddBlog}
          className="form create-post_form flex flex-col gap-3 rounded-md resize-none"
        >
          <input
            className="input input-bordered lg:w-1/3"
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
          />
          <label className="text-lg font-bold">Category:</label>
          <select
            className="btn lg:text-lg input-bordered lg:w-1/3"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {POST_CATEGORIES.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
          <div>
            <label className="text-lg font-bold">Short Description</label>
            <input
              className="input input-bordered my-4 w-[100%]"
              type="text"
              name="shortDescription"
              placeholder="Short Description"
              value={short_description}
              onChange={(e) => setShort_description(e.target.value)}
              autoFocus
            />
            <label className="text-lg font-bold">Long Description</label>
            <textarea
              className="overflow-scroll bg-white w-full h-52 input input-bordered"
              name="long_description"
              placeholder="Long Description"
              value={long_description}
              onChange={(e) => setLong_description(e.target.value)}
            />
          </div>
          <label className="text-lg font-semibold italic">Image Url:</label>
          <input
            className="input input-bordered"
            name="image"
            type="text"
            placeholder="Image Url"
            value={image_url}
            onChange={(e) => setImage_url(e.target.value)}
          />
          <button
            type="submit"
            className="btn lg:w-2/6 mx-auto mt-10 text-lg btn-primary"
          >
            Create
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreatePost;
