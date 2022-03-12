import React, {Component,useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Main               from './components/MainComponent'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Login from './Login/Login';



function App() {
 const [token, setToken] = useState();
  if(!token) {
    return <Login setToken={setToken}/>
  }



    return (
      <Router>
        <div className="app">
          <Main/>
        </div>
      </Router>

  );
  }


export default App;
