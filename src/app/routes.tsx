
import * as React from 'react';
import * as Router from 'react-router';
import { Route, IndexRoute } from 'react-router';

import AppFrame from './views/AppFrame';
import NotFoundView from './views/NotFoundView';
import HomeView from './views/HomeView';
import AboutView from './views/AboutView';

var routeMap = (
    <Route path="/" component={AppFrame}>
        <IndexRoute component={HomeView}/>
        <Route path="/about" component={AboutView}/>
        <Route path="*" component={NotFoundView} />
    </Route>
);

export default routeMap;
