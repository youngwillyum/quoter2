import React from 'react'
import {Link} from 'react-router-dom'

function Login(){
  return(
    <React.Fragment>
    <div>Login or Register</div>

    <input type="email" placeholder="Your Email Address" />
    <div/>
    <input type="password" placeholder="Your Password" />
    <div/>
    <Link to='/home'>Click here for home</Link>

    </React.Fragment>
  )
}

export default Login;
