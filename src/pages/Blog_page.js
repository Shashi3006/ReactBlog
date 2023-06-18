import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Blog } from '../config/data';
import Empty_page from './Empty_page';
import { music_Blog } from '../config/music_data';
import { code_Blog } from '../config/coding_data';
import './Blog.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Blog_page() {
  const {id} = useParams();
  const [blog, setBlog] = useState(null)

  useEffect(() => {
    return () => {
      let blog = Blog.find(blog=>blog.id === parseInt(id));
      let music_blog = music_Blog.find(blog=>blog.id === parseInt(id));
      let coding_blog = code_Blog.find(blog=>blog.id === parseInt(id));

      if(blog){
        setBlog(blog);
      }
      else if(music_blog)
      {
        setBlog(music_blog);
      }
      else
      {
        setBlog(coding_blog)
      }
    };
  }, []);

  return (
    <>
    <div className='Blogpage_wrapper'>
      <Link to='/' className='blog_back'><span>&#8592;</span> Go Back</Link>
      {blog ? 
      (<div className='blog_wrap'>
        <header>
          <h4>{blog.title}</h4>
          <img src={blog.cover} alt="cover" className="blog_cover" />
          <h5>{blog.subtitle}</h5>
          <p className='blog_describe'>{blog.description}</p>
          <footer className='blogItem_footer'><p>Introduced {blog.introduced_on}</p></footer>
        </header>
       </div>) 
      : 
      (<Empty_page />)}
    </div>

    </>
  );
};

export default Blog_page;
