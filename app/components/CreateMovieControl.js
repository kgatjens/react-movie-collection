import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createMovie, getAllMovies } from '../actions';
import { createMovieForm } from '../styles/createMovieForm.scss';

const CreateMovieControl = ({ movies, onCreateMovie, onGetAllMovies, loadMovieForm, loadMovieObj }) => {
    const initialMovieObj = { 'name': '', 'genre': '', 'image': '', 'id': '' };
    let movieObj = initialMovieObj;
    let jsxForm = null;

    const handleClick = () => {
        movieObj.id = Date.now();
        onCreateMovie(movies, movieObj);
        document.querySelector('#movieName').value = '';
        document.querySelector('#movieGenre').value = '';
        document.querySelector('#movieImage').value = '';
        onGetAllMovies();
        movieObj = initialMovieObj;
    };

    const handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        const reader  = new FileReader();

        reader.addEventListener('load', () => {
            movieObj.image = reader.result;
        }, false);

        if (name === 'movieName') {
            movieObj.name = value;
        } else if (name === 'movieGenre') {
            movieObj.genre = value;
        } else if (name === 'movieImage' && target.files.length) {
            reader.readAsDataURL(target.files[0]);
        }
    };

    if (loadMovieForm) {
        jsxForm = (<div className={createMovieForm}>
                      <label htmlFor="movieName">Name</label>
                      <input type="text" value={loadMovieObj.name} name="movieName" id="movieName" onChange={handleChange} />
                      <label htmlFor="movieGenre">Genre</label>
                      <input type="text" value={loadMovieObj.genre} name="movieGenre" id="movieGenre" onChange={handleChange} />
                      <label htmlFor="movieImage">Image</label>
                      <input type="file" value={loadMovieObj.image} name="movieImage" id="movieImage" accept="image/*" onChange={handleChange} />
                      <button name="createMovieSubmit" id="createMovieSubmit" onClick={handleClick}>Add Movie</button>
                    </div>);
    } else {
        jsxForm = (<div className={createMovieForm}>
                    <label htmlFor="movieName">Name</label>
                    <input type="text" name="movieName" id="movieName" onChange={handleChange} />
                    <label htmlFor="movieGenre">Genre</label>
                    <input type="text" name="movieGenre" id="movieGenre" onChange={handleChange} />
                    <label htmlFor="movieImage">Image</label>
                    <input type="file" name="movieImage" id="movieImage" accept="image/*" onChange={handleChange} />
                    <button name="createMovieSubmit" id="createMovieSubmit" onClick={handleClick}>Add Movie</button>
                  </div>);
    }

    return jsxForm;
};

CreateMovieControl.propTypes = {
    onCreateMovie: PropTypes.func,
    onGetAllMovies: PropTypes.func,
    movies: PropTypes.object,
    loadMovieForm: PropTypes.object,
    loadMovieObj: PropTypes.object
};

const mapStateToProps = (state) => {
    return {
        movies: state.movieCollectionReducer.movies,
        loadMovieForm: state.movieCollectionReducer.loadMovieForm,
        loadMovieObj: state.movieCollectionReducer.loadMovieObj
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onCreateMovie: (movies, newMovie) => dispatch(createMovie(movies, newMovie)),
        onGetAllMovies: () => dispatch(getAllMovies()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateMovieControl);
