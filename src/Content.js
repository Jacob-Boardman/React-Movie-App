import React, { Component } from 'react';
import './Content.css';
import axios from 'axios';
import Film from './Film.js';
import RecentFilms from './RecentFilms.js';

class Content extends Component {
    constructor() {
        super();
        this.state = {
            films: "",
            recentSearches: "",
            recentMovies: []
        }
    }

    getfilms = () => {
        axios.get('http://www.omdbapi.com/?s=' + this.props.search + '&apikey=843849e3&').then(response => {
            this.setState({ films: response.data });
            this.addRecent();
        })
    }

    addRecent = () => {
        if (this.state.films.Search) {
            let newMovies = this.state.recentMovies;
            newMovies.splice(0, 0, this.state.films.Search[0]);
            if (newMovies.length > 4) {
                newMovies.pop();
            }            
            this.setState({ recentMovies: newMovies });
        }
    }

    render() {
        let filmList = [];
        if (!(this.state.films.Error) && (this.state.films)) {
            for (let i of this.state.films.Search) {
                filmList.push(<Film film={i} />)
            }
        }

        let texty = "Too many results, Please refine search";
        console.log(this.state.recentMovies);
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
                        {this.state.recentMovies.map((recentFilm) => <RecentFilms recent={recentFilm} searched={this.props.search} />)}
                    </div>
                </div>

            </div>
        );
    }
}

export default Content;
