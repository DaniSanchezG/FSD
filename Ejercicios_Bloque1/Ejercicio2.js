'use strict';

//Ejercicio 2 del bloque 1
/* Utilizando un bucle, mostar la suma y la media de los numeros introducidos
hasta introducir un numero negativo y ahi mostrar el resultado */
var sum = 0;
var media = 0;
var contador = 0;
var number = 0;
do{
    number = parseInt(prompt('Introduce un numero:' , 0));
    if(isNaN(number)){
        alert('Introduce un numero valido');
        number = parseInt(prompt('Introduce un numero:' , 0));
    }else if(number >= 0){
        sum += number;
        contador++;
    }
}while(number>=0){
    media = sum/contador;
    alert('La suma de los numeros es: ' + sum + '\nLa media de los numeros es: ' + media);
};