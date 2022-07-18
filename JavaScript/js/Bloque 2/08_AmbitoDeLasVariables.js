'use strict';

//Ambito de las variables

var texto = "Hola Mundo, soy una variable global";
var numero = 12;
var hola_mundo = "Texto dentro de la funcion";

function holaMundo(texto) {
    console.log(texto);
    console.log(numero.toString());
    console.log(hola_mundo);
}

holaMundo(texto); 
console.log(hola_mundo);
