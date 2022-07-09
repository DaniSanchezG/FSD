'use strict';

//Arrays Multidimensionales (son arrays dentro de otro array)

var categorias = ['Accion', 'Terror', 'Comedia'];
var peliculas = ['La verdad duele', 'La vida es bella', 'Gran torino'];

var cine = [categorias, peliculas];



peliculas.push('El señor de los anillos');

/* var elemento = prompt('Añade una pelicual a la lista');
peliculas.push(elemento);
var siono = false;
while(!siono){
    elemento = prompt('Añade una pelicual a la lista (escriba n para terminar)');
    if(elemento != 'n'){
        peliculas.push(elemento);
    }else{
        siono = true;
    }
   

}
*/

//peliculas.pop(); //Elimina el último elemento del array

var indice = peliculas.indexOf('Gran torino');  //busca el indice de un elemento en el array
if(indice > -1){
  //  peliculas.splice(indice, 1); //elimina un elemento del array
}

var peliculas_string = peliculas.join(' - '); //convierte el array en un string separado por un caracter
console.log(indice);
console.log(peliculas);
console.log(peliculas_string);

var cadena = "texo1, texto2, texto3";
var cadena_array = cadena.split(', ');

console.log(cadena_array);

//Ordenar un array

peliculas.sort();

console.log(peliculas);

peliculas.reverse();

console.log(peliculas);