'use strict';

//Funciones anonimas tipo flecha =>
//Es una funcion que no tiene nombre


var pelicula = function (nombre) {
    return "La pelicula es: " + nombre;
}



function sumame(numero1, numero2, sumaYmuestra, sumaPorDos) {
    let sumar = numero1 + numero2;
    sumaYmuestra(sumar);
    sumaPorDos(sumar);

    return sumar;
}



 var sumado = sumame(5,-7, dato => {
    console.log("La suma es: " + dato);
    } ,      dato => {
    console.log("La suma por dos es: " + (dato*2));
 }
 );

 //Operador condicional ternario
sumado>0 ? console.log("La suma es positiva") : console.log("La suma es negativa");