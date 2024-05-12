import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const EditPost = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Uncategorized");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  const POST_CATEGORIES = [
    "Agriculture",
    "Business",
    "Education",
    "Entertainment",
    "Art",
    "Investment",
    "Uncategorized",
    "Weather",
  ];

  return (
    <section className="container mx-auto my-16 post h-screen">
      <div>
        <h2 className="text-3xl font-bold">Create Post</h2>
        <p className="w-[70%] rounded-xl bg-red-600 text-white text-lg py-3 px-4 block mb-1">
          This is an error message
        </p>
        <form className="form create-post_form flex flex-col gap-3 rounded-md resize-none">
          <input
          className="input input-bordered w-1/3 " 
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
          />
          <select
          className="btn text-lg input-bordered w-1/3 " 
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)} // Fixed onChange handler
          >
            {POST_CATEGORIES.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
          <div>
            <ReactQuill className="overflow-scroll bg-white h-52"  modules={modules} formats={formats} value={description} onChange={setDescription} />
          </div>
          <input
            type="file"
            onChange={(e) => setThumbnail(e.target.files[0])}
            accept="image/png, image/jpeg"
          />
        
          <button type="submit" className="btn lg:w-1/6 text-lg btn-primary">
            Update
          </button>
        </form>
      </div>
    </section>
  );
};

export default EditPost;
