import React, { Component } from 'react'
import './Film.css';

class Film extends Component {


    render() {
        return (
            <div className="films">
                <form className="movieData">
                    <p className="title">Title:&nbsp;{this.props.recent.Title}</p>
                    <p className="year">Year Released:&nbsp;{this.props.recent.Year}</p>
                </form>
                <p className="poster"><img src={this.props.recent.Poster}/></p>
                {console.log(this.props.recent[0].Title)}

            </div>
        );
    }
}

export default Film;