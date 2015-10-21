
import * as React from 'react';
import { RouteHandler } from 'react-router';

export default class EmptyFrame extends React.Component<any, any> {
    render() {
        return <RouteHandler {...this.props}/>;
    }
}
