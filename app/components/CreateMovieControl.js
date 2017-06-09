import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createMovie } from '../actions';

const CreateMovieControl = ({ movies, onCreateMovie }) => {
    const movieObj = { 'name': '', 'genre': '', 'image': '' };

    const handleClick = () => {
        onCreateMovie(movies, movieObj);
        this.refs.movieName.value = '';
        this.refs.movieGenre.value = '';
        this.refs.movieImage.value = '';
    };

    const handleChange = (event) => {
        console.log('event', event);

        const target = event.target;
        const value = target.value;
        const name = target.name;
        const reader  = new FileReader();
        const previewImg = document.querySelector('#previewImg');

        reader.addEventListener('load', () => {
            previewImg.src = movieObj.image = reader.result;
        }, false);

        if (name === 'movieName') {
            movieObj.name = value;
        } else if (name === 'movieGenre') {
            movieObj.genre = value;
        } else if (name === 'movieImage' && target.files.length) {
            reader.readAsDataURL(target.files[0]);
        }

        console.log('movieObj', movieObj);
    };

    return (
      <div>
        <img width="150" id="previewImg" />
        <div>
          <label htmlFor="movieName">Name</label>
          <input type="text" name="movieName" id="movieName" onChange={handleChange} ref={elem => {this.movieName = elem;}} />
          <label htmlFor="movieGenre">Genre</label>
          <input type="text" name="movieGenre" id="movieGenre" onChange={handleChange} ref={elem => {this.movieGenre = elem;}} />
          <label htmlFor="movieImage">Image</label>
          <input type="file" name="movieImage" id="movieImage" accept="image/*" onChange={handleChange} ref={elem => {this.movieImage = elem;}} />
          <button name="createMovieSubmit" id="createMovieSubmit" onClick={handleClick}>Add Movie</button>
        </div>
    </div>
    );
};

CreateMovieControl.propTypes = {
    onCreateMovie: PropTypes.func,
    movies: PropTypes.object
};

const mapStateToProps = (state) => {
    return {
        movies: state.movieCollectionReducer.movies
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onCreateMovie: (movies, newMovie) => dispatch(createMovie(movies, newMovie))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateMovieControl);
