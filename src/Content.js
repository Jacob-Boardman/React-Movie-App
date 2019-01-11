import React, { Component } from 'react';
import './Content.css';
import axios from 'axios';
import Film from './Film.js';
import RecentFilm from './RecentFilms.js';

class Content extends Component {
    constructor() {
        super();
        this.state = {
            films: "",
            recentSearches: ""
        }
    }

    getfilms = () => {
        
        let recentmovies = this.state.recentSearches;
        axios.get('http://www.omdbapi.com/?s=' + this.props.search + '&apikey=843849e3&').then(response => {
            recentmovies.push(response.data.Search[0]);
            this.setState({ films: response.data,
            recentSearches: recentmovies});
            console.log(recentmovies);
            console.log(this.state.recentSearches);
        })
    }

    render() {
        let filmList = [];
        if (!(this.state.films.Error) && (this.state.films)) {
            for (let i of this.state.films.Search) {
                filmList.push(<Film film={i} />)
            }
        }

        let recentMovies= [];

        let texty = "Too many results, Please refine search";

        return (
            <div className="content">
                <button onClick={this.getfilms} className="findFilmBt">Find Films</button>
                <p>{this.state.films.Error === "Too many results." ? texty : null}</p>
                <div className="grid-container">
                    <div className="filmList">
                        <h2>Current Search {this.props.search}</h2>
                        {filmList}
                    </div>

                    <div className="recentSearch">
                        <h2>Recent Searches</h2>
                        {this.state.recentSearches != ""? <RecentFilm recent = {this.state.recentSearches}/> : null}
                    </div>
                </div>

            </div>
        );
    }
}

export default Content;
