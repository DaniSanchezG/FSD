'use strict';

//Parametros opcionales


function calculadora(numero1, numero2, mostrar=false){
    if(!mostrar){
        console.log("*********************************************************");
        console.log("Suma: " + (numero1 + numero2));
        console.log("Resta: " + (numero1 - numero2));
        console.log("Multiplicación: " + (numero1 * numero2));
        console.log("División: " + (numero1 / numero2));
        console.log("*********************************************************");
    }else{
        document.write("********************************************************* <br>");
        document.write("Suma: " + (numero1 + numero2) + "<br>");
        document.write("Resta: " + (numero1 - numero2) + "<br>");
        document.write("Multiplicación: " + (numero1 * numero2) + "<br>");
        document.write("División: " + (numero1 / numero2) + "<br>");
        document.write("********************************************************* <br>");
    }
    return "";
}

 function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

 for(var i = 1; i <= 10; i++){
    console.log(calculadora(i, getRandom(1,10)));
} 

