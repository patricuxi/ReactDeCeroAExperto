
// import { heroes } from './data/heroes';
// import { heroes } from './data/heroes';
// import heroes, { owners } from '../data/heroes';

/*no hace falta ponerle llaves a heroes porque el array se exporta por default, al importar le damos el nombre que queramos*/
import heroes from '../data/heroes';

// console.log( owners );//retorna los objetos que cumplen la condicion


export const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id );

// console.log( getHeroeById(2) );//encuentra el primero que cumple la condición

// find?, filter
export const getHeroesByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner );

// console.log( getHeroesByOwner('Marvel') );