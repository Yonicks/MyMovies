import { combineReducers } from 'redux';
import enthusiasmReducer from './enthusiasmReducer';


export default combineReducers({
    enthusiasm: enthusiasmReducer,
});