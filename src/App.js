import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import Content from './Content.js';

class App extends Component {

  constructor() {
    super();
    this.state ={
      searchName: ''
    }
  }

  render() {
    return (
      <div className="App">
        <input type="text"/>
        <Content />
      </div>
    );
  }
}

export default App;
