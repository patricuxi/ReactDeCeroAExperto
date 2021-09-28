
// Desestructuración
// Asignación Desestructurante
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};
// extrae lo que estoy poniendo dentro de las llaves lo que hay en este objeto (personaje)
// const { edad, clave, nombre, } = persona;

// console.log( nombre );
// console.log( edad );
// console.log( clave );

const useContext = ({ clave, nombre, edad, rango = 'Capitán' }) => {


    // console.log( nombre, edad, rango );

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }

}
//desestructuración en un objeto anidado
const { nombreClave, anios, latlng: { lat, lng } } = useContext( persona );

console.log(nombreClave, anios);
console.log( lat, lng );