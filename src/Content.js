import React, { Component } from 'react';
import './Content.css';
import axios from 'axios';
import Film from './Film.js';

class Content extends Component {
    constructor() {
        super();
        this.state = {
            films: false
        }

        this.getfilms = this.getfilms.bind(this);
    }

    getfilms() {
        axios.get('http://www.omdbapi.com/?s=' + this.props.search + '&apikey=843849e3&').then(response => {
            this.setState({ films: response.data });
            console.log(response.data.Search);
        })
    }

    render() {
        let filmList = [];
        if (this.state.films) {
            for (let i of this.state.films.Search) {
                filmList.push(<Film film={i} />)
            }

        }
        return (
            <div className="content">
                <button onClick={this.getfilms} className="findFilmBt">Find Films</button>


                <div>
                    {filmList}
                </div>

            </div>
        );
    }
}

export default Content;
