import { HeaderActionTypes } from '../actions/types';
import { HeaderState, NavLink } from './../types/index';
import { CHANGE_APP_NAME } from './../constants/index';

const INITIAL_STATE: HeaderState = {
    appName: 'MyMovies',
    navLinks: [
        { id: '1', title: 'Home', path: '/' } as NavLink,
        { id: '2', title: 'Counter', path: '/Counter' } as NavLink,
    ]
};

const headerReducer = (state = INITIAL_STATE, action: HeaderActionTypes): HeaderState => {
    switch (action.type) {
        case CHANGE_APP_NAME:
            return { ...state, appName: action.payload };
        default:
            return state;
    }
}

export default headerReducer;