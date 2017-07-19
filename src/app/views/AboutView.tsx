
import * as React from 'react';
import { Dispatch } from 'redux';
import { connect, DispatchProp } from 'react-redux';
import { 
    incrementCounter, 
    decrementCounterAsync
} from '../actions/immediate';
import { StoreState } from '../store';

export interface StateProps {
    title: string;
    loaded: boolean;
    counter: number;
}

export interface DispatchProps {
    increment: () => void;
    decrementAsync: () => void;
}

export class AboutView extends React.Component<StateProps & DispatchProps & OwnProps, {}> {
    constructor(props: StateProps & DispatchProps & OwnProps) {
        super(props);
    }
    
    render() {
        var loading = this.props.loaded ? "" : " (loading...)";
        return <div>
            <h2>About {loading}</h2>
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
            <p>Count: {this.props.counter}</p>
            <p>
                <button onClick={this.props.increment}>Increment now</button>
                <button onClick={this.props.decrementAsync}>Decrement later</button>
            </p>
        </div>;
    }
}

export interface OwnProps {
    title: string;
}

function mapStateToProps(storeState: StoreState, ownProps: OwnProps): StateProps {
    return {
        title: ownProps.title,
        loaded: true,
        counter: storeState.sample.counter
    };
}

function mapDispatchToProps(dispatch: Dispatch<StoreState>): DispatchProps {
    return {
        increment: () => dispatch(incrementCounter()),
        decrementAsync: () => dispatch(decrementCounterAsync())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutView);
