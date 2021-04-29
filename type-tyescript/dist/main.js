console.log('Hola Pedro Quintero');
//Number
// Explicito
var phone;
phone = 1;
phone = 3219853480;
// phone ='hola'; // error porque no se puede asignar un string a una variable de tipo nombre
// Inferido
var phoneNumber = 3219853480;
phoneNumber = 123;
// phoneNumber = true; // error por tipo de dato
var hex = 0xf00d;
var binary = 10;
var octal = 484;
// Tipo : Boolean
// Tipado Explicito
var isPro;
isPro = true;
// isPro = 1; error
// Inferido 
var isUserPro = false;
isUserPro = true;
// isUserPro = 10 ; // error
// Strings
var username = 'PedroQuintero';
username = "Pedro";
// username = true; // error
//Template String
// Uso back-tick `
var userInfo;
userInfo = "\n    User Info:\n    username: " + username + "\n    firstName: " + (username + 'Quintero') + "\n    phone: " + phone + "\n    isPro: " + isPro + "\n";
console.log('userInfo', userInfo);
