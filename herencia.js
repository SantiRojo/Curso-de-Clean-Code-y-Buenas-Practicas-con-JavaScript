// Herencia antes de ES6

// Clase Padre
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log('Hello, I am ' + this.name);
};

// Clase hija
function Developer(name) {
  this.name = name;
}

Developer.prototype = Object.create(Person.prototype);

Developer.prototype.writeCode = function(coffee) {
  if (coffee) console.log('I am working in a new feature');
  else console.log('I need coffee');
}

var dev = new Developer('Santi');
dev.greet(); // -> Hello I am Santi
dev.writeCode(); // -> I need coffee



// Herencia a partir de ES6

// Clase padre
class Animal {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello I am a ${this.name}`)
  }
}

// Clase hija
class Cat extends Animal {
  constructor(name) {
    super(name); // Super manda a llamar al constructor de la clase padre
  }

  eat(hungry) {
    hungry ? console.log(`${this.name} is eating`) : console.log(`${this.name} is not hungry`);
  }
}

const cat = new Cat('Miguel');
cat.greet()
cat.eat(true);
cat.eat(false);