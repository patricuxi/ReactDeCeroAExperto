const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direcion: {
        ciudad: 'New York',
        zip: 52321321,
        lat: 14.3232,
        long: 39.9233321,
    }
}
//los objeto literales al mostrarse en el navegador se ordenan la propiedades
/*si un objeto se asigna a otra variable y en la nueva variable modificamos
el valor de una propiedad, realmente se modifica el valor del objeto original pero por refenrecia
por lo que si deseamos una copia del objeto original en otro, se debe crear otro objeto con las mismas 
caracteristicas del objeto original, para ahorrarse todo eso de escribir las mismas propiedades del objeto
original podemos hacer uso de spread operator 
y de esa manera podemos tener un clon del objeto original
*/

const persona2 = {...persona}
persona2.nombre = 'Juan'

console.log(persona)
console.log(persona2)
