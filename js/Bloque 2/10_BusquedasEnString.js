'use strict';

//Transformacion de textos

var numero = 444;
var texto1 = "Bienvenido al curso de JavaScript y mas JavaScript";
var texto2 = "Yo no me quiero, me adoro";

var busqueda = texto1.lastIndexOf("JavaScript"); //Busca el ultimo indice de un string
console.log(busqueda);

    busqueda = texto1.indexOf("JavaScript"); //Busca el indice de un string
console.log(busqueda);

    busqueda = texto1.search("JavaScript"); //Busca el indice de un string
console.log(busqueda);

    busqueda = texto1.match("JavaScript"); //Busca una coincidencia de un string
console.log(busqueda);

    busqueda = texto1.match(/JavaScript/g); //Busca una expresion regular
console.log(busqueda);

    busqueda = texto1.substring(23, 33); //Extrae una subcadena de un string
console.log(busqueda);

    busqueda = texto1.charAt(23); //Busca un caracter de un string
console.log(busqueda);

    busqueda = texto1.startsWith("Bi"); //Comprueba si un string empieza con un string
console.log(busqueda);

    busqueda = texto1.endsWith("JavaScript"); //Busca si un string termina con un string
console.log(busqueda);

    busqueda = texto1.includes("JavaScript"); //Busca si un string contiene un string
console.log(busqueda);