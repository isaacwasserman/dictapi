var express = require('express');
var router = express.Router();
var Message = require('../models/message');
var request = require('request');
var cheerio = require('cheerio');

router.get('/:word', function(req, res) {
  var word = req.params.word;
  
  request('http://dictionary.reference.com/browse/' + word, function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    $('.def-set').each(function(i, element){
      var definition = $(this).text();
      console.log(word + ": " + definition);
    });
  }
});
  
  res.render('def', {title: "Definition of:" + word, word: word, definition: definition});
});

module.exports = router;

//request('http://dictionary.reference.com/browse/hello', function (error, response, html) {
//  if (!error && response.statusCode == 200) {
//    var $ = cheerio.load(html);
//    $('.visible-xs').each(function(i, element){
//      var a = $(this).text();
//      console.log(a);
//    });
//  }
//});