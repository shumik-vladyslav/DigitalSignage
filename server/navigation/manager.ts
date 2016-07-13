/// <reference path="../../typings/express/express.d.ts" />

import * as express from 'express';
const router = express.Router();


router.get('/nav', function (req, res) {
    var url='/nav-item.json';
    this.fs.readFile(__dirname+this.url, 'utf8',(err, data)=>{
        if (err) throw err;
        this.navs = JSON.parse(data);
        res.json( this.navs );

    })
});

export = router
