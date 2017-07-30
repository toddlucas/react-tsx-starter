
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { RouteMap } from './app/routes';

ReactDOM.render(
    <BrowserRouter>
        <RouteMap />
    </BrowserRouter>,
    document.getElementById('body'));
