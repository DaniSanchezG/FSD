'use strict';

//Bucle While
//Un bucle es una esctructura de control que se ejecuta una vez o varias veces.
//El bucle while se puede ejecutar de forma infinita.

var year = 1990;

while(year <= 2025) {
    console.log("Vamos por el año " + year);
    year++;
    if(year > 2000) {
        break;
    }
}