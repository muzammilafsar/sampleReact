import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header/js/header';
import '../node_modules/jquery/dist/jquery.min';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      </div>
    );
  }
}

export default App;
