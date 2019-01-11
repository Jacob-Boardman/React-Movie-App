import React, { Component } from 'react';
import './App.css';
import Content from './Content.js';
import Reel from './film-reel.png'

class App extends Component {

  constructor() {
    super();
    this.state ={
      searchName: ''
    }

  // this.changeSearch = this.changeSearch.bind(this);
  }

  changeSearch = (event) => {
    this.setState({searchName: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <img src ={Reel} alt="Reel" className="logo"/>
        <div className = "header">
          <h1>Movie Finder</h1>
      </div>
        
        <h2> Type Movie name&nbsp; </h2><input type="text" onChange={this.changeSearch} placeholder="Enter a movie name... "/>
        <Content search = {this.state.searchName}/>

      </div>
    );
  }
}

export default App;
