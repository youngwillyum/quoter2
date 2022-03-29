import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const MyProfile = props => (
    <tr>
        <td>{props.profile.profile_fullname}</td>
        <td>{props.profile.profile_address1}</td>
        <td>{props.profile.profile_address2}</td>
        <td>{props.profile.profile_city}</td>
        <td>{props.profile.profile_state}</td>
        <td>{props.profile.profile_zipcode}</td>
        <td>
            <Link to={"/edit/"+props.profile._id}>Edit</Link>
        </td>
    </tr>
)

export default class ProfileInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {historys: []};
    }

    componentDidMount() {
        axios.get('http://localhost:8080/historys/')
            .then(response => {
                this.setState({ historys: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

profileRead() {
  return this.state.historys.map(function(currentProfile, i){
      return <MyProfile profile={currentProfile} key={i} />;
  })
}

    render() {
        return (
            <div>
                <h3>Profile Information</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Address 1</th>
                        <th>Address 2</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zipcode</th>
                    </tr>
                </thead>
                <tbody>
                    { this.profileRead() }
                </tbody>
            </table>
            </div>
        )
    }
}
