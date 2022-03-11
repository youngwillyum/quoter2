import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Main from './components/MainComponent'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

class App extends Component {
  render(){
    return (
      <Router>
        <div className="container">
          <Main/>
        </div>
      </Router>

  );
  }
}

export default App;
