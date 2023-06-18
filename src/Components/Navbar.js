import React from 'react';
import {Link} from 'react-router-dom';
import ai from '../ai.png'
import "./Navbar.css"

function Navbar() {
  return (
    <>
       <div className="container-fluid flex">
        <div>
         <Link to="/" className="navbar-brand" >
          <img src={ai} className="rounded-circle" alt="logo" />
         </Link>
         </div>
         <nav className="navbar navbar-expand-lg">
         <button type="button" data-bs-toggle="collapse" data-bs-target="#navbar-menu" class="navbar-toggler">
         <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span> 
          {/* <span class="navbar-toggler-icon"></span>   */}
          </button>
          <div class='collapse navbar-collapse' id='navbar-menu'>
          <ul className="nav navbar-nav">
            <li className="nav-item">
             <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
             <Link className="nav-link" to="/news">News Feed</Link>
            </li>
            <li className="nav-item">
             <Link className="nav-link" to="/events">Events</Link>
            </li>
            <li className="nav-item dropdown">
             <Link className="nav-link dropdown-toggle" to="/job" role="button" data-bs-toggle="dropdown" aria-expanded="false">Jobs</Link>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Work From Home</a></li>
                <li><a class="dropdown-item" href="#">Jobs in Bengalore</a></li>
                <li><a class="dropdown-item" href="#">Jobs in Delhi</a></li>
                <li><a class="dropdown-item" href="#">Jobs in Pune</a></li>
                <li><a class="dropdown-item" href="#">Jobs in Hyderabad</a></li>
                <li><a class="dropdown-item" href="#">Jobs in Patna</a></li>
              </ul>
            </li>
            <li className="nav-item">
             <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
          </div>
          </nav>
        </div>
        </>
  );
}

export default Navbar;
