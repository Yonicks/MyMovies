import { combineReducers } from 'redux';
import enthusiasmReducer from './enthusiasmReducer';
import headerReducer from './headerReducer';


export default combineReducers({
    enthusiasm: enthusiasmReducer,
    header: headerReducer,
});