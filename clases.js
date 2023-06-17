// Funciones constructoras (antes de ES6)
function Person(name) {
  this.name = name;
}

var person = new Person('Santi');
console.log(person.name);

// Constructor (a partir de ES6)
class Cat {
  constructor(cat) {
    this.name = cat;
  }
  // Métodos partir de ES6
  greet() {
    return 'Hello, I am a cat and my name is ' + this.name;
  }
}

const cat = new Cat('Zeus');
console.log(cat.name);
console.log(cat.greet())

// MÉTODOS

// Antes de ES6
Person.prototype.greet = function() {
  return 'Hello, I am ' + this.name;
}
console.log(person.greet());

