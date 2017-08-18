
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { default as sample, SampleState } from './sample';

//
// Store interfaces
//
// The interfaces may be used by reducers to help enforce type safety.
// They may also be used by components that have state mappers that
// subscribe to store changes.
//

export interface StoreState {
    sample: SampleState;
}

const rootReducer = combineReducers<StoreState>({
    sample
});

// Load initial state on the client.
let preloadedState: StoreState;
if (typeof window !== 'undefined') {
    preloadedState = window.__PRELOADED_STATE__;
}

const store = createStore(rootReducer, preloadedState, applyMiddleware(thunk));

if (process.env.NODE_ENV === "development") {
    store.subscribe(() =>
        // Log the state whenever the store changes.
        console.log(store.getState())
    );
}

export default store;
