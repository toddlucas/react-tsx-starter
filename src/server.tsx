/// <reference path="../typings/tsd.d.ts"/>

import express = require('express');
import http = require('http');
import path = require('path');
import React = require('react');
import * as ReactDOMServer from 'react-dom/server';
import Router = require('react-router');

import routes from './app/routes';

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'vash');

var min = '';

// development only
if ('development' == app.get('env')) {
    //app.use(express.errorHandler());
}

app.use(express.static(path.join(__dirname, '.')));

app.get('/help', function (req, res) {
    res.render('help', { title: 'Help', min: min });
})

app.use(function(req, res, next) {
    Router.run(routes, req.path, function(Handler, state) {
        var html = ReactDOMServer.renderToString(<Handler />);
        return res.render('main', { content: html, title: 'Home', min: min });
    });
});

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
