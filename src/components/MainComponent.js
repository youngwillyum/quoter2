import React from 'react'

import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Home from './HomeComponent'
import Profile from './ProfileComponent'
import Login from './LoginComponent'
import Quoter from './QuoterComponent'

import{Switch,Route, Redirect, withRouter} from 'react-router-dom'


function Main(){
  return(
    <React.Fragment>
    <Header/>
      <Switch>
        <Route path= '/home' component={Home}/>
        <Route path= '/profile' component={Profile}/>
        <Route path= '/login' component={Login}/>
        <Route path= '/quoter' component={Quoter}/>
        <Redirect to='/home'/>
      </Switch>
    <Footer/>
    </React.Fragment>
  )
}
export default withRouter(Main);
