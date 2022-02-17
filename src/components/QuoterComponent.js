import React from 'react'
import {Link} from 'react-router-dom'

function Quoter(){
  return(
    <React.Fragment>
    <div>Quoter</div>
    <Link to='/home'>Click here for home</Link>
    </React.Fragment>
)
}

export default Quoter;
