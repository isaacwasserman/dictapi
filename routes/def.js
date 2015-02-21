var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
 
var router  = express.Router();

router.get('/:word', function(req, res) {
  var word = req.params.word;
 
  request('http://dictionary.reference.com/browse/' + word, function (error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);
      var definitions  = [];
      var $definitions = $('.def-set');

      for(var x = 0; x < $definitions.length; x++) {
        console.log($definitions[x]);
        d = $($definitions[x]).text().replace("(", "").replace(")", "");
        console.log(word + ": " + d);
        definitions.push(d);
      }
      res.render('def', {title: "Definition of: " + word, word: word, definition: definitions});
    }
  });
  
});
 
module.exports = router;