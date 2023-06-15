// Ámbito Global
let greeting = 'Helloo World!'

function greet() {
  console.log(greeting);
}

greet() // Hello World!


// Ámbito Local o de Función
function greet2() {
  let greeting2 = 'Hello World!';
  console.log('Saludos desde la función', greeting2)
}

greet2();
/* console.log(greeting2); */ // Error (ReferenceError: greeting2 is not defined)


// Ámbito de Bloque
{
  let greeting3 = 'Hello World!';
  const greeting4 = 'ola Mundo!';
  var lang = 'English';
  console.log('Saludos desde el bloque',greeting3);
}

console.log(lang);
/* console.log(greeting3); */ // Error: (ReferenceError: greeting3 is not defined)
/* console.log(greeting4); */ // Error: (ReferenceError: greeting3 is not defined)


// Ámbito léxico o estático
const edad = 28;

function printAge() {
  console.log(edad);
}

function mainApp() {
  const edad = 26;
  printAge();
  console.log(edad);
}

mainApp(); // -> 28