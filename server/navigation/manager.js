"use strict";
var express = require('express');
var fs = require('fs');
var router = express.Router();
var url = '/nav-item.json';
console.log(__dirname + url);
router.get('/nav', function (req, res) {
    fs.readFile(__dirname + url, 'utf8', function (err, data) {
        if (err)
            throw err;
        res.json(JSON.parse(data));
    });
});
module.exports = router;
//# sourceMappingURL=manager.js.map