var numorlet = Math.floor((Math.random() * 2) + 1);

var letters = ['0', 'a', 'b', 'c', 'd', 'e', 'f'];

var newdig = function(){
  var numorlet = Math.floor((Math.random() * 2) + 1);
  if(numorlet == 1){
    var digit = Math.floor((Math.random() * 9) + 1);
  }
  if(numorlet == 2){
    var digit = letters[Math.floor((Math.random() * 6) + 1)];
  }
  return digit;
}

var color = '#' + newdig() + newdig() + newdig() + newdig() + newdig() + newdig();