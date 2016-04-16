
import * as React from 'react';

export default class AppFrame extends React.Component<any, any> {
    render() {
        return <div>
            <h1>App</h1>
            {this.props.children}
        </div>;
    }
}
