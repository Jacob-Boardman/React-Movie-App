import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class Content extends Component {
    constructor() {
    super();
    this.state ={
      films: ""
    }

    this.getfilms = this.getfilms.bind(this);
}  

getfilms(){
    axios.get('http://www.omdbapi.com/?t='+this.props.search+'&apikey=843849e3&').then(response=>{
        this.setState({films: response.data});
        console.log(response.data);
    })
}

  render() {
    return (
      <div >

        <button onClick={this.getfilms}>Find Films</button>

        <div className="movieData">
            <p className="title">{this.state.films['Title']}</p>
            <p className="year">{this.state.films['Year']}</p>
            <p className="rating">{this.state.films['Rated']}</p>
            <p className="Description">{this.state.films['Plot']}</p>
            <p className="poster"><img src={this.state.films['Poster']}/></p>
        </div>
        
        
      </div>
    );
  }
}

export default Content;
