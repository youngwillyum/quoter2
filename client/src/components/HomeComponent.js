import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './myStyles.css'

export default class  Home extends Component{
  render(){
  return(
    <React.Fragment>
    <form action="/login">
      <input type="submit" value="Login or Register" />
    </form>
    <div/>
    <form action="/profile">
      <input type="submit" value="View Profile" />
    </form>
    <div/>
    <form action="/quoter">
      <input type="submit" value="Request Quote" />
    </form>
    <div/>
    <form action="/history">
      <input type="submit" value="Quote History" />
    </form>
    </React.Fragment>
  )
  }
}
