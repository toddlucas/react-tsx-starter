
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Router from 'react-router';
import routes from './routes';

Router.run(routes, Router.HistoryLocation, function (Handler) {
    ReactDOM.render(<Handler />, document.getElementById('body'));
});
