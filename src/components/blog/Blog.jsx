import React from 'react';
import './blog.css'
import { RiCalendarFill } from 'react-icons/ri';

const Blog = ({ title, excerpt, id, blogImg }) => {

    const today = new Date().toLocaleDateString();

  return (
    <div className='blogwrap'>
       <div className="blogdiv">
            <img src={blogImg} alt=""  />
            <div className="date">
                <RiCalendarFill className='date-icon'/>
                <p>{today}</p>
            </div>
            <div className="tt">
            <h3>{title}</h3>
            <p>{excerpt}, <a href={`/blog/${id}`}>Read More</a></p>
            </div>
            
            </div>
    </div>
  );
};

export default Blog;
