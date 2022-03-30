import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';

export default class Quoter extends Component{

constructor(props) {
  super(props);
  this.onChangeQuoterGallonsRequested = this.onChangeQuoterGallonsRequested.bind(this)
  this.onChangeQuoterDeliveryDate = this.onChangeQuoterDeliveryDate.bind(this)
  this.onSubmit = this.onSubmit.bind(this)

  this.state={
    quoter_gallonsrequested:'',
    quoter_deliverydate:''
  }
}

onChangeQuoterGallonsRequested(e){
  this.setState({
    quoter_gallonsrequested: e.target.value
  })
}

onChangeQuoterDeliveryDate(e){
  this.setState({
    quoter_deliverydate: e.target.value
  })
}

onSubmit(e) {
  e.preventDefault();

  console.log('--Form Submitted--');
  console.log(this.state.quoter_gallonsrequested);
  console.log(this.state.quoter_deliverydate);

  const newQuote = {
    hist_date: this.state.quoter_deliverydate,
    hist_gallons_requested: this.state.quoter_gallonsrequested,

};

axios.post('http://localhost:8080/history/add', newQuote)
    .then(res => console.log(res.data));

  this.setState = ({
    quoter_gallonsrequested:'',
    quoter_deliverydate:''
  })
}

componentDidMount(){
  const ad1 = sessionStorage.getItem('ad1');
  this.setState({ad1});

}

render(){

  return(
    <React.Fragment>
    <form onSubmit={this.onSubmit}>

      <div className="form-group">
        <label>Gallons Requested:</label>
        <input type="number" className="form-control" name="gallons" required
          value={this.state.quoter_gallonsrequested} onChange={this.onChangeQuoterGallonsRequested}/>
      </div>

      <div className="form-group">
        <label>Delivery Date:</label>
        <input type="date" className="form-control" name="date" required
          value={this.state.quoter_deliverydate} onChange={this.onChangeQuoterDeliveryDate}/>
      </div>

      <div className="form-group">
        <label>Delivery address: {this.state.ad1}</label>
      </div>

      <div className="form-group">
        <label>Suggested price / gallon: $2</label>
      </div>

      <div className="form-group">
        <label>Total amount due:</label>
      </div>

      <div className="form-group">
        <input type="submit" value="Generate!" className = "btn btn-primary"/>
      </div>


    </form>
    </React.Fragment>
)
}
}
