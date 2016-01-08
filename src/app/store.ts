
import { createStore, combineReducers, applyMiddleware, Store } from 'redux';
import * as reducers from './reducers';

const rootReducer = combineReducers(reducers); // ES6 trick
const store = createStore(rootReducer);

store.subscribe(() =>
    // Log the state whenever the store changes.
    console.log(store.getState())
);

export interface IStoreContext { store: Store }

export default store;