import Hello from '../components/Hello/Hello';
import * as actions from '../actions/';
import { StoreState } from '../types/index';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { EnthusiasmAction } from '../actions/types';

const mapStateToProps = (state: StoreState) => {
    const { enthusiasm } = state;
    debugger
    return {
        enthusiasmLevel: enthusiasm.enthusiasmLevel,
        name: enthusiasm.languageName,
    }
}

const mapDispatchToProps = (dispatch: Dispatch<EnthusiasmAction>) => {
    return {
        onIncrement: () => dispatch(actions.incrementEnthusiasm()),
        onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);