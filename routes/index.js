var express = require('express');
var MorseWord = require('../model/morse_word');
var MorseTransmitter = require('../model/morse_transmitter');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/msgToMorse', function(req, res, next) {
    var transmitter = new MorseTransmitter(); // should def be static

    transmitter.executeTest();

    var msg = req.body.message.split(" ");
    var morseWords = [];
    for (var word in msg) {
        var morseWord = new MorseWord(word);
        morseWords.push(morseWord);

        transmitter.transmitWord(morseWord);
    }

    res.send({"morseWords": morseWords});
});

module.exports = router;
