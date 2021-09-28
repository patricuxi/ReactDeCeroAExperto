// Funciones en JS
// const saludar = function( nombre ) {
//     return `Hola, ${ nombre }`;
// }

const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre }`;
}

const saludar3 = ( nombre ) => `Hola, ${ nombre }`;// si el return es algo muy simple y corto se puede quitarlo así como las llaves
const saludar4 = () => `Hola Mundo`;// funcion de flecha sin argumento

// console.log( saludar('Goku') )

console.log( saludar2('Vegeta') );
console.log( saludar3('Goku') );
console.log( saludar4() );

// Quitar el return y las llaves funcionan bien, pero si desea retornar un objeto, debe ir encerrado en parentesis, recordar que un objeto va entre llaves
const getUser = () => ({
    uid: 'ABC123',
    username: 'El_Papi1502'
});


const user = getUser();
console.log(user);

// Tarea
const getUsuarioActivo = ( nombre ) =>({
    uid: 'ABC567',
    username: nombre
})

const usuarioActivo = getUsuarioActivo('Fernando');
console.log( usuarioActivo );