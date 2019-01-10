import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';

class Content extends Component {
    constructor() {
    super();
    this.state ={
      films: [],
    }

    this.getfilms = this.getfilms.bind(this);
}  

getfilms(){
    
}

  render() {
    return (
      <div >
        <p>BLEGH</p>
      </div>
    );
  }
}

export default Content;
