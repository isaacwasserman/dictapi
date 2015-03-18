var word = document.getElementById('word').innerHTML;

var uldefs = document.getElementById('defintions').childNodes;
var defs = [];
for(var i=0;i < uldefs.length; i++) {
  var arrValue = uldefs[i].innerHTML;
  alert(arrValue);
  defs.push(arrValue);
}

var ulsyns = document.getElementById('synonyms').childNodes;
var syns = [];
for(var i=0;i < ulsyns.length; i++) {
  var arrValue = ulsyns[i].innerHTML;
  alert(arrValue);
  syns.push(arrValue);
}

var ulants = document.getElementById('antonyms').childNodes;
var ants = [];
for(var i=0;i < ulants.length; i++) {
  var arrValue = ulants[i].innerHTML;
  alert(arrValue);
  ants.push(arrValue);
}

var ulpos = document.getElementById('partsofspeech').childNodes;
var pos = [];
for(var i=0;i < ulpos.length; i++) {
  var arrValue = ulpos[i].innerHTML;
  alert(arrValue);
  pos.push(arrValue);
}

var ulsents = document.getElementById('sentences').childNodes;
var sents = [];
for(var i=0;i < ulsents.length; i++) {
  var arrValue = ulsents[i].innerHTML;
  alert(arrValue);
  sents.push(arrValue);
}

console.log(defs + syns + ants + pos + sents);