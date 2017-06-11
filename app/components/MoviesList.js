import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import MovieItem from './MovieItem';
import { readMovie, updateMovie, deleteMovie } from '../actions';

const MoviesList = (movies, onDeleteMovie, onEditMovie, onReadMovie, editMovieObj) => {
    const handleEdit = (movieId) => {
        onReadMovie(movies, movieId);
        onEditMovie(movies, editMovieObj);
    };

    const handleDelete = (movieId) => {
        onDeleteMovie(movies, movieId);
    };

    const list = [];

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
    editMovieObj: PropTypes.object,
    onReadMovie: PropTypes.func,
    onDeleteMovie: PropTypes.func,
    onEditMovie: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        movies: state.movieCollectionReducer.movies,
        editMovieObj: state.movieCollectionReducer.editMovieObj,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteMovie: (movies, movieId) => dispatch(deleteMovie(movies, movieId)),
        onEditMovie: (movies, movieId) => dispatch(updateMovie(movies, movieId)),
        onReadMovie: (movies, movieId) => dispatch(readMovie(movies, movieId)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MoviesList);
