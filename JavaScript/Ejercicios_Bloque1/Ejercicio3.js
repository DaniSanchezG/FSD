'use strict';

//Ejercicio 3 bloque 1
/* Hacer un programa que muestre todos los numeros entre dos numeros introducidos por el usuario */

var number1 = parseInt(prompt('Introduce un numero:') ,0);
var number2 = parseInt(prompt('Introduce otro numero:') ,0);

do{
    if(isNaN(number1) || isNaN(number2)){
        number1 = parseInt(prompt('Ops, parece que no introdujistes un numero, introduce un numero de nuevo:') ,0);
        number2 = parseInt(prompt('Introduce el segundo numero de nuevo:') ,0);
    }

}while(isNaN(number1) || isNaN(number2)){

    document.write('<h1>Numeros entre ' + number1 + ' y ' + number2 + '</h1>');

    if (number1 > number2) {
        for (var i = number2; i <= number1; i++) {
            document.write(i + '<br>');
        }
    }else if (number1 < number2) {
        for (var i = number1; i <= number2; i++) {
            document.write(i + '<br>');
        }
    }else if (number1 == number2){
        console.log('Los numeros son iguales, por tanto el resultado es 0');
    }

}