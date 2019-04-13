import React, { Component } from 'react';
import './App.css';
import Movie from "./Movie";


class App extends Component {
    //Render : componentWillMount -> render() -> componentDidMount()
    //Update : componentWillReceivePros() -> shouldComponentUpdate() -> componentWillUpdate() -> render -> component
    state = {}

    componentWillMount() {}
    componentDidMount(){
        this._getMovies();
    } 

    _renderMovies = () => {
        const movies = this.state.movies.map((movie, index) => {
            return <Movie
                title = {movie.title_english}
                poster = {movie.medium_cover_image}
                key = {movie.id}
                genres = {movie.genres}
                synopsis = {movie.synopsis}
            />
        })
        
        return movies
    }

    _getMovies = async () => {
        const movies = await this._callAPI();
        this.setState({
            movies
        })
    }

    _callAPI = () => {
        return fetch("https://yts.am/api/v2/list_movies.json?sort_by=rating&sort_by=like_count")
        .then(potato => potato.json())
        .then(json => json.data.movies)
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="App">
                {this.state.movies ? this._renderMovies() : "Loading"}
            </div>    
        );
    }
}

export default App;
