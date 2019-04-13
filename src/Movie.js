import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';


class Movie extends Component{
    render(){
        return(
            <div className="Movie">
                <div className="Movie__Column">
                    <img src={this.props.poster} className="Movie__Poster" alt={this.props.title} /> 
                </div>
                <div className="Movie__Column">
                    <h1>{this.props.title}</h1>
                    {this.props.genres.map((genere, index) => <span className="Movie__Genere" key={index}>{genere}</span>)}
                    <p className="Movie__Synopsis">
                        {this.props.synopsis}
                    </p>
                </div>
            </div>
        )
    }
}
/*
Movie.propTypes = {
    title : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.array.isRequired,
    synopsis : PropTypes.string.isRequired
}
*/
export default Movie;