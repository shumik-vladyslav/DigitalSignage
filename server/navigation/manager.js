"use strict";
var express = require('express');
var router = express.Router();
router.get('/nav', function (req, res) {
    var _this = this;
    var url = '/nav-item.json';
    this.fs.readFile(__dirname + this.url, 'utf8', function (err, data) {
        if (err)
            throw err;
        _this.navs = JSON.parse(data);
        res.json(_this.navs);
    });
});
module.exports = router;
//# sourceMappingURL=manager.js.map