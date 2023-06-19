//// Nombres pronunciables y expresivos

// No recomendado
const yyyymmdstr = moment().format("YYYY/MM/DD");

// Recomendado
const currentDate = moment().format("YYYY/MM/DD");



//// Nombres sin información técnica

// No recomendado
let arrayNames = ['Zeus', 'Miguel', 'Pilar'];

// Recomendado
let nameList = ['Zeus', 'Miguel', 'Pilar'];



//// Lenguaje ubicuo

// No recomendado
getUserInfo();
getClientData();
getCustomerRecord();

// Recomendado
getUser();
