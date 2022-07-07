'use strict';

//Parametros


function calculadora(numero1, numero2){
    console.log("*********************************************************");
    console.log("Suma: " + (numero1 + numero2));
    console.log("Resta: " + (numero1 - numero2));
    console.log("Multiplicación: " + (numero1 * numero2));
    console.log("División: " + (numero1 / numero2));
    console.log("*********************************************************");

    return "";
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

 for(var i = 1; i <= 10; i++){
    console.log(calculadora(i, getRandom(1,10)));
} 

