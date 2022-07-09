'use strict';

//Trasnformacion de texto

var numero  = '10';
var texto1 = " Hola mundo ";
var texto2 = 'Mundo estoy aqui';

var busqueda = texto1.replace('Hola', 'Adios'); //Reemplaza una parte del texto
var cortado = texto1.slice(0, 8); //Corta el texto desde la posicion 0 hasta la posicion 8
    busqueda = texto1.split(' '); //Separa el texto por cada espacio
var trimm = texto1.trim(); //Elimina los espacios en blanco al inicio y al final del texto
    console.log(trimm);