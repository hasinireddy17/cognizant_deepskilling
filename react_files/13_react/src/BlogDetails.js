import React from "react";

function BlogDetails() {
  const blogs = [
    { id: 1, title: "React Hooks", author: "John" },
    { id: 2, title: "ES6 Features", author: "Jane" }
  ];

  return (
    <div>
      <h2>Blog Details</h2>
      {blogs.map((blog) => (
        <p key={blog.id}>
          {blog.title} - {blog.author}
        </p>
      ))}
    </div>
  );
}

export default BlogDetails;