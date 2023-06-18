import React from 'react';
import { Link } from 'react-router-dom';
import "./bloglist.css";
import { SiLaunchpad } from "react-icons/si";


function BlogItem({blog}) {
  // const [artblogs, setArtBlogs] = useState(Art_Bloglist);

  return (
    <>
    <div className='blogItem'>
      <img src={blog.cover} alt="cover" className="blogItem_cover" />
      <label className='label-left'>{blog.title}</label>
      <h5>{blog.subtitle}</h5>
      <p className='blog_desc'>{blog.description}</p>
      
      <footer className='blogItem_footer'>
        <p><SiLaunchpad />{blog.introduced_on}</p>
        <Link className='blogItem-Link' to={`/blog/${blog.id}`}>
         <div class="d-grid">
           <button type="button" class="btn btn-outline-light text-light btn-block">Read more</button>
         </div>
        </Link>
      </footer>
    </div>
    </>
  );
}

export default BlogItem;
