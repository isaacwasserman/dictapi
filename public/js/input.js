var init = function(){
  console.log("Page Loaded");
  var body = document.getElementsByTagName('body')[0];
}

var addinputs = function(){
  var grade = document.getElementById('grade').value;
  document.getElementById('grade').style.display = 'none';
  document.getElementById('submit-grade').style.display = 'none';
  if(grade == "6th"){
    document.getElementById('six').style.display = 'inline';
    document.getElementById('submit').style.display = 'inline';
  }
  if(grade == "7th"){
    document.getElementById('six').style.display = 'inline';
    document.getElementById('seven').style.display = 'inline';
    document.getElementById('submit').style.display = 'inline';
  }
  if(grade == "8th"){
    document.getElementById('six').style.display = 'inline';
    document.getElementById('seven').style.display = 'inline';
    document.getElementById('eight').style.display = 'inline';
    document.getElementById('submit').style.display = 'inline';
  }
}



var gather = function(){
  var grade = document.getElementById('grade').value;
  var words = [];
  words.push(document.getElementById('input-1').value);
  words.push(document.getElementById('input-2').value);
  words.push(document.getElementById('input-3').value);
  words.push(document.getElementById('input-4').value);
  words.push(document.getElementById('input-5').value);
  words.push(document.getElementById('input-6').value);
  words.push(document.getElementById('input-7').value);
  words.push(document.getElementById('input-8').value);
  words.push(document.getElementById('input-9').value);
  words.push(document.getElementById('input-10').value);
  if(grade == '7th' || grade == '8th'){
    words.push(document.getElementById('input-11').value);
    words.push(document.getElementById('input-12').value);
    words.push(document.getElementById('input-13').value);
    words.push(document.getElementById('input-14').value);
    words.push(document.getElementById('input-15').value);
  }
  if(grade == '8th'){
    words.push(document.getElementById('input-16').value);
    words.push(document.getElementById('input-17').value);
    words.push(document.getElementById('input-18').value);
    words.push(document.getElementById('input-19').value);
    words.push(document.getElementById('input-20').value);
  }
  console.log(words);
  
  document.getElementById('words').style.display = 'none';
  
  var framediv = document.getElementById('frames');
  var newframe = document.createElement('iframe');
  
  for (var i = 1; i < words.length + 1; i++) {
    document.getElementById('frame' + i).setAttribute('src', '/' + words[i-1]);
    document.getElementById('frame' + i).style.display = 'inline';
    document.getElementsByTagName('iframe')[i-1].style.height = '1094px';
    document.getElementsByTagName('iframe')[i-1].style.width = '844px';
    console.log("The word is " + words[i-1]);
  }
}