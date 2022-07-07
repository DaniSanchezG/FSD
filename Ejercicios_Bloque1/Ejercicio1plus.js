'use strict';

//Ejercicio 1 del bloque 1
/* programa que pida dos numeros y que nos diga cual es el mayor, el menor y si son iguales */

var numero1 = parseInt(prompt("Ingrese el primer numero", 0));
var numero2 = parseInt(prompt("Ingrese el segundo numero", 0));

while (isNaN(numero1) || isNaN(numero2)) {
    alert("Introduce numeros correctos");
    numero1 = parseInt(prompt("Ingrese el primer numero", 0));
    numero2 = parseInt(prompt("Ingrese el segundo numero", 0));
}

    if (numero1 > numero2) {
        alert("El primer numero es mayor");
    }else if (numero1 < numero2) {
        alert("El primer numero es menor que el segundo");
    }else if (numero1 == numero2) {
        alert("Los numeros son iguales");
    }
