// Declaración de funciones
function getResult() {
  return 'Results';
}

getResult(); // -> Results

// Expresión de funciones
const getResults = function() {
  return 'Results';
}

getResults();


// PARÁMETROS Y ARGUMENTOS

// Parámetro es number
function getDouble(number) {
  return number * 2;
}

// Argumento es 10
getDouble(10); // -> 20


// Parámetro por defecto
function greet(person = 'strange') {
  console.log('Hello ' + person);
}

greet() // -> Hello strange
greet('Santi') // -> Hello Santi


function saludar(person) {
  console.log('Hello ' + person);
}

saludar(); // -> Hello undefined


// Spread operator o parámetro rest

// Sin usar rest
function add(x, y) {
  console.log(x + y);
}

add(1, 2, 3, 4, 5); // -> 3 / Sólo toma los dos primeros argumentos

// Usando rest
function suma(...args) {
  console.log(args.reduce((prev, current) => prev + current, 0));
}


// Clonando objetos y arrays con spread

// Objetos

const course = {
  title: 'JavaScript definitivo',
  content: 'Todo lo que necesitas saber',
}

const clonedCourse = Object.assign({}, course);
const spreadClonedCourse = { ...course};

console.log(spreadClonedCourse); // {title: 'JavaScript definitivo', content: 'Todo lo que necesitas saber',}

// Arrays

const numbers = [1, 2, 3];

const clonedNumbers = numbers.slice();
const spreadClonedNumbers = [...numbers];

console.log(spreadClonedNumbers); // -> [1, 2, 3]


// Concatenar Arrays con spread
const numbersA = [1, 2, 3];
const numbersB = [4, 5, 6];

const allNumbers = [...numbersA, ...numbersB];
console.log(allNumbers); // -> [ 1, 2, 3, 4, 5, 6 ]


// FUNCIONES FLECHA

const getAnswer = () => 'Answer';

console.log(getAnswer());

// this dentro de las arrow functions
const counter = {
  number: 0,
  increase() {
    setInterval(() => console.log(++this.number), 1000);
  }
}

counter.increase();