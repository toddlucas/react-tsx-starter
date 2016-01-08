
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import * as History from 'history';
import routes from './routes';
import store from './store';

let history = History.createHistory();

ReactDOM.render(<Provider store={store}>
        <Router history={history}>{routes}</Router>
    </Provider>, 
    document.getElementById('body'));
