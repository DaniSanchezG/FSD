'use strict';

//Funciones de texto

//Transformacion de textos

var numero = 12;
var texto1 = "Bienvenido al curso de JavaScript";
var texto2 = "Yo no me quiero, me adoro";


var dato = numero.toString();  //Convierte un numero en un string
//console.log(typeof dato);

var dato1 = texto1.toUpperCase(); //Convierte un string en mayusculas
//console.log(dato1);

dato1 = texto1.toLowerCase(); //Convierte un string en minusculas
////console.log(dato1);

//Calcular longitud de un string

//console.log(texto1.length);

var array = ["Hola", "Mundo", "Soy", "Un", "Array"];

//console.log(array.length);

//Concatenar - Unir textos

//var textotTotal = texto1 + " " + texto2;
  var textotTotal = texto1.concat(" ", texto2);
console.log(textotTotal);

