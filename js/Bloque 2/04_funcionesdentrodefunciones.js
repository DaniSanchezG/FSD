'use strict';

//Funciones dentro de funciones

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function calculadoraPorConsola(numero1, numero2){
    console.log("*********************************************************");
    console.log("Suma: " + (numero1 + numero2));
    console.log("Resta: " + (numero1 - numero2));
    console.log("Multiplicación: " + (numero1 * numero2));
    console.log("División: " + (numero1 / numero2));
    console.log("*********************************************************");

    return "";
}

function calculadoraEnDocumento(numero1, numero2){
    document.write("********************************************************* <br>");
    document.write("Suma: " + (numero1 + numero2) + "<br>");
    document.write("Resta: " + (numero1 - numero2) + "<br>");
    document.write("Multiplicación: " + (numero1 * numero2) + "<br>");
    document.write("División: " + (numero1 / numero2) + "<br>");
    document.write("********************************************************* <br>");

    return "";
}

function calculadoraX2(numero1Consola, numero2Consola, numero1Documento, numero2Documento){
    calculadoraPorConsola(numero1Consola, numero2Consola);
    calculadoraEnDocumento(numero1Documento, numero2Documento);
    
    return "";
}

 for(var i = 1; i <= 10; i++){
    console.log(calculadoraX2(i, getRandom(1,10), i, getRandom(1,10)));
} 

