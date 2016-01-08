
import * as React from 'react';
import { incrementCounter } from '../actions/immediate';
import { IState, IStoreContext } from '../reducers';

export interface IAboutState {
    loaded: boolean,
    counter: number
}

function mapStoreToState(state: IState): IAboutState {
    return { 
        loaded: true,
        counter: state.sample.counter
    };
}

export default class AboutView extends React.Component<IAboutState, any> {
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
        var state = mapStoreToState(this.context.store.getState());
        this.setState(state);
            
        this.unsubscribe = this.context.store.subscribe(() => {
            var state = mapStoreToState(this.context.store.getState());
            this.setState(state);
        });
    }
    
    componentWillUnmount() {
        if (this.unsubscribe) {
            this.unsubscribe();
        }
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
            <p>Count: {this.state.counter}</p>
            <p>
                <button onClick={this.incrementCounter.bind(this)}>Increment now</button>
            </p>
        </div>;
    }
}
