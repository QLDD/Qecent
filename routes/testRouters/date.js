var express = require('express');
var router = express.Router();
var dateTest = require('../../tests/dateTest');

router.get('/', function(req, res, next) {
    let result = dateTest.test();
    res.send(result);
});

module.exports = router;
