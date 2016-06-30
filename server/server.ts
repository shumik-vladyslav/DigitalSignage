/**
 * Created by Vlad on 5/13/2016.
 */
/// <reference path="typings/express/express.d.ts" />
/// <reference path="typings/body-parser/body-parser.d.ts" />
///<reference path="typings/express-session/express-session.d.ts"/>
///<reference path="typings/cookie-parser/cookie-parser.d.ts"/>
///<reference path="users/db-users.ts"/>

//test
import * as express from 'express';


import * as bodyParser from 'body-parser';
import * as session from 'express-session';
import * as cookie from 'cookie-parser';

import users = require('./users/index');
import user = require('./users/user');

import db_content = require('./content/manager');
import db_assets = require('./assets/manager');


//////////   Types  only/////////////
import {Request} from "express";
import {Response} from "express";
import {Express} from "express";
///////////////////////////////////////


const app:Express = express();
var multer  =   require('multer');

// configure our app to use bodyParser(it let us get the json data from a POST)
app.use(cookie());
app.use(session({
    resave: false, // don't save session if unmodified
    saveUninitialized: false, // don't create session until something stored
    secret:'somesecrettokenhere'
}));
app.use('/api',bodyParser.urlencoded({extended: true}));
app.use('/api',bodyParser.json());
var getDirectory = function(){

    var dir = __dirname;
   return  dir.replace(new RegExp('server' + '$'), 'client');
}; 

app.use(express.static(getDirectory()));
app.use(function(req:Request, res:Response, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const port:number = process.env.PORT || 8888;
app.use('/api/users', users);
app.use('/api/user', user);
app.use('/api/content', db_content);
app.use('/api/assets', db_assets);
app.listen(port,function(){
    console.log('http://127.0.0.1:' + port);
    console.log('http://127.0.0.1:' + port + '/api');
});

