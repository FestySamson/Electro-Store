import React from 'react';

const BlogPage = ({ blog }) => {
  return (
    <div>
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
      {/* Add more blog details here... */}
    </div>
  );
};

export default BlogPage;
