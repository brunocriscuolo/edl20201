// sem arrow function
var oldWay = function(name, nickname) {
  return 'My name is ' + nickname + ', ' + name;
};

console.log( oldWay('James Bond', 'Bond') );
// My name is Bond, James Bond


// com arrow function
let newWay = (name, nickname) => 'My name is ' + nickname + ', ' + name;

console.log( newWay2('James Bond', 'Bond') );
// My name is Bond, James Bond
