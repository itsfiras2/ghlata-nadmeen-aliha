import React from 'react'
import styles from './Navbar.css';





const Navbar = () => {
  return (
    <div>
            <nav class="navbar">
        <div class="container">
      
          <div class="navbar-header">
            <button class="navbar-toggler" data-toggle="open-navbar1">
              <span></span>
              <span></span>
              <span></span>
            </button>
            <a href="#">
              <h4>Go<span>Geeks</span></h4>
            </a>
          </div>
      
          <div class="navbar-menu" id="open-navbar1">
            <ul class="navbar-nav">
              <li class="active"><a href="#">Home</a></li>
              <li class="navbar-dropdown">
                <a href="#" class="dropdown-toggler" data-dropdown="my-dropdown-id">
                  Categories <i class="fa fa-angle-down"></i>
                </a>
              </li>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#"></a></li>
              <li><a href="">Signup</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar