import * as constants from '../constants';
import { DecrementEnthusiasm, IncrementEnthusiasm } from './types';

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

