import React, { Component } from 'react'
import Home from './HomeComponent'
import Profile from './Profile/ProfileComponent'
import ProfileInfo from './Profile/viewProfile'
import Quoter from './Quoter/QuoterComponent'
import History from './Quoter/HistoryComponent'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "./logo.png";

export default class Main extends Component{
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" target="_blank">
              <img src={logo} alt="/home"  width="50" height="50"  />
            </a>
            <Link to="/" className="navbar-brand">Quoter App</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/Profile" className="nav-link">Profile</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/viewProfile" className="nav-link">ViewProfile</Link>
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

          <Route path= '/profile' component={Profile}/>
          <Route path= '/quoter' component={Quoter}/>
          <Route path= '/history' component={History}/>
          <Route path= '/viewprofile' component={ProfileInfo}/>
        </div>
      </Router>
    );
  }
}
