console.log ('Hola Pedro Quintero')

//Number
// Explicito
let phone:number;
phone = 1;  
phone = 3219853480;
// phone ='hola'; // error porque no se puede asignar un string a una variable de tipo nombre

// Inferido
let phoneNumber = 3219853480;
phoneNumber = 123;
// phoneNumber = true; // error por tipo de dato

let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// Tipo : Boolean
// Tipado Explicito
let isPro: boolean;
isPro = true;
// isPro = 1; error

// Inferido 
let isUserPro = false;
isUserPro = true;
// isUserPro = 10 ; // error

// Strings
let username: string = 'PedroQuintero'
username = "Pedro";
// username = true; // error

//Template String
// Uso back-tick `
let userInfo: string;
userInfo = `
    User Info:
    username: ${username}
    firstName: ${username + 'Quintero'}
    phone: ${phone}
    isPro: ${isPro}
`;
console.log ('userInfo', userInfo);

