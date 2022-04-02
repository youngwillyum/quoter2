import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Main               from './components/MainComponent'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Login from './Login/Login';
import useToken from './components/App/useToken';


function App() {
  const { token, setToken } = useToken();

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
