'use strict';

//Ejercicio 5 bloque 1
/* Muestra todos los numero divisores de un numero introducido en un prompt */

var number = parseInt(prompt('Introduce un numero:') ,0);

do{

    if(isNaN(number)){
        number = parseInt(prompt('Ops, parece que no introdujistes un numero, introduce un numero de nuevo:') ,0);
    }
}while(isNaN(number)){

        document.write('<h1>Los numeros divisores de ' + number + ' son </h1>');

    for(var i = 1; i <= number; i++){
        if(number % i == 0){
            document.write(i + '<br>');
        }
    }
}