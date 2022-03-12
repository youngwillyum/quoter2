import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Login extends Component{

constructor(props) {
  super(props);
  this.onChangeLoginEmail = this.onChangeLoginEmail.bind(this)
  this.onChangeLoginPassword = this.onChangeLoginPassword.bind(this)
  this.onSubmit = this.onSubmit.bind(this)

  this.state={
    login_email:'',
    login_password:''
  }
}

onChangeLoginEmail(e){
  this.setState({
    login_email: e.target.value
  })
}

onChangeLoginPassword(e){
  this.setState({
    login_password: e.target.value
  })
}

onSubmit(e){
  e.preventDefault();

  console.log('--Form Submitted--');
  console.log(this.state.login_email);
  console.log(this.state.login_password);

  this.setState = ({
    login_email:'',
    login_password:''
  })
}
render () {
  return(
    <React.Fragment>
    <form onSubmit={this.onSubmit}>
    <label>Login</label>

    <div className="form-group">
      <input type="email" placeholder="Your Email Address" name="email" required
      value={this.state.login_email} onChange={this.onChangeLoginEmail}/>
    </div>

    <div className="form-group">
      <input type="password" placeholder="Your Password" name="password" required
      value={this.state.login_password} onChange={this.onChangeLoginPassword} />
    </div>
    <div className="form-group">
    <input type="submit" value="Login" className = "btn btn-primary"/>
    </div>

    </form>
    </React.Fragment>
  )
  }
}
