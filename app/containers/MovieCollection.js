import React from 'react';
import MoviesList from '../components/MoviesList';
import CreateMovieControl from '../components/CreateMovieControl';
import { movieCollection } from '../styles/movieCollection.scss';

const MovieCollection = () => {
    return (
        <div className={movieCollection}>
            <CreateMovieControl />
            <MoviesList />
        </div>
    );
};

export default MovieCollection;
