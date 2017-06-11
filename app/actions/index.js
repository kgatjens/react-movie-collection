import * as types from './types';
// import _ from 'lodash';

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

export function readMovie(movieId) {
    return {
        type: types.READ_MOVIE,
        movieId
    };
}

export function updateMovie(movies, movie) {
    return {
        type: types.UPDATE_MOVIE,
        movie
    };
}

export function deleteMovie(movies, movieId) {
    console.log('movies', movies);
    console.log('movieId', movieId);

    return {
        type: types.DELETE_MOVIE,
        movieId
    };
}
