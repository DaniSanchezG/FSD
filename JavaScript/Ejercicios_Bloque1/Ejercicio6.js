'use strict';

// Ejercicio 6 bloque 1
/* Programa que nos diga si un numero es par o impar
    1- una ventana prompt
    2- si no es un numero valido, que lo pida otra vez
*/

var number = parseInt(prompt('Introduce un numero:') ,0);

while(isNaN(number)){
    number = parseInt(prompt('Ops, parece que no introdujistes un numero, prueba de nuevo:') ,0);
}

if(number % 2 == 0){
    document.write('El numero ' + number + ' es par');
}else{
    document.write('El numero ' + number + ' es impar');
}