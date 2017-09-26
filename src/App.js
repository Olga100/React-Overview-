import React, {Component} from 'react';
import './App.css';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';
import movies from './movies.json';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movie: movies.movies[0]
        };

        this.selectMovie = this.selectMovie.bind(this);
    }

    render() {
        return (
            <div className="App">
                <div id="movie-list-container">
                    <MovieList movies={movies.movies} onItemClick={this.selectMovie} />
                </div>
                <div id="movie-details-container">
                    <MovieDetails movie={this.state.movie}/>
                </div>
            </div>
        );
    }

    selectMovie(movie) {
        this.setState({ movie: movie });
    }
}

export default App;
