
import { Store } from 'redux';

import { ISampleState } from './sample';

//
// Store interfaces
//
// The interfaces may be used by reducers to help enforce type safety.
// They may also be used by components that have state mappers that
// subscribe to store changes.
//

export interface IState {
    sample: ISampleState;
}

export interface IStoreContext { store: Store }

export { default as sample } from './sample';
