
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router } from 'react-router';
import * as History from 'history';
import routes from './routes';

let history = History.createHistory();

ReactDOM.render(<Router history={history}>{routes}</Router>, document.getElementById('body'));
