var express = require('express');
var router = express.Router();
var cryptoTest = require('../../tests/cryptoTest');

router.get('/', function(req, res, next) {
    let result = cryptoTest.test();
    res.send(result);
});

module.exports = router;
