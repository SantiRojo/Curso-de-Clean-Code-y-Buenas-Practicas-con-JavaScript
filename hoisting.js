greet(); // -> Hello World!

function greet() {
  let greeting = 'Hello World!';
  console.log(greeting);
}

var greet = 'Hello';

(
  function() {
    var greet;
    console.log(greet); // -> undefined
    var greet = 'Hi';
    console.log(greet); // -> Hi
  }
)();