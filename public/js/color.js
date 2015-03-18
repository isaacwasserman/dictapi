var possiblehexadigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
var randomhexadigit = function(){
  var randomforpossiblehexadigits = Math.floor((Math.random() * 16) + 0);
  return possiblehexadigits[randomforpossiblehexadigits];
}
var randomcolor = '#' + randomhexadigit() + randomhexadigit() + randomhexadigit() + randomhexadigit() + randomhexadigit() + randomhexadigit();
console.log(randomcolor);