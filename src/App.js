import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  './themes/default/styles'
import { Contact } from './themes/default/generic'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Contact phone = "1234" email = "email" website = "website">

        </Contact>
      </div>
    );
  }
}

export default App;
