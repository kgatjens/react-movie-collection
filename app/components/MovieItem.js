import React, { PropTypes } from 'react';
import { movieContainer } from '../styles/movieContainer.scss';

const handleEdit() {

}

const handleDelete() {

}

const MovieItem = ({ movie }) =>
    <div className={movieContainer} id={`movieId${movie.id}`}>
        <img src={movie.image} />
        <p>{movie.name} - {movie.genre} </p>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
    </div>;

MovieItem.propTypes = {
    movie: PropTypes.object
};

export default MovieItem;
