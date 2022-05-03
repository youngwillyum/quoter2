import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';
import {useHistory} from "react-router-dom"



export default class Quoter extends Component{

constructor(props) {

  const state = {
    button: 1
  };
  super(props);
  this.onChangeQuoterGallonsRequested = this.onChangeQuoterGallonsRequested.bind(this)
  this.onChangeQuoterDeliveryDate = this.onChangeQuoterDeliveryDate.bind(this)
  this.onChangeTotalPrice = this.onChangeTotalPrice.bind(this)
  this.onSubmit = this.onSubmit.bind(this)

  this.state={
    quoter_gallonsrequested:'',
    quoter_deliverydate:'',
    quoter_totalprice:''
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

onChangeTotalPrice(e){
  this.setState({
    quoter_totalprice: e.target.vaule
  })
}

onSubmit(e) {
  e.preventDefault();
  if (this.state.button == 1){
    console.log('--Form Submitted--');
    console.log(this.state.quoter_gallonsrequested);
    console.log(this.state.quoter_deliverydate);
    console.log(this.state.quoter_totalprice);
    if (this.state.quoter_gallonsrequested < 0)
    {
      this.state.quoter_gallonsrequested = this.state.quoter_gallonsrequested * -1; 
    }
    if (this.state.state == 'TX'){
      if (this.state.price != null){
        if (this.state.quoter_gallonsrequested > 1000){
          this.state.totalPrice = this.state.quoter_gallonsrequested * (1.50 + (1.50 * (.02 - .01 +.02 +.1)))
        } else {
          this.state.totalPrice = this.state.quoter_gallonsrequested * (1.50 + (1.50 * (.02 - .01 +.03 +.1)))
        }
      } else {
        if (this.state.quoter_gallonsrequested > 1000){
          this.state.totalPrice = this.state.quoter_gallonsrequested * (1.50 + (1.50 * (.02+.02+.1)))
        } else {
          this.state.totalPrice = this.state.quoter_gallonsrequested * (1.50 + (1.50 * (.02+.03+.1)))
        }
      }
    } else {
      if (this.state.price != null){
        if (this.state.quoter_gallonsrequested > 1000){
        this.state.totalPrice = this.state.quoter_gallonsrequested * (1.50 + (1.50 * (.04 - .01 +.02 +.1)))
        } else {
        this.state.totalPrice = this.state.quoter_gallonsrequested * (1.50 + (1.50 * (.04 - .01 +.03 +.1)))
        }
      } else {
        if (this.state.quoter_gallonsrequested > 1000){
        this.state.totalPrice = this.state.quoter_gallonsrequested * (1.50 + (1.50 * (.04 + .02 +.1)))
        } else {
        this.state.totalPrice = this.state.quoter_gallonsrequested * (1.50 + (1.50 * (.04 + .03 +.1)))
        }
      }
    }
    const newQuote = {
      hist_date: this.state.quoter_deliverydate,
      hist_gallons_requested: this.state.quoter_gallonsrequested,
      hist_price_per_gallon: 1.50,
      hist_total_cost: this.state.totalPrice

    };
    const totalPrice = this.state.quoter_gallonsrequested * 1.50;
    sessionStorage.setItem('price', totalPrice);
    
   

    axios.post('http://localhost:8080/history/add', newQuote) 
      .then(res => console.log(res.data));

    this.setState = ({
      quoter_gallonsrequested:'',
      quoter_deliverydate:'',
      quoter_totalprice:''
    })
  }
  if (this.state.button == 2 ){
    if (this.state.totalPrice !=null )
   this.props.history.push('/history');
  }
}

componentDidMount(){
  const ad1 = sessionStorage.getItem('ad1');
  const state = sessionStorage.getItem('state');
  const price = sessionStorage.getItem('price');
  this.setState({ad1, state, price});

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
        <label>Price per gallon: $1.50</label>
      </div>

      <div className="form-group">
        <label>Total amount due: {this.state.price}</label>
      </div>

      <div className="form-group">
      <button
        onClick={() => (this.state.button = 1)}
        type="submit"
        name="btn1"
        value="Get Quote!"
      >
        Get Quote!
      </button>
      
      </div>


    </form>
    <form onSubmit ={this.onSubmit}>
      <div className="form-group">
      <button
        onClick={() => (this.state.button = 2)}
        type="submit"
        name="btn2"
        value="Submit"
      >
        Submit
      </button>
      </div>
    </form>
    </React.Fragment>
)
}
}
