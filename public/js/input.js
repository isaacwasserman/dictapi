var init = function(){
  console.log("Page Loaded");
  var body = document.getElementsByTagName('body')[0];
  
}

var myprint = function(){
    if (confirm("When printing make sure you turn off header and footer text, and turn on background images. Otherwise this will not look legit.") == true) {
        document.getElementById('frameinfo').style.display = 'none';
        document.body.style.backgroundImage = 'none';
        document.body.style.margin = '0px';
        print();
        document.getElementById('frameinfo').style.display = 'inline';
        document.body.style.backgroundImage = 'url(http://raritea.com/raritea/images/heartless.gif)';
        document.body.style.margin = '8px'; 
    }
  }

var addinputs = function(){
  var grade = document.getElementById('grade').value;
  document.getElementById('first').style.display = 'none';
  document.getElementById('grade').style.display = 'none';
  document.getElementById('submit-grade').style.display = 'none';
  document.getElementById('listnum').style.display = 'inline';
  if(grade == "6th" || grade == "7th"){
    document.getElementById('six').style.display = 'inline';
    document.getElementById('submit').style.display = 'inline';
  }
  if(grade == "7th"){
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
  if(grade == '7th'){
    words.push(document.getElementById('input-11').value);
    words.push(document.getElementById('input-12').value);
    words.push(document.getElementById('input-13').value);
    words.push(document.getElementById('input-14').value);
    words.push(document.getElementById('input-15').value);
  }
  if(grade == '8th'){
    words.push(document.getElementById('input-11').value);
    words.push(document.getElementById('input-12').value);
    words.push(document.getElementById('input-13').value);
    words.push(document.getElementById('input-14').value);
    words.push(document.getElementById('input-15').value);
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
  var listnum = document.getElementById('listnum').value;
  document.getElementById('frameinfo').style.display = 'inline';
  
  for (var i = 1; i < words.length + 1; i++) {
    document.getElementById('frame' + i).setAttribute('src', '/' + words[i-1] + '?list=' + listnum);
    document.getElementById('frame' + i).style.display = 'inline';
    document.getElementsByTagName('iframe')[i-1].style.height = '1094px';
    document.getElementsByTagName('iframe')[i-1].style.width = '844px';
    console.log("The word is " + words[i-1]);
  }
}