
import * as React from 'react';

export interface HelloProps {
    name: string;
}

export const Hello = (props: HelloProps) => <p>Hello, {props.name}!</p>;
