/// <reference path="../../typings/express/express.d.ts" />

import * as express from 'express';
const fs = require('fs');
const router = express.Router();

var url='/nav-item.json';
console.log(__dirname+url)

router.get('/nav', function (req, res) {
    fs.readFile(__dirname+url, 'utf8',(err, data)=>{
        if (err) throw err;
        res.json( JSON.parse(data) );
    })
});

export = router
