
import { MoviesListResponse } from '../types';
import { DECREMENT_ENTHUSIASM, INCREMENT_ENTHUSIASM, CHANGE_APP_NAME, FETCH_TOP_RATED_MOVIES, FETCH_NOW_PLAYING_MOVIES, FETCH_UPCOMING_MOVIES, FETCH_POPULAR_MOVIES } from './../constants/index';

export interface IncrementEnthusiasm {
    type: typeof INCREMENT_ENTHUSIASM;
}

export interface DecrementEnthusiasm {
    type: typeof DECREMENT_ENTHUSIASM;
}

export type EnthusiasmActionTypes = IncrementEnthusiasm | DecrementEnthusiasm;

// HEADER
// ------

export interface ChangeAppName {
    type: typeof CHANGE_APP_NAME;
    payload: string;
}

export type HeaderActionTypes = ChangeAppName;


// MOVIES
// ------
export interface FetchTopRatedMovies {
    type: typeof FETCH_TOP_RATED_MOVIES;
    payload: MoviesListResponse,
}

export interface FetchNowPlayingMovies {
    type: typeof FETCH_NOW_PLAYING_MOVIES;
    payload: MoviesListResponse,
}


export interface FetchPopularMovies {
    type: typeof FETCH_POPULAR_MOVIES;
    payload: MoviesListResponse,
}


export interface FetchUpcomingMovies {
    type: typeof FETCH_UPCOMING_MOVIES;
    payload: MoviesListResponse,
}


export type MoviesActionTypes = FetchTopRatedMovies | FetchNowPlayingMovies | FetchPopularMovies | FetchUpcomingMovies;