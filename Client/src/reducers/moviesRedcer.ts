import { MoviesActionTypes } from '../actions/types';
import { MoviesCollectionsState } from './../types/index';
import { FETCH_TOP_RATED_MOVIES, FETCH_NOW_PLAYING_MOVIES, FETCH_POPULAR_MOVIES, FETCH_UPCOMING_MOVIES } from './../constants/index';
import { MoviesListResponse } from '../types';
const INITIAL_STATE: MoviesCollectionsState = {
    top_rated: {} as MoviesListResponse,
    now_playing: {} as MoviesListResponse,
    popular: {} as MoviesListResponse,
    upcoming: {} as MoviesListResponse,
};

const movieReducer = (state = INITIAL_STATE, action: MoviesActionTypes): MoviesCollectionsState => {
    switch (action.type) {
        case FETCH_TOP_RATED_MOVIES:
            return { ...state, top_rated: action.payload };
        case FETCH_NOW_PLAYING_MOVIES:
            return { ...state, now_playing: action.payload };
        case FETCH_POPULAR_MOVIES:
            return { ...state, popular: action.payload };
        case FETCH_UPCOMING_MOVIES:
            return { ...state, upcoming: action.payload };
        default:
            return state;
    }
}

export default movieReducer;