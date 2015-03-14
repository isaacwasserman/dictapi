var init = function(){  
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  ctx.font = 'normal 15pt sans-serif';
  // Our text box
  var defbox = {
      'x': 280,
      'y': 285,
      'width': 320,
      'height': 69
  }

  // Our text
  var deftext = "Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah.";

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

  // Our text
  var senttext = "Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah.";

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
  
  var listnum = '18';
  ctx.fillText(listnum,415,115);
  
  var word = 'Word';
  ctx.textAlign="center";
  ctx.fillText(word,425,195);
  
  var pos = 'noun';
  ctx.fillText(pos,440,435);
  
  ctx.textAlign="left";
  var syn1 = 'phrase';
  ctx.fillText(syn1,200,800);
  var syn2 = 'thing';
  ctx.fillText(syn2,200,825);
  var syn3 = 'kk';
  ctx.fillText(syn3,200,850);
  
  var ant1 = 'not-phrase';
  ctx.fillText(ant1,495,800);
  var ant2 = 'not-thing';
  ctx.fillText(ant2,495,825);
  var ant3 = 'not-kk';
  ctx.fillText(ant3,495,850);
  
}