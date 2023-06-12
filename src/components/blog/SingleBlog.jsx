import React, { useEffect, useState } from 'react';
import BlogPage from './Blogpage';

const SingleBlog = ({ id }) => {
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    // Fetch the specific blog details
    const fetchBlogDetails = async () => {
      // Assuming you have a function that fetches the blog details by ID
      const blogDetails = await getBlogDetails(id);
      setBlog(blogDetails);
    };

    fetchBlogDetails();
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div>
        <BlogPage blog={blog} />;
    </div>
  )
 
};

export default SingleBlog;
