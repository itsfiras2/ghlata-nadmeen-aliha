import React from 'react'
import './Loginform.css' ;

const Loginform = () => {
  return (
    <div className='club'> 
         <div>
        <link href="https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap" rel="stylesheet" />
        <div className="main2">  	
          <input type="checkbox" id="chk" aria-hidden="true" />
          <div className="signup">
            <form>
              <label htmlFor="chk" aria-hidden="true">Sign up</label>
              <input type="text" name="txt" placeholder="User name" required />
              <input type="email" name="email" placeholder="Email" required />
              <input type="password" name="pswd" placeholder="Password" required />
              <button>Sign up</button>
            </form>
          </div>
          <div className="login">
            <form>
              <label htmlFor="chk" aria-hidden="true">Login</label>
              <input type="email" name="email" placeholder="Email" required />
              <input type="password" name="pswd" placeholder="Password" required />
              <button>Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loginform