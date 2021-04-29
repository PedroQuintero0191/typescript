export {}; 

// [1, 'user']
let user: [number, string];
user = [1, 'DereckQuintero'];

console.log('user', user);
console.log('username', user[1]);
console.log('username.length', user[1].length);
console.log('id', user[0]);

// Tuplas con varios valores
// id, username, isPro
let userInfo: [number, string, boolean];
userInfo = [2, 'perez', true];
console.log('userInfo', userInfo);

// Arreglo de Tuplas
let array: [number, string][] = [];
array.push([1, 'pedro ']); // 0
array.push([2, 'quintero']); // 1
array.push([3, 'henyerli']); // 2
console.log('array', array);

// Uso de funciones Array
// henyerli -> henyerli001

array[2][1] = array[2][1].concat('001'); // henyerli001
console.log('array', array);