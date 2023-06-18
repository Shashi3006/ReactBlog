import React from 'react';
import BlogItem from './blogItem';
import "./bloglist.css";
import { Blog } from '../../config/data'; 


function Art_Bloglist({}) { 

  return (
    <>
    <div className='Bloglist-wrapper'>
      {Blog.map(blog=>  
      <BlogItem blog={blog} key={blog.id} />
      )} 
    </div>
    
    </>
  );
}

export default Art_Bloglist;
