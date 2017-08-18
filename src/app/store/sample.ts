
import { Action } from 'redux';
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/immediate';

export interface SampleState {
    counter: number;
}

export default function sampleReducer(
    state: SampleState = {
        counter: 0
    },
    action: Action): SampleState {

    switch (action.type) {
    case INCREMENT_COUNTER:
        // Using a polyfill
        return Object.assign({}, state, { counter: state.counter + 1 });
    case DECREMENT_COUNTER:
        // Using the spread operator
        return {
            ...state,
            counter: state.counter - 1
        };
    }
    return state;
}
