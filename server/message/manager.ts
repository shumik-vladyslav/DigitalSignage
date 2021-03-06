/// <reference path="../../typings/express/express.d.ts" />

import * as express from 'express';
import db = require("./dbMessages");
import {DBMessages} from "./dbMessages";
import {Message} from "./dbMessages";

declare var WWW:string;
declare var SERVER:string;

var fs = require('fs');

const router = express.Router();
var mydb: DBMessages = new db.DBMessages();

// mydb.deleteTable();
// mydb.createNewTable();

// var p = mydb.addNewColumn();
// console.log(p);


var onError = function (err: any, res:express.Response) {
    console.log('onError error\n', err);
    res.json({error:'error', reason:err});

    var str: string = "\r\n" + new Date().toLocaleString() + "\r\n";
    str += JSON.stringify(err);

    fs.appendFile(SERVER + 'error.log', str);
};

/**
 * @api {get} /api/messages/select/all Get All Messages
 * @apiVersion 0.0.1
 * @apiName GetMessages
 * @apiGroup Messages
 *
 * @apiDescription Response all messages from DB.
 *
 * @apiExample {js} Example usage:
 *     http://127.0.0.1:8888/api/messages/select/all
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *   [
 *       {
 *           "id": 1,
 *           "activ": "true",
 *           "message": "some text"
 *       },
 *       {
 *           "id": 2,
 *           "activ": "false",
 *           "message": "some text"
 *       }
 *   ]
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "errno": 1
 *       "code": "SQLITE_ERROR"
 *     }
 */


router.post('/test/all', function (req:express.Request, res:express.Response){
    fs.writeFile('server/data/messages.json',JSON.stringify(req.body),function(err){
        if(err)onError(err,res);
        else res.json({data:'saved'});
    })
})

router.get('/test/all', function (req:express.Request, res:express.Response){
    fs.readFile('server/data/messages.json', 'utf8',function(err,data){
        if(err)onError(err,res);
        else res.json({data:JSON.parse(data)});
    })
})

router.get('/select/all', function (req:express.Request, res:express.Response) {
    var promise = mydb.selectAllContent();
    promise.then(function (result) {
        console.log(result);
        res.json(result);
        // sellect
    }, function (err) {
        console.log(err);
        res.json(err);
    });
});

/**
 * @api {get} /api/messages/select/:id Get Message
 * @apiVersion 0.0.1
 * @apiName GetMessage
 * @apiGroup Messages
 *
 * @apiDescription Response message from DB by id.
 *
 * @apiParam {number} id   id in BD
 *
 * @apiParamExample {json} Request-Example:
 *     {
 *       "id":  1
 *     }
 *
 * @apiExample {js} Example usage:
 *     http://127.0.0.1:8888/api/messages/select/1
 *
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "id": 1,
 *        "activ": "true",
 *        "message": "some text"
 *    }
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "errno": 1
 *       "code": "SQLITE_ERROR"
 *     }
 */

router.get('/select/:id', function (req:express.Request, res:express.Response) {
    var promise = mydb.selectContentById(req.params.id);
    // res.json(req.params);
    promise.then(function (result) {
        console.log("res", result);
        res.json({data:result});
    }, function (err) {
        console.log(err);
        res.json(err);
    });
});

/**
 * @api {post} /api/messages/insert Insert Message
 * @apiVersion 0.0.1
 * @apiName InsertMessages
 * @apiGroup Messages
 *
 * @apiDescription Insert messages in DB.
 *
 * @apiParam {String} active    true or false.
 * @apiParam {String} message   Message text
 *
 * @apiParamExample {json} Request-Example:
 *     {
 *       "active":  "true",
 *       "message": "some text"
 *     }
 *
 * @apiExample {js} Example usage:
 *     http://127.0.0.1:8888/api/messages/insert
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "activ": "true"
 *       "message": "some text"
 *       "id": 1
 *     }
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "errno": 1
 *       "code": "SQLITE_ERROR"
 *     }
 */

router.post('/insert', function (req:express.Request, res:express.Response) {
    var body:any = req.body;
    // res.send(req.body);
    // return;
    var message = new Message(body.active, body.message);

    var promise = mydb.insertContent(message);
    promise.then(function (result) {
        // console.log(result);
        message.id = result.id;
        console.log(message);
        res.json(message);
    }, function (err) {
        console.log(err);
        res.json(err);
    });
});

/**
 * @api {post} /api/messages/update Update Message
 * @apiVersion 0.0.1
 * @apiName UpdateMessage
 * @apiGroup Messages
 *
 * @apiDescription Update messages in DB.
 *
 * @apiParam {Number} id        id in BD
 * @apiParam {String} active    true or false.
 * @apiParam {String} message   Message text
 *
 * @apiParamExample {json} Request-Example:
 *     {
 *       "id":      1
 *       "active":  true,
 *       "message": "some text"
 *     }
 *
 * @apiExample {js} Example usage:
 *     http://127.0.0.1:8888/api/messages/update
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "activ": "true"
 *       "message": "some text"
 *       "id": 1
 *     }
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "errno": 1
 *       "code": "SQLITE_ERROR"
 *     }
 */

router.post('/update', function (req:express.Request, res:express.Response) {
    var body:any = req.body;
    var message = new Message(body.active, body.message, body.id);
    console.log(message);

    // res.json(req.params);

    var promise = mydb.updateContent(message);
    promise.then(function (result) {
        if(result.changes) {
            res.json({data:result});
        } else {
            onError(result, res);
        }
        console.log(result);

        // sellect
    }, function (err) {
        console.log(err);
        res.json(err);
    });
});

router.post('/delete', function (req:express.Request, res:express.Response) {
    var body:any = req.body;
    var message = new Message(body.active, body.message, body.id);

    var promise = mydb.deleteContent(message);
    promise.then(function (result) {
        console.log(result);
        res.json(result);
        // sellect
    }, function (err) {
        console.log(err);
        res.json(err);
    });
});

export = router