
import * as React from 'react';

export default class EmptyFrame extends React.Component<any, any> {
    render() {
        // Pass down any props by merging them with those of the children.
        return React.cloneElement(this.props.children, this.props);
    }
}
