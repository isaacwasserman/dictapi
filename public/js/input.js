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

var addframes = function(){
  var words = gather();
  for (var i = 0; i < words.length; i++) {
    var body = document.getElementById('frames');
    var newframe = document.createElement('div');
    newframe.setAttribute('id', 'frame' + i);
    newframe.setAttribute('src', '/' + words[i]);
    body.appendChild(newframe);
    console.log('Added Frame ' + i);
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
  console.log(words.length);
  var framediv = document.getElementById('frames');
  var newframe = document.createElement('iframe');
  
  for (var i = 0; i < words.length; i++) {
    var wordroute = '/' + words[i];
    newframe.setAttribute('id', 'frame' + i);
    newframe.setAttribute('src', 'wordroute');
    framediv.appendChild(newframe);
    console.log('Added Frame ' + i);
  }
}