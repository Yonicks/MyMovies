import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants/index';
import { EnthusiasmAction } from '../actions/types';
import { EnthusiasmState } from '../types';

const INITIAL_STATE = {
    enthusiasmLevel: 1,
    languageName: 'Yoni'
};

const enthusiasmReducer = (state = INITIAL_STATE, action: EnthusiasmAction): EnthusiasmState => {
    switch (action.type) {
        case INCREMENT_ENTHUSIASM:
          return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
        case DECREMENT_ENTHUSIASM:
          return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
        default:
          return state;
      }
}
export default enthusiasmReducer;