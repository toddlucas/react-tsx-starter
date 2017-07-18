import * as express from 'express';
import * as errorHandler from 'errorhandler';
import * as http from 'http';
import * as path from 'path';
import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router'

import MainPage from './pages/MainPage';
import { RouteMap } from './app/routes';

const app = express();

app.set('port', process.env.PORT || 3000);

const env = process.env.NODE_ENV || 'development';
let min = true;

if ('development' == env) {
    console.log('Running in development mode')
    app.use(errorHandler()); 
    min = false;
}

app.use(express.static(path.join(__dirname, '.')));

app.use(function(req, res, next) {
    let content = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={{}}>
            <RouteMap/>
        </StaticRouter>
    );

    let html = ReactDOMServer.renderToString(
        <MainPage content={content} min={min} />
    );

    res.write('<!DOCTYPE html>\r\n' + html);
    res.end();
});

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
