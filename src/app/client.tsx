
import * as React from 'react';
import * as Router from 'react-router';
import routes from './routes';

Router.run(routes, Router.HistoryLocation, function (Handler) {
    React.render(<Handler />, document.getElementById('body'));
});
