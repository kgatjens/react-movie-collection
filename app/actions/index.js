import * as types from './types';
import _ from 'lodash';

export function getAllMovies() {
    let storageMovies = localStorage.getItem('storageMovies');

    if (storageMovies === null) {
        storageMovies = '[]';
    }

    return {
        type: types.GET_ALL_MOVIES,
        movies: JSON.parse(storageMovies)
    };
}

export function createMovie(movies, newMovie) {
    movies.push(newMovie);
    localStorage.setItem('storageMovies', JSON.stringify(movies));

    return {
        type: types.CREATE_MOVIE,
        movies
    };
}

export function readMovie(movies, movieId) {
    const loadMovieObj = _.find(movies, { id: movieId });

    return {
        type: types.READ_MOVIE,
        loadMovieObj
    };
}

export function loadMovieForm() {
    return {
        type: types.LOAD_MOVIE_FORM,
        loadMovieForm: true
    };
}

export function updateMovie(movies, newMovie) {
    const newMovies = _.map(movies, (movie) => {
        if (movie.id === newMovie.id) {
            return newMovie;
        }
        return movie;
    });
    localStorage.setItem('storageMovies', JSON.stringify(newMovies));
    return {
        type: types.UPDATE_MOVIE,
        movies: newMovies
    };
}

export function deleteMovie(movies, movieId) {
    const newMovies = _.filter(movies, (movie) => movie.id !== movieId );
    localStorage.setItem('storageMovies', JSON.stringify(newMovies));
    return {
        type: types.DELETE_MOVIE,
        movies: newMovies
    };
}
