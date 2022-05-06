import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const History = props => (
    <tr>
        <td>{props.history.hist_date}</td>
        <td>{props.history.hist_gallons_requested}</td>
        <td>{props.history.hist_price_per_gallon}</td>
        <td>{props.history.hist_total_cost}</td>
    </tr>
)

export default class HistoryList extends Component {

    constructor(props) {
        super(props);
        this.state = {history: []};
    }

    componentDidMount() {
        axios.get('http://localhost:8080/history')
            .then(response => {
                this.setState({ history: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    histList() {
        return this.state.history.map(function(currentHistory, i){
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
                            <th>Price Per Gallon</th>
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
