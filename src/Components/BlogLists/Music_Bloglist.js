import React from 'react';
import { music_Blog } from '../../config/music_data';
import './bloglist.css';
import BlogItem from './blogItem';

function Music_Bloglist() {
  return (
    <>
     <div className='Bloglist-wrapper'>
      {music_Blog.map(blog=>  
      <BlogItem blog={blog} key={blog.id} />
      )} 
     </div>
    </>
  );
}

export default Music_Bloglist;
