var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    var random = Math.floor(Math.random() * 22);
    var val = Math.cbrt(random);
    res.render('computation', { title: 'Bonus', randomValue: random,  num: val });
});


router.get('/:input', function (req, res, next) {
    var val = Math.cbrt(req.params.input);
    res.render('computation', { title: 'Bonus', randomValue: req.params.input,  num: val });
});

module.exports = router;