import React from 'react'
import {Link} from 'react-router-dom'

function Quoter(){
  return(
    <React.Fragment>
    <div>Quoter</div>

    <form>

      <label>
        Gallons Requested: 
        <input type="number" name="gallons" required/>
      </label>
      <div/>

      <label>
        Delivery address: 
      </label>
      <div/>

      <label>
        Delivery Date: 
        <input type="date"/>
      </label>
      <div/>

      <label>
        Suggested price / gallon: 
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
