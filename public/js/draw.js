
  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    console.log('Query variable %s not found', variable);
  }

var init = function(){
  listnum = getQueryVariable('list');
  word = $('#word').text();
  defs = $('#definitions li').each( function(){ console.log($(this).text()); });
  syns = $('#synonyms li').each( function(){ console.log($(this).text()); });
  ants = $('#antonyms li').each( function(){ console.log($(this).text()); });
  pos = $('#partsofspeech li').each( function(){ console.log($(this).text()); });
  sents = $('#sentences li').each( function(){ console.log($(this).text()); });

  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  ctx.font = 'normal 15pt sans-serif';
  // Our text box
  var defbox = {
      'x': 440,
      'y': 285,
      'width': 320,
      'height': 69
  }
  ctx.textAlign="center";
  // Our text
  var def1loc = defs.text().indexOf('.') + 1;
  var deftext = defs.text().substring(0, def1loc).replace(';', ',').replace(';', ',');

  var textWidth = ctx.measureText(deftext).width;
  // I'm assuming it's our text height is 10, you can change this appropriately
  var textHeight = 16; 
  //List of substrings to draw
  var splitString = [];

  var cutMark = 0;

  // Go through the text and split it based on the length getting
  // larger than the defbox length
  for (var i = 0; i < deftext.length; i++) {
      // Get the width of the substring
      var subStringWidth = ctx.measureText(deftext.substring(cutMark, i)).width
      if( subStringWidth > defbox.width ) {
          // If it's larger then the defbox add it to our list
          splitString.push(deftext.substring(cutMark, i - 1));
          // Keep track of the position of our cuts
          cutMark = i - 1;
      }
  }

  // Add extra text to the end
  splitString.push(deftext.substring(cutMark, deftext.length-1));


  // Draw text
  for (var i = 0; i < splitString.length; i++) {
      var textX =  defbox.x + 1;
      var textY = (defbox.y + textHeight ) + textHeight * i;
      ctx.fillText(splitString[i], textX , textY );
  }
  
    var sentbox = {
      'x': 200,
      'y': 615,
      'width': 565,
      'height': 69
  }
  ctx.textAlign="left";
  // Our text
  var senttext = sents.slice(0,1).text();

  var textWidth = ctx.measureText(senttext).width;
  // I'm assuming it's our text height is 10, you can change this appropriately
  var textHeight = 16; 
  //List of substrings to draw
  var splitString = [];

  var cutMark = 0;

  // Go through the text and split it based on the length getting
  // larger than the sentbox length
  for (var i = 0; i < senttext.length; i++) {
      // Get the width of the substring
      var subStringWidth = ctx.measureText(senttext.substring(cutMark, i)).width
      if( subStringWidth > sentbox.width ) {
          // If it's larger then the sentbox add it to our list
          splitString.push(senttext.substring(cutMark, i - 1));
          // Keep track of the position of our cuts
          cutMark = i - 1;
      }
  }

  // Add extra text to the end
  splitString.push(senttext.substring(cutMark, senttext.length-1));

  // Draw text
  for (var i = 0; i < splitString.length; i++) {
      var textX =  sentbox.x + 1;
      var textY = (sentbox.y + textHeight ) + textHeight * i;
      ctx.fillText(splitString[i], textX , textY );
  }
  
  
  ctx.fillText(listnum,415,115);
  
  ctx.textAlign="center";
  ctx.fillText(word,425,195);
  
  var pos = pos.slice(0,1).text();
  ctx.fillText(pos,440,435);
  
  ctx.textAlign="left";
  var syn1 = syns.slice(0,1).text();
  ctx.fillText(syn1,200,800);
  var syn2 = syns.slice(1,2).text();
  ctx.fillText(syn2,200,825);
  var syn3 = syns.slice(2,3).text();
  ctx.fillText(syn3,200,850);
  
  var ant1 = ants.slice(0,1).text();
  ctx.fillText(ant1,495,800);
  var ant2 = ants.slice(1,2).text();
  ctx.fillText(ant2,495,825);
  var ant3 = ants.slice(2,3).text();
  ctx.fillText(ant3,495,850);
  
}