"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//<tipo> // Angle Braket syntax
var username;
username = 'PedroQuintero';
username = 'peter';
// tenemos una cadena , TS confia en mi 
var message = username.length > 5 ?
    "Welcome " + username :
    "Username is too short";
console.log('message', message);
var usernameWithId = 'pedroJose 1';
// como obtener el username ??
username = usernameWithId.substring(0, 10);
console.log('Username only', username);
//sintaxis "as"
message = username.length > 5 ?
    "Welcome " + username :
    "Username is too short";
var helloUser;
helloUser = 'Hello Dereckisaias';
username = helloUser.substring(6);
console.log('username', username);
