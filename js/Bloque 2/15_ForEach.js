'use strict';

//Arrays avanzados

var nombres = ['paco', 'maria', 'josefa', 'leia', 'sara'];
var nombre = "Daniel";

var lenguajes = new Array('Java', 'Python', 'C++', 'C#', 'JavaScript');

//console.log(nombres);
//console.log(nombre);
//console.log(lenguajes);
/*
var elemento = parseInt(prompt('¿Qué elemento del array quieres, del 0 al 4?', 0));

while(elemento > nombres.length - 1 || elemento < 0){
    elemento = parseInt(prompt('Vaya, parece que has elegido un indice que no existe, prueba otra vez', 0));
}
alert(nombres[elemento]);
*/

document.write('<h1>Lenguajes de programación del 2018</h1>');
document.write('<ul>');
lenguajes.push('PHP');
lenguajes.push('Ruby');
lenguajes.push('Go');

/*
for(var i = 0; i < lenguajes.length; i++){
    document.write('<li>' + lenguajes[i] + '</li>'); 
}
*/

lenguajes.forEach((elemento, index, data) => {
    document.write('<li>indice: ' + index + " - lenguaje: " + elemento + '</li>'); 
    console.log(data);
});

//Explicado en el curso, varios parametros

//Funcional

/*
lenguajes.forEach(elemento => {
    document.write('<li>' + elemento + '</li>'); 
});

document.write('</ul>');
*/