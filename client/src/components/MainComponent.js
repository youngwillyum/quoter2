import React, { Component } from 'react'

import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Home from './HomeComponent'
import Profile from './ProfileComponent'
import Login from './LoginComponent'
import Quoter from './QuoterComponent'
import History from './HistoryComponent'

import{Switch,Route, Redirect, withRouter} from 'react-router-dom'


export default class Main extends Component{
  render() {
    return(
    <React.Fragment>
      <Header/>
        <Switch>
          <Route path= '/home' component={Home}/>
          <Route path= '/profile' component={Profile}/>
          <Route path= '/login' component={Login}/>
          <Route path= '/quoter' component={Quoter}/>
          <Route path= '/history' component={History}/>
          <Redirect to='/home'/>
          </Switch>
        <Footer/>
    </React.Fragment>
  )
  }
}
