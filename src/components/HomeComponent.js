import React from 'react'
import {Link} from 'react-router-dom'

function Home(){
  return(
    <React.Fragment>
    <div>Home</div>
    <Link to='/login'> Click here to Login or Register </Link>
    <div/>
    <Link to='/profile'> Click here for Profile </Link>
    <div/>
    <Link to='/quoter'> Click here to request quote! </Link>
    </React.Fragment>
  )
}

export default Home;
