/*import React, { Component } from 'react'
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
*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const History = props => (
    <tr>
        <td>{props.history.hist_date}</td>
        <td>{props.history.hist_gallons_requested}</td>
        <td>{props.history.hist_total_cost}</td>
        <td>
            <Link to={"/edit/"+props.history._id}>Edit</Link>
        </td>
    </tr>
)

export default class HistoryList extends Component {

    constructor(props) {
        super(props);
        this.state = {historys: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/historys/')
            .then(response => {
                this.setState({ historys: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    histList() {
        return this.state.historys.map(function(currentHistory, i){
            return <History history={currentHistory} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>History List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Gallons Requested</th>
                            <th>Total Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.histList() }
                    </tbody>
                </table>
            </div>
        )
    }
}