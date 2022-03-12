import React, { Component } from 'react'

//import Header from './HeaderComponent'
//import Footer from './FooterComponent'
import Home from './HomeComponent'
import Profile from './ProfileComponent'
import Login from './LoginComponent'
import Quoter from './QuoterComponent'
import History from './HistoryComponent'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "./logo.png";

export default class Main extends Component{
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" target="_blank">
              <img src={logo} alt="projectlogo"  width="30" height="30"  />
            </a>
            <Link to="/" className="navbar-brand">Quoter App</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/login" className="nav-link">Login</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/Profile" className="nav-link">Profile</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/Quoter" className="nav-link">Get Quote</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/History" className="nav-link">History</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path= '/home' component={Home}/>
          <Route path= '/profile' component={Profile}/>
          <Route path= '/login' component={Login}/>
          <Route path= '/quoter' component={Quoter}/>
          <Route path= '/history' component={History}/>
        </div>
      </Router>
    );
  }
}
