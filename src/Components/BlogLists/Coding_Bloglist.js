import React from 'react';
import { code_Blog } from '../../config/coding_data'; 
import './bloglist.css';
import BlogItem from './blogItem';

function Coding_Bloglist() {
  return (
    <>
    <div className='Bloglist-wrapper'>
      {code_Blog.map(blog=>  
      <BlogItem blog={blog} key={blog.id} />
      )} 
    </div>
    </>
  );
}

export default Coding_Bloglist;
