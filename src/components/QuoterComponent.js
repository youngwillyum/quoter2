import React from 'react'
import {Link} from 'react-router-dom'

function Quoter(){
  return(
    <React.Fragment>
    <div>Quoter</div>

    <form>

      <label>
        Gallons Requested
        <input type="text" name="gallons" />
      </label>
      <div/>

      <label>
        Delivery address - generated from client Profile
      </label>
      <div/>

      <label>
        Delivery Date - date picker
      </label>
      <div/>

      <label>
        Suggested price placeholder
      </label>
      <div/>

      <label>
        Total amount due:
      </label>
      <div/>

      <input type="submit" value="Generate!" />


    </form>


    <Link to='/home'>Click here for home</Link>
    </React.Fragment>
)
}

export default Quoter;
