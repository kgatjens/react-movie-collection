import React, { PropTypes } from 'react';
import { movieContainer } from '../styles/movieContainer.scss';

const MovieItem = ({ movie, handleEdit, handleDelete }) =>
    <div className={movieContainer} id={`movieId${movie.id}`}>
        <img src={movie.image} />
        <p>{movie.name} - {movie.genre} </p>
        <button onClick={() => handleEdit(movie.id)}>Edit</button>
        <button onClick={() => handleDelete(movie.id)}>Delete</button>
    </div>;

MovieItem.propTypes = {
    movie: PropTypes.object,
    handleEdit: PropTypes.func,
    handleDelete: PropTypes.func
};

export default MovieItem;
