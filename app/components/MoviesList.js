import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import MovieItem from './MovieItem';

const MoviesList = (movies) => {
    let list = [];

    if (Object.keys(movies.movies).length) {
        movies.movies.forEach((movie) => {
            list.push(
                <MovieItem key={movie.name} movie={ movie } />
            );
        });
    }
    return <div> {list} </div>;
};

MoviesList.propTypes = {
    movies: PropTypes.object
};

const mapStateToProps = (state) => {
    return {
        movies: state.movieCollectionReducer.movies
    };
};

export default connect(
    mapStateToProps
)(MoviesList);
