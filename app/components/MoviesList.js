import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import MovieItem from './MovieItem';
import { deleteMovie, updateMovie } from '../actions';

const MoviesList = (movies, onDeleteMovie, onEditMovie) => {
    const handleEdit = (movieId) => {
        onEditMovie(movies, movieId);
    };

    const handleDelete = (movieId) => {
        onDeleteMovie(movies, movieId);
    };

    let list = [];

    if (Object.keys(movies.movies).length) {
        movies.movies.forEach((movie) => {
            list.push(
                <MovieItem
                    key={movie.name}
                    movie={ movie }
                    handleEdit={ (movieId) => handleEdit(movieId) }
                    handleDelete={ (movieId) => handleDelete(movieId) }
                />
            );
        });
    }
    return <div> {list} </div>;
};

MoviesList.propTypes = {
    movies: PropTypes.object,
    onDeleteMovie: PropTypes.func,
    onEditMovie: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        movies: state.movieCollectionReducer.movies
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteMovie: (movies, movieId) => dispatch(deleteMovie(movies, movieId)),
        onEditMovie: (movies, movieId) => dispatch(updateMovie(movies, movieId)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MoviesList);
