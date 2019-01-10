import React, { Component } from 'react';
import './App.css';
import Content from './Content.js';

class App extends Component {

  constructor() {
    super();
    this.state ={
      searchName: 'Ant'
    }

  // this.changeSearch = this.changeSearch.bind(this);
  }

  changeSearch = (event) => {
    this.setState({searchName: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <div className = "header">
          <h1>Movie Finder</h1>
          </div>
        Type Movie name:&nbsp;<input type="text" onChange={this.changeSearch}/>
        <Content search = {this.state.searchName}/>

      </div>
    );
  }
}

export default App;
