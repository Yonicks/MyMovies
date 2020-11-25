
import { DECREMENT_ENTHUSIASM, INCREMENT_ENTHUSIASM, CHANGE_APP_NAME } from './../constants/index';
export interface IncrementEnthusiasm {
    type: typeof INCREMENT_ENTHUSIASM;
}

export interface DecrementEnthusiasm {
    type: typeof DECREMENT_ENTHUSIASM;
}

export type EnthusiasmActionTypes = IncrementEnthusiasm | DecrementEnthusiasm;


export interface ChangeAppName {
    type: typeof CHANGE_APP_NAME;
    payload: string;
}

export type HeaderActionTypes = ChangeAppName;