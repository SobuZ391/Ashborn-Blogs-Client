import React, { useEffect, useState } from "react";
import axios from "axios";
import MUIDataTable from "mui-datatables";

const Dashboard = () => {
  const [topPosts, setTopPosts] = useState([]);

  useEffect(() => {
    fetchTopPosts();
  }, []);

  const fetchTopPosts = async () => {
    try {
      const response = await axios.get("https://server-khaki-zeta.vercel.app/blogs");
      const posts = response.data;

      // Filter out posts without long_description
      const postsWithDescription = posts.filter(post => post.long_description);
console.log(postsWithDescription);
      // Sort posts based on the word count of the long description
      postsWithDescription.sort((a, b) => {
        const wordCountA = a.long_description.split(" ").length;
        const wordCountB = b.long_description.split(" ").length;
        return wordCountB - wordCountA;
      });

      // Take top 10 posts
      const top10 = postsWithDescription.slice(0, 10);

      // Map top 10 posts and add serial number
      const data = top10.map((post, index) => [
        index + 1, // Serial Number
        post.title,
        post.ownerName,
        post.ownerProfilePicture
      ]);

      setTopPosts(data);
    } catch (error) {
      console.error("Failed to fetch top posts:", error);
    }
  };

  const columns = [
    { name: "serialNumber", label: "Serial Number" },
    { name: "title", label: "Blog Title" },
    { name: "owner", label: "Blog Owner" },
    { 
      name: "ownerProfilePicture", 
      label: "Blog Owner Profile Picture",
      options: {
        customBodyRender: (value) => (
          <img className="rounded-xl"  src={value} alt="Owner Profile" style={{ width: 50, height: 50 }} />
        )
      }
    }
  ];

  const options = {
    selectableRows: "none", // Remove checkboxes
    responsive: "standard", // Responsive design
    print: false // Hide print button
    // Add more options as needed
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Featured Blogs</h1>
      <MUIDataTable
        title=""
        data={topPosts}
        columns={columns}
        options={options}
      />
    </div>
  );
};

export default Dashboard;
