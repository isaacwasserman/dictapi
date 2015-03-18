var request = require('request');
var cheerio = require('cheerio');

request('http://dictionary.reference.com/browse/hello', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    $('.visible-xs').each(function(i, element){
      var a = $(this).text();
      console.log(a);
    });
  }
});