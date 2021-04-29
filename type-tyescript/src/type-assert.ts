export{};
//<tipo> // Angle Braket syntax
let username: any;
username = 'PedroQuintero';
username = 'peter';

// tenemos una cadena , TS confia en mi 
let message: string = (<string>username).length > 5 ?
                    `Welcome ${username}`:
                    `Username is too short`
console.log('message', message);

let usernameWithId: any = 'pedroJose 1';
// como obtener el username ??

username =(<string>usernameWithId).substring (0,10);
console.log ('Username only', username);

//sintaxis "as"

message = (username as string).length > 5 ?
            `Welcome ${username}`:
            `Username is too short`;

let helloUser: any ;
helloUser = 'Hello Dereckisaias';
username =(helloUser as string).substring(6);
console.log ('username', username);


 