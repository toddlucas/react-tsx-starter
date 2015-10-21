
import * as React from 'react';

export interface HelloProps {
    name: string;
}

export default class Hello extends React.Component<HelloProps, any> {
    constructor(props: HelloProps) {
        super(props);
    }

    render() {
        return <p>Hello, {this.props.name}!</p>;
    }
}
