import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Stars from './Stars';

class MovieThumbnail extends React.Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        const { movie } = this.props;

        return (
        <div className="movie-thumbnail-title" onClick={ this.handleClick }>
            <div className="title"> <small> { movie.title } </small></div>
            <div className="likes">
                <span className="thumb"> <i className="fa fa-thumbs-o-up" aria-hidden="true"></i></span>
                <span className="thumb"> <i className="fa fa-thumbs-o-down" aria-hidden="true"></i></span>
                    <small>likes</small>
                    <hr/>
                <small>{movie.likes}</small>
                </div>
            <img className="image" src= {movie.posterUrl} alt="poster"/>
            <div className="clear"></div>
            <div className="stars"><Stars stars={movie.stars} /></div>

            <div></div>

        </div>);
    }

    handleClick() {
        this.props.onClick(this.props.movie);
    }
}

MovieThumbnail.propTypes = {
    movie: PropTypes.object.isRequired,
    onClick: PropTypes.func
};

export default MovieThumbnail;