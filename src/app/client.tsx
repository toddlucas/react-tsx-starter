
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { RouteMap } from './routes';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter><RouteMap /></BrowserRouter>
    </Provider>,
    document.getElementById('body'));
