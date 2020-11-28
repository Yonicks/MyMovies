import { combineReducers } from 'redux';
import enthusiasmReducer from './enthusiasmReducer';
import headerReducer from './headerReducer';
import movieReducer from './moviesRedcer';


export default combineReducers({
    enthusiasm: enthusiasmReducer,
    header: headerReducer,
    movies: movieReducer,
});