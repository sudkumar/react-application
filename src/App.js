import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Build Something Awesome with <img src={logo} alt="React" /></h1>
      </div>
    );
  }
}

export default App;
