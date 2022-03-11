import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class History extends Component{
  render() {
    return(
        <React.Fragment>
        <h2>Quote History</h2>

        <table>
            <tr>
                <th>Date</th>
                <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                <th>Price per gal</th>
                <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                <th>Total Cost</th>
            </tr>
            <tr>
                <td> Date placeholder </td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td> Price placeholder </td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td> Total placeholder </td>
            </tr>

        </table>
        <Link to='/home'>Click here for home</Link>

        </React.Fragment>
    )
  }
}
