import React from 'react'
import './Loginform.css' ;
import Navbar from './Navbar';
import Footer from './Footer';
const Loginform  = () =>  {
  return (<>
    <Navbar />
    <div className='club'> 
         <div>
        <link href="https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap" rel="stylesheet" />
        <div className="main2">  	
          <input type="checkbox" id="chk" aria-hidden="true" />
          <div className="signup">
              <label htmlFor="chk" aria-hidden="true">Sign up</label>
              <input type="email" name="email" placeholder="Email" />
              <a href='/Registration'><button >Sign up</button> </a>
          </div>
          <div className="login">
            <form>
              <label htmlFor="chk" aria-hidden="true">Login</label>
              <input type="email" name="email" placeholder="Email" required />
              <input type="password" name="pswd" placeholder="Password" required />
              <button >Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Loginform