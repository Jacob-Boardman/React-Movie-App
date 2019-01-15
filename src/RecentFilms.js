import React, { Component } from 'react'
import './Film.css';

class RecentFilm extends Component {

    

    render() {
        return (
            <div className="films">
                <div>
                    Searched for:&nbsp; NaN
                    </div>
                <form className="movieData">
                    <p className="title">Title:&nbsp;{this.props.recent.Title}</p>
                    <p className="year">Year Released:&nbsp;{this.props.recent.Year}</p>
                </form>
                <p className="poster"><img src={this.props.recent.Poster}/></p>
                

            </div>
        );
    }
}

export default RecentFilm;