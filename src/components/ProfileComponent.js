import React from 'react'
import {Link} from 'react-router-dom'

function Profile(){
  return(
    <React.Fragment>
    <div>Profile</div>
    <Link to='/home'>Click here for home</Link>
    </React.Fragment>
)
}

export default Profile;
