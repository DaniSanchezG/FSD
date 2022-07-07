'use strict';

// Ejercicio 8 bloque 1
/* 
Calculadora:
    -Pida dos numeros por pantalla
    -Si metemos mal un numero que nos los vuelva a pedir
    -Que nos muestre en el body de la pagina, en una alerta y por la consola el resultado de, sumar, restar, multiplicar y dividir esas dos cifras
*/

var number1 = parseInt(prompt('Introduce un numero:') ,0);
var number2 = parseInt(prompt('Introduce otro numero:') ,0);

while(isNaN(number1) || isNaN(number2)){

    number1 = parseInt(prompt('Ops, parece que no introdujistes un numero, introduce un numero de nuevo:') ,0);
    number2 = parseInt(prompt('Introduce el segundo numero de nuevo:') ,0);
}

document.write("La suma de " + number1 + " + " + number2 + " es: " + (number1+number2) + "<br>");
console.log("La suma de " + number1 + " + " + number2 + " es: " + (number1+number2));
alert("La suma de " + number1 + " + " + number2 + " es: " + (number1+number2));

document.write("La resta de " + number1 + " - " + number2 + " es: " + (number1-number2) + "<br>");
console.log("La resta de " + number1 + " - " + number2 + " es: " + (number1-number2));
alert("La resta de " + number1 + " - " + number2 + " es: " + (number1-number2));

document.write("La multiplicacion de " + number1 + " x " + number2 + " es: " + (number1*number2) + "<br>");
console.log("La multiplicacion de " + number1 + " x " + number2 + " es: " + (number1*number2));
alert("La multiplicacion de " + number1 + " x " + number2 + " es: " + (number1*number2));

document.write("La division de " + number1 + " / " + number2 + " es: " + (number1/number2)  + "<br>");
console.log("La division de " + number1 + " / " + number2 + " es: " + (number1/number2));
alert("La division de " + number1 + " / " + number2 + " es: " + (number1/number2));