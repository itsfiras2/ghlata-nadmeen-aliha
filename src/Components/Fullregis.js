import React from 'react'
import './Fullregis.css'
import Navbar from './Navbar'
const Fullregis = () => {
  return ( <>


    <Navbar />
    <br></br>
    <br/>
    <div className='ndemt1'>
      <div className='ndemt'>
        <div className="container1">
  <div className="title">Registration</div>
  <div className="content">
    <form action="#">
      <div className="user-details">
        <div className="input-box">
          <span className="details">Full Name</span>
          <input type="text" placeholder="Enter your name" required />
        </div>
        <div className="input-box">
          <span className="details">Username</span>
          <input type="text" placeholder="Enter your username" required />
        </div>
        <div className="input-box">
          <span className="details">Email</span>
          <input type="text" placeholder="Enter your email" required />
        </div>
        <div className="input-box">
          <span className="details">Phone Number</span>
          <input type="text" placeholder="Enter your number" required />
        </div>
        <div className="input-box">
          <span className="details">Password</span>
          <input type="text" placeholder="Enter your password" required />
        </div>
        <div className="input-box">
          <span className="details">Confirm Password</span>
          <input type="text" placeholder="Confirm your password" required />
        </div>
      </div>
      <div className="gender-details">
        <input type="radio" name="gender" id="dot-1" />
        <input type="radio" name="gender" id="dot-2" />
        <input type="radio" name="gender" id="dot-3" />
        <span className="gender-title">Gender</span>
        <div className="category">
          <label htmlFor="dot-1">
            <span className="dot one" />
            <span style={{color: "#8E8B82"}} className="gender">Male</span>
          </label>
          <label htmlFor="dot-2">
            <span className="dot two" />
            <span style={{color: "#8E8B82"}} className="gender">Female</span>
          </label>
          <label htmlFor="dot-3">
            <span className="dot three" />
            <span style={{color: "#8E8B82"}} className="gender">Other</span>
          </label>
        </div>
      </div>
      <div className="button">
        <input type="submit" />
      </div>
    </form>
  </div>
</div>
 </div>
    </div>
    </>
  )
}

export default Fullregis