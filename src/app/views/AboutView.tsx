
import * as React from 'react';
import { Dispatch } from 'redux';
import { connect, DispatchProp } from 'react-redux';
import {
    incrementCounter,
    decrementCounterAsync
} from '../actions/immediate';
import { StoreState } from '../store';

interface OwnProps {
    title: string;
}

interface StateProps {
    loaded: boolean;
    counter: number;
}

interface DispatchProps {
    increment: () => void;
    decrementAsync: () => void;
}

type Props = OwnProps & StateProps & DispatchProps;

class AboutView extends React.Component<Props, {}> {
    constructor(props: Props) {
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

function mapStateToProps(storeState: StoreState, ownProps: OwnProps): StateProps {
    return {
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
