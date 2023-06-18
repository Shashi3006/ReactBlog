import React from 'react';
import { AiOutlineHome } from "react-icons/ai"
import "./Navbar.css"
import Art_Bloglist from './BlogLists/Art_Bloglist';
import Music_Bloglist from './BlogLists/Music_Bloglist';
import Coding_Bloglist from './BlogLists/Coding_Bloglist';

function Home() {

  return (
   <>
   <div className='wrapper'>
   <h2><AiOutlineHome /></h2>
     <div className="header">
       <h1><span>"</span>Blog<span>"</span></h1>
       <p>Multiple AI tools <br /> single platform</p>
     </div>
     <div className='container'>
       <h3 className='ai_genre'>Art Generator Ai</h3>
       <Art_Bloglist />
     </div>
     <div className='container'>
       <h3 className='ai_genre'>Ai For Music</h3>
       <Music_Bloglist />
     </div>
     <div className='container'>
       <h3 className='ai_genre'>Ai For Coding</h3>
       <Coding_Bloglist />
     </div>
     </div>
     
    </>
  );
}

export default Home;
