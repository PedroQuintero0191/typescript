// crear una fotografia
// function creatPicture(title,date,size){
//    // title
// }

type SquareSize = '100x100' | '500x500' | '1000x1000';

//usar TS, definimos tipos para parametros
// function creatPicture(title: string, date: string, size: SquareSize){
//     // se crea fotografia
//     console.log('create picture using', title,date,size);

// }

// creatPicture('Cellphone' , '2021-04-09', '500x500');
// creatPicture('Colombia job','2021-04-08');

//uso de los parametros opcionales

function creatPicture(title?: string, date?: string, size?: SquareSize){
    // se crea fotografia
    console.log('create picture using', title,date,size);
}

creatPicture('Cellphone' , '2021-04-09', '500x500');
creatPicture('Colombia job','2021-04-08');
creatPicture('Colombia job');
creatPicture();

//Flat array Function
let CreatePic =(title: string, date: string, size: SquareSize): object  =>{
    // return {
    //     title: title,
    //     date: date,
    //     size: size
    // };
    return{ title, date, size };
};

const picture = CreatePic('Curso TypeScript', '2021-04-09', '100x100');
console.log('picture', picture);

//tipo de retorno con TS

// function handleError (code: number , message: string): never | string {
//     // procesamiento del codigo y mensaje

//     if (message ==='error'){
//         throw new Error (`${message}.code error ${code}`)
//     }else{
//         return 'se ha producido un error'
//     }
// }



try {
let result = handleError (200, 'ok'); // string
console.log ('result', result);

result = handleError (400, 'error'); // never
console.log ('result', result);
} catch (error) {
    
}