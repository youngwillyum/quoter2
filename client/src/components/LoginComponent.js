import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Login extends Component{
render () {
  return(
    <React.Fragment>
    <div>Login or Register</div>

    <input type="email" placeholder="Your Email Address" />
    <div/>
    <input type="password" placeholder="Your Password" />
    <div/>
    <input type="submit" value="Login"/>
    <input type="submit" value="Register" />
    <div/>
    <Link to='/home'>Click here for home</Link>

    </React.Fragment>
  )
  }
}
