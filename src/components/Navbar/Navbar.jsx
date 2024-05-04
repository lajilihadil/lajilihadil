// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (

    <nav class="navbar navbar-expand-lg navbar-light "  style={{ backgroundColor: '#107aca',height:"92px" }} >
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="/">
    <img src='/img/MediSphèreVie3.png' style={{ height: '77px' ,marginTop:'-10px'}}></img></a>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item ">
          <a class="nav-link" href="/" style={{ color: 'white' }}>Accueil <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Service" style={{ color: 'white' }} >Service</a>
        </li>

        <li class="nav-item">
        <a class="nav-link" href="/Blogs" style={{ color: 'white' }} >Blogs</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="/Magazine" style={{ color: 'white' }} >Magazine</a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
      
      <div className="user-login">

      <Link to="/login" ><i className="fas fa-user user-icon"></i>
        Se connecter
      </Link>
    </div>
      </form>
    
    </div>
  </nav>

  );
};

export default Navbar;
