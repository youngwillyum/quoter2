import React from 'react'
import {Link} from 'react-router-dom'

function About(){
  return(
    <React.Fragment>
    <div>About</div>
    <Link to='/home'>Click here for home</Link>
    </React.Fragment>
)
}

export default About;
