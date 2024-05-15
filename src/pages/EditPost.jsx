import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import { useLoaderData } from "react-router-dom";

const EditPost = () => {
  const [category, setCategory] = useState(""); // Adding useState hook for category

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

  const blog = useLoaderData();
  const { _id, title, long_description, short_description, image_url } = blog;
  

  const handleUpdateBlog = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedBlog = {
      title: form.title.value,
      short_description: form.shortDescription.value,
      category, // Use category state here
      image_url: form.image.value,
      long_description: form.long_description.value,
    };
    console.log(updatedBlog);
    fetch(`http://localhost:5000/blogs/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedBlog),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <section className="container mx-auto my-16 post  bg-slate-200 rounded-xl p-4">
      <div>
        <div className="flex items-center justify-center bg-accent rounded-xl">
          <h2 className="lg:text-4xl text-center border my-4 w-1/3 rounded-xl btn text-gray-700 font-bold">
            Update Blog
          </h2>
        </div>
        <label className="text-lg font-bold">Blog Title:</label>
        <form
          onSubmit={handleUpdateBlog}
          className="form create-post_form flex flex-col gap-3 rounded-md resize-none"
        >
          <input
            className="input input-bordered lg:w-1/3"
            type="text"
            name="title"
            placeholder={title}
            defaultValue={title}
            autoFocus
          />
          <label className="text-lg font-bold">Category:</label>
          <select
            className="btn lg:text-lg input-bordered lg:w-1/3"
            name="category"
            value={category} // Use value instead of defaultValue
            onChange={(e) => setCategory(e.target.value)} // Set category state
          >
            {POST_CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <div>
            <label className="text-lg font-bold">Short Description</label>
            <input
              className="input input-bordered my-4 w-[100%]"
              type="text"
              name="shortDescription"
              placeholder="Short Description"
              defaultValue={short_description}
              autoFocus
            />
            <label className="text-lg font-bold">Long Description</label>
            <textarea
              className="overflow-scroll bg-white w-full h-52 input input-bordered"
              name="long_description"
              placeholder="Long Description"
              defaultValue={long_description}
            />
          </div>
          <label className="text-lg font-semibold italic">Image Url:</label>
          <input
            className="input input-bordered"
            name="image"
            type="text"
            placeholder="Image Url"
            defaultValue={image_url}
          />
          <button type="submit" className="btn lg:w-2/6 mx-auto mt-10 text-lg btn-primary">
            Update
          </button>
        </form>
      </div>
    </section>
  );
};

export default EditPost;
