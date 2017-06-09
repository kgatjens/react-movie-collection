import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import * as types from '../actions/types';

const initialState = { movies: [] };

const movieCollectionReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_ALL_MOVIES:
            return {
                ...state,
                movies: action.movies
            };
        case types.CREATE_MOVIE:
            return {
                ...state,
                movies: action.movies
            };
        case types.READ_MOVIE:
            return {
                ...state
            };
        case types.UPDATE_MOVIE:
            return {
                ...state
            };
        case types.DELETE_MOVIE:
            return {
                ...state
            };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    movieCollectionReducer,
    routing
});

export default rootReducer;
