import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import MovieItem from './MovieItem';
import { getAllMovies, readMovie, deleteMovie, loadMovieForm } from '../actions';

const MoviesList = ({ movies, onDeleteMovie, onReadMovie, onGetAllMovies, onLoadMovieForm }) => {
    const handleEdit = (movieId) => {
        onReadMovie(movies, movieId);
        onLoadMovieForm();
    };

    const handleDelete = (movieId) => {
        onDeleteMovie(movies, movieId);
        onGetAllMovies();
    };

    const list = [];

    if (Object.keys(movies).length) {
        movies.forEach((movie) => {
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
    movieObj: PropTypes.object,
    onGetAllMovies: PropTypes.object,
    onReadMovie: PropTypes.func,
    onDeleteMovie: PropTypes.func,
    onUpdateMovie: PropTypes.func,
    onLoadMovieForm: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        movies: state.movieCollectionReducer.movies,
        movieObj: state.movieCollectionReducer.movieObj,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onGetAllMovies: () => dispatch(getAllMovies()),
        onDeleteMovie: (movies, movieId) => dispatch(deleteMovie(movies, movieId)),
        onReadMovie: (movies, movieId) => dispatch(readMovie(movies, movieId)),
        onLoadMovieForm: () => dispatch(loadMovieForm())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MoviesList);
