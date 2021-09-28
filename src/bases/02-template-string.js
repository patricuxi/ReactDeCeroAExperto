//puedes trabajar con cadenas de más de una línea
const nombre = 'Patricia'
const apellido = 'Cotán'
const edad = 31;

// const nombreCompleto= nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido} con edad de ${edad+2} años`;

console.log(`${saludar(nombreCompleto)}`);

function saludar(nombreCompleto) {
    return 'Hola ' +nombreCompleto ;
}