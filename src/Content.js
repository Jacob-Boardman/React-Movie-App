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
            recentSearches: ""
        }
    }

    getfilms = () => {
        axios.get('http://www.omdbapi.com/?s=' + this.props.search + '&apikey=843849e3&').then(response => {
            this.setState({ films: response.data});
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
        if(this.state.films) {
            recentMovies.push(<RecentFilms recent = {this.state.films.Search[0]} />)
        }

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
                        {recentMovies}
                    </div>
                </div>

            </div>
        );
    }
}

export default Content;
