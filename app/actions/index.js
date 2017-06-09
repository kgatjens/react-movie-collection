import * as types from './types';

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
    console.log('movies', movies);
    console.log('newMovie', newMovie);
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

export function updateMovie(movie) {
    return {
        type: types.UPDATE_MOVIE,
        movie
    };
}

export function deleteMovie(movieId) {
    return {
        type: types.DELETE_MOVIE,
        movieId
    };
}
