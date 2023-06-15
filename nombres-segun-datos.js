//// ARRAYS


// No recomendado
const user = ['Zeus', 'Miguel', 'Pilar'];

// Regular
const userList = ['Zeus', 'Miguel', 'Pilar'];

// Bueno
const users = ['Zeus', 'Miguel', 'Pilar'];

// Excelente
const userNames = ['Zeus', 'Miguel', 'Pilar'];


//// BOOLEANOS


// No recomendado
const valid = true;
const read = false;
const color = true;

// Recomendado
const isValid = true;
const canRead = false;
const hasColor = true;


//// NÚMEROS


// No recomendado
const players = 15;

// Recomendado
const maxPlayers = 50;
const minPlayers = 10;
const totalPlayers = 15;


//// NÚMEROS


// No recomendado
createUserIfNotExist();
updateUserIfNotEmpty();
sendEmailIfIsValid();

// Recomendado
createUser();
updateUser();
sendEmail();

// En funciones de acceso, modificación o predicado

getUser();
setUser();
isValidUser();


//// CLASES


// No recomendado
class Data {}
class Manager {}
class Info {}

// Recomendado
class User {}
class UserProfile {}
class Account {}


