
import * as React from 'react';
import { incrementCounter } from '../actions/immediate';
import { IStore, IStoreContext } from '../reducers';

export interface IAboutState {
    loaded: boolean,
    counter?: number
}

// The mapping function tailors the store's state to the view's state.
function mapStateFromStore(store: IStore): IAboutState {
    return { 
        loaded: true,
        counter: store.sample.counter
    };
}

export default class AboutView extends React.Component<any, IAboutState> {
    static contextTypes: React.ValidationMap<any> = {
        store: React.PropTypes.object
    }
    
    context: IStoreContext;
    unsubscribe: Function;

    constructor(props: any) {
        super(props);
        this.state = { loaded: false };
    }
    
    componentDidMount() {
        // This helper wraps common code so we can initialze state and then subscribe.
        this.setStateFromStore();
            
        this.unsubscribe = this.context.store.subscribe(this.setStateFromStore.bind(this));
    }
    
    componentWillUnmount() {
        if (this.unsubscribe) {
            this.unsubscribe();
        }
    }
    
    setStateFromStore() {
        this.setState(mapStateFromStore(this.context.store.getState()));
    }
    
    incrementCounter() {
        this.context.store.dispatch(incrementCounter());
    }
    
    render() {
        var loading = this.state.loaded ? "" : " (loading...)";
        return <div>
            <h1>About {loading}</h1>
            <p>
                This project includes a working example of React, React Router, and TypeScript.
                It is <a href="https://github.com/toddlucas/react-tsx-starter">hosted on Github</a>.
            </p>
            
            <h2>Redux example</h2>
            <p>
                This counter uses actions to update the store.
                This sample uses interfaces to give the store a typed shape.
                The reducers and mapping functions use these interfaces to help preserve that shape.
                This typing information flows from the store to each component's state, making it easier to avoid errors.
            </p>
            <p>Count: {this.state.counter}</p>
            <p>
                <button onClick={this.incrementCounter.bind(this)}>Increment now</button>
            </p>
        </div>;
    }
}
