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

/* lenguajes.forEach((elemento, index, data) => {
    document.write('<li>indice: ' + index + " - lenguaje: " + elemento + '</li>'); 
    console.log(data);
});*/

for(let lenguaje in lenguajes){
    document.write('<li> - lenguaje: ' + lenguajes[lenguaje] + '</li>'); 
}

//Explicado en el curso, varios parametros

//Funcional

/*
lenguajes.forEach(elemento => {
    document.write('<li>' + elemento + '</li>'); 
});

document.write('</ul>');
*/

//Busquedas

var busqueda1 = lenguajes.find(function(elemento){
    return elemento == 'PHP';
});


console.log(busqueda1);

var precios = [10, 20, 30, 40, 50];

var busqueda2 = lenguajes.find(elemento => elemento == 'Python'); //mucho mas elegante
    busqueda2 == undefined ? console.log('No existe') : console.log(busqueda2);

var indice1 = lenguajes.findIndex(elemento => elemento == 'Python'); //mucho mas elegante para buscar el indice
    indice1 == undefined ? console.log('No existe') : console.log(indice1);

var precios = precios.some(precio => precio > 100); //te dice si se cumple una condicion y responde true o false
    console.log(precios);