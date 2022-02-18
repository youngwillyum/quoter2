import React from 'react'
import {Link} from 'react-router-dom'

function Profile(){
  return(
    <React.Fragment>
    <div>Profile</div>
<form>

  <label>
    Full Name:
    <input type="text" name="name" maxlength="50" required />
  </label>

  <label>
    Address 1:
    <input type="text" address="address" maxlength="100" required/>
  </label>

  <label>
    Address 2:
    <input type="text" address2="address2" maxlength="100" />
  </label>
  <div/>

  <label>
    City:
    <input type="text" City="City" maxlength="100" required/>
  </label>

  <label>
  State:
  <select name="State" id="state" required>
  <option value="">None</option>
	<option value="AL">Alabama</option>
	<option value="AK">Alaska</option>
	<option value="AZ">Arizona</option>
	<option value="AR">Arkansas</option>
	<option value="CA">California</option>
	<option value="CO">Colorado</option>
	<option value="CT">Connecticut</option>
	<option value="DE">Delaware</option>
	<option value="DC">District Of Columbia</option>
	<option value="FL">Florida</option>
	<option value="GA">Georgia</option>
	<option value="HI">Hawaii</option>
	<option value="ID">Idaho</option>
	<option value="IL">Illinois</option>
	<option value="IN">Indiana</option>
	<option value="IA">Iowa</option>
	<option value="KS">Kansas</option>
	<option value="KY">Kentucky</option>
	<option value="LA">Louisiana</option>
	<option value="ME">Maine</option>
	<option value="MD">Maryland</option>
	<option value="MA">Massachusetts</option>
	<option value="MI">Michigan</option>
	<option value="MN">Minnesota</option>
	<option value="MS">Mississippi</option>
	<option value="MO">Missouri</option>
	<option value="MT">Montana</option>
	<option value="NE">Nebraska</option>
	<option value="NV">Nevada</option>
	<option value="NH">New Hampshire</option>
	<option value="NJ">New Jersey</option>
	<option value="NM">New Mexico</option>
	<option value="NY">New York</option>
	<option value="NC">North Carolina</option>
	<option value="ND">North Dakota</option>
	<option value="OH">Ohio</option>
	<option value="OK">Oklahoma</option>
	<option value="OR">Oregon</option>
	<option value="PA">Pennsylvania</option>
	<option value="RI">Rhode Island</option>
	<option value="SC">South Carolina</option>
	<option value="SD">South Dakota</option>
	<option value="TN">Tennessee</option>
	<option value="TX">Texas</option>
	<option value="UT">Utah</option>
	<option value="VT">Vermont</option>
	<option value="VA">Virginia</option>
	<option value="WA">Washington</option>
	<option value="WV">West Virginia</option>
	<option value="WI">Wisconsin</option>
	<option value="WY">Wyoming</option>
  </select>
  </label>

  <label>
    Zipcode:
    <input type="text" zipcode="zipcode" maxlength="9" minlength="5" required/>
  </label>

  <input type="submit" value="Submit" />
</form>
    <Link to='/home'>Click here for home</Link>
    </React.Fragment>
)
}

export default Profile;
