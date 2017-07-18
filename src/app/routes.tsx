
import * as React from 'react';
import { Route, Switch } from 'react-router';

import HomeView from './views/HomeView';
import AboutView from './views/AboutView';
import NotFoundView from './views/NotFoundView';

export const RouteMap = () => (
    <div>
        <Switch>
            <Route path="/" exact component={HomeView}/>
            <Route path="/about" component={AboutView}/>
            <Route component={NotFoundView} />
        </Switch>
    </div>
);
