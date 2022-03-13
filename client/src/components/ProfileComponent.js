import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import * as yup from "yup"
import axios from 'axios';

export default class Profile extends Component{

constructor(props) {
  super(props);

  this.onChangeProfileName = this.onChangeProfileName.bind(this)
  this.onChangeProfileAddress1 = this.onChangeProfileAddress1.bind(this)
  this.onChangeProfileAddress2 = this.onChangeProfileAddress2.bind(this)
  this.onChangeProfileCity = this.onChangeProfileCity.bind(this)
  this.onChangeProfileState = this.onChangeProfileState.bind(this)
  this.onChangeProfileZipcode = this.onChangeProfileZipcode.bind(this)
  this.onSubmit = this.onSubmit.bind(this)

  const newProfile = {
    profile_fullname: this.profile_fullname,
    profile_address1: this.profile_address1,
    profile_address2: this.profile_address2,
    profile_city: this.profile_city,
    profile_state: this.profile_state,
    profile_zipcode: this.profile_zipcode
  }
  axios.post('http://localhost:8080/profile', newProfile)
  .then(res => console.log(res.data));
  


  this.state = {
    profile_fullname:'',
    profile_address1:'',
    profile_address2:'',
    profile_city:'',
    profile_state:'',
    profile_zipcode:''
  }

  const validationSchema = yup.object({
    profile_fullname: yup.string().min(3, "Please enter your real name").required("Full name is required!"),
    profile_address1: yup.string().email("Please enter a valid email address").required(),
  })
}

onChangeProfileName(e){
  this.setState({
    profile_fullname: e.target.value
  });
}

onChangeProfileAddress1(e){
  this.setState({
    profile_address1: e.target.value
  });
}

onChangeProfileAddress2(e){
  this.setState({
    profile_address2: e.target.value
  });
}

onChangeProfileCity(e){
  this.setState({
    profile_city: e.target.value
  });
}

onChangeProfileState(e){
  this.setState({
    profile_state: e.target.value
  });
}

onChangeProfileZipcode(e){
  this.setState({
    profile_zipcode: e.target.value
  });
}

onSubmit(e) {
  e.preventDefault();

  console.log('--Form Submitted--');
  console.log(this.state.profile_fullname);
  console.log(this.state.profile_address1);
  console.log(this.state.profile_address2);
  console.log(this.state.profile_city);
  console.log(this.state.profile_state);
  console.log(this.state.profile_zipcode);

  this.setState = ({
    profile_fullname:'',
    profile_address1:'',
    profile_address2:'',
    profile_city:'',
    profile_state:'',
    profile_zipcode:''
  })
}







render(){
  return(

      <React.Fragment>
      <form onSubmit={this.onSubmit}>

        <div className="form-group">
          <label>Full Name: {this.state.profile_fullname}</label>
          <input type="text" className="form-control" maxlength="50" required value={this.state.profile_fullname}
            onChange={this.onChangeProfileName}   />
        </div>

        <div className="form-group">
          <label>Address 1:</label>
          <input type="text" className="form-control" value={this.state.profile_address1}
            onChange={this.onChangeProfileAddress1} maxlength="100" required/>
        </div>

        <div className="form-group">
          <label>Address 2:</label>
          <input type="text" className="form-control" value={this.state.profile_address2}
            onChange={this.onChangeProfileAddress2} maxlength="100" />
        </div>

        <div className="form-group">
          <label>City:</label>
          <input type="text"className="form-control"  value={this.state.profile_city}
            onChange={this.onChangeProfileCity} maxlength="100" required/>
        </div>

        <div className="form-group">
          <label>State:</label>
          <select name="State" className="form-control" id="state"  value ={this.state.profile_state}
          onChange={this.onChangeProfileState}required>
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
        </div>

        <div className="form-group">
          <label>Zipcode:  </label>
          <input type="text" className="form-control" value={this.state.profile_zipcode}
            onChange={this.onChangeProfileZipcode} maxlength="9" minlength="5" required/>
        </div>

        <div className="form-group">
          <input type="submit" value="Save Profile" className = "btn btn-primary"/>
        </div>

</form>
</React.Fragment>
)
}
}
