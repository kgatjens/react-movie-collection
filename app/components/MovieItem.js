import React, { PropTypes } from 'react';

const MovieItem = ({ movie }) =>
    <div>
        <img width="150" src={movie.image} />
        <p>{movie.name} - {movie.genre} </p>
    </div>;

MovieItem.propTypes = {
    movie: PropTypes.object
};

export default MovieItem;
