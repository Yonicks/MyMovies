import * as constants from '../constants';
import { DecrementEnthusiasm, IncrementEnthusiasm, MoviesActionTypes } from './types';
import { Dispatch } from 'react';
import theMovieDB from '../apis/theMovieDB';
import { apiKey } from './../apis/theMovieDB';

export const incrementEnthusiasm = (): IncrementEnthusiasm => {
    return {
        type: constants.INCREMENT_ENTHUSIASM
    };
}

export const decrementEnthusiasm = (): DecrementEnthusiasm => {
    return {
        type: constants.DECREMENT_ENTHUSIASM
    };
}




export const fetchTopRatedMovies = (page: number = 1) => async (dispatch: Dispatch<MoviesActionTypes>) => {
    const response = await theMovieDB.get(`top_rated?api_key=${apiKey}&language=en-US&page=${page}`);
    dispatch({ type: constants.FETCH_TOP_RATED_MOVIES, payload: response.data });
}

export const fetchNowPlayingMovies = (page: number = 1) => async (dispatch: Dispatch<MoviesActionTypes>) => {
    const response = await theMovieDB.get(`now_playing?api_key=${apiKey}&language=en-US&page=${page}`);
    dispatch({ type: constants.FETCH_NOW_PLAYING_MOVIES, payload: response.data });
}

export const fetchPopularMovies = (page: number = 1) => async (dispatch: Dispatch<MoviesActionTypes>) => {
    const response = await theMovieDB.get(`popular?api_key=${apiKey}&language=en-US&page=${page}`);
    dispatch({ type: constants.FETCH_POPULAR_MOVIES, payload: response.data });
}

export const fetchUpcomingMovies = (page: number = 1) => async (dispatch: Dispatch<MoviesActionTypes>) => {
    const response = await theMovieDB.get(`upcoming?api_key=${apiKey}&language=en-US&page=${page}`);
    dispatch({ type: constants.FETCH_UPCOMING_MOVIES, payload: response.data });
}

export const fetchMovieDetails = (id: string) => async (dispatch: Dispatch<MoviesActionTypes>) => {
    const response = await theMovieDB.get(`/${id}?api_key=${apiKey}&language=en-US`);
    dispatch({ type: constants.FETCH_MOVIE_DETAILS, payload: response.data });
}