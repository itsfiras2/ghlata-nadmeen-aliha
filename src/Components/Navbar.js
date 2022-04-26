import React from 'react'
import styles from './Navbar.css';
import Taswira from '../Images/Gogs_logo.png'

const Navbar = () => {
  return (
    <div>
            <nav class="navbar" >
        <div class="container">
        <img src={Taswira} height="55" />

          <div class="navbar-header">
            <a href="home">
              <h4>Go<span>Geeks</span></h4>
            </a>
          </div>
          <div class="navbar-menu" id="open-navbar1">
            <ul class="navbar-nav">
              <li class="active"><a href="home">Home</a></li>
              <li><a  href="/home" >About</a></li>
              <li><a href="Login">Sign up</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar