// Uso de var
var age = 28;

{
  console.log('Valor dentro del bloque', age); // -> 28
  var age = 29;
}

console.log('Valor fuera del bloque', age); // -> 29
age = age * 2;
console.log('Valor cambiado', age); // -> 58


// Uso de let

let edad = 28;

{
  /* console.log('Valor dentro del bloque', edad); */ // -> error (ReferenceError: Cannot access 'edad' before initialization)
  let edad = 29;
}

console.log('Valor fuera del bloque', edad); // -> 28
edad = edad * 2;
console.log('Valor cambiado', edad); // -> 56


// Uso de const

const PI = 3.14159;
PI = 33.1416 // -> error (TypeError: Assignment to constant variable)
console.log(PI); 

