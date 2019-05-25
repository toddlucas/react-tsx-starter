
import { Action, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { StoreState } from '../store';

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export function incrementCounter(): Action {
    return {
        type: INCREMENT_COUNTER
    };
}

export function decrementCounter(state: StoreState): Action {
    return {
        type: DECREMENT_COUNTER
    };
}

export function decrementCounterAsync(): ThunkAction<Promise<void>, StoreState, null, Action> {
    return async (dispatch: Dispatch<Action<StoreState>>, getState: () => StoreState) => {
        setTimeout(() => {
            dispatch(decrementCounter(getState()));
        }, 1000);
    };
}
