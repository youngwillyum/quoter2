import React, {Component} from "react";
import UserStore          from './stores/UserStore';
import "bootstrap/dist/css/bootstrap.min.css"
import Main               from './components/MainComponent'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'


class App extends React.Component {


  render(){
    return (
      <Router>
        <div className="app">
          <Main/>
        </div>
      </Router>

  );
  }
}

export default App;
