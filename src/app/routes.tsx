
import * as React from 'react';
import * as Router from 'react-router';

import EmptyFrame from './views/EmptyFrame';
import NotFoundView from './views/NotFoundView';
import HomeView from './views/HomeView';
import AboutView from './views/AboutView';

let { Route, DefaultRoute, NotFoundRoute,
      Redirect, Link } = Router;

var routeMap: Router.Route = (
    <Route path="/" handler={EmptyFrame}>
        <DefaultRoute handler={HomeView}/>
        <Route path="/about" handler={AboutView}/>
        <NotFoundRoute handler={NotFoundView} />
    </Route>
);

export default routeMap;
