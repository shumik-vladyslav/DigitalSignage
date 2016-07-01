/**
 * Created by Vlad on 5/13/2016.
 */
/// <reference path="typings/express/express.d.ts" />
/// <reference path="typings/body-parser/body-parser.d.ts" />
///<reference path="typings/express-session/express-session.d.ts"/>
///<reference path="typings/cookie-parser/cookie-parser.d.ts"/>
///<reference path="users/db-users.ts"/>
"use strict";
//test
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cookie = require('cookie-parser');
var users = require('./users/index');
var user = require('./users/user');
var db_content = require('./content/manager');
var db_assets = require('./assets/manager');
var path = require('path');
///////////////////////////////////////
var app = express();
// configure our app to use bodyParser(it let us get the json data from a POST)
app.use(cookie());
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 'somesecrettokenhere'
}));
app.use('/api', bodyParser.urlencoded({ extended: true }));
app.use('/api', bodyParser.json());
app.use(express.static(path.resolve(__dirname + '/../client/')));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
var port = process.env.PORT || 8888;
app.use('/api/users', users);
app.use('/api/user', user);
app.use('/api/content', db_content);
app.use('/api/assets', db_assets);
app.listen(port, function () {
    console.log('http://127.0.0.1:' + port);
    console.log('http://127.0.0.1:' + port + '/api');
});
//# sourceMappingURL=server.js.map