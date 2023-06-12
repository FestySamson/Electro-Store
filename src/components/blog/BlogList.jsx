import React, { useState } from 'react';
import Blog from './Blog';
import SingleBlog from './SingleBlog';

const BlogList = () => {
  const [selectedBlogId, setSelectedBlogId] = useState(null);

  // Assuming you have an array of blog posts
  const blogs = [
    {
      id: 1,
      blogImg:'Images/apple.jpg',
      title: 'Apple ',
      excerpt: 'Apple New Release',
      content: 'Full content of Blog Post 1.',
    },
    {
      id: 2,
      blogImg:'Images/samsung.jpeg',
      title: 'Samsung',
      excerpt: 'Samsung gossip about S24 ultra',
      content: 'Full content of Blog Post 2.',
    },
    {
        id: 3,
        blogImg:'Images/door.jpeg',
        title: 'Automatic Door',
        excerpt: 'Latest technology for door locks',
        content: 'Full content of Blog Post 2.',
      },
    // Add more blog posts here...
  ];

  const getBlogDetails = id => {
    // Find the blog post with the matching ID
    const blog = blogs.find(blog => blog.id === id);
    return blog;
  };

  const handleBlogClick = id => {
    setSelectedBlogId(id);
  };
  // Get today's date


  if (selectedBlogId) {
    const selectedBlog = getBlogDetails(selectedBlogId);
    return <SingleBlog id={selectedBlogId} blog={selectedBlog} />;
  }
 
  return (
    <div className="blo">
        <div className="blogh2">
            <h2>Blogs and Events</h2>
            <a href="">View all Events</a>
        </div>
      <div className="blogs">
        {blogs.map(blog => (
            <Blog
            key={blog.id}
            blogImg={blog.blogImg}
            title={blog.title}
            excerpt={blog.excerpt}
            id={blog.id}
            
            onClick={() => handleBlogClick(blog.id)}
            />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
