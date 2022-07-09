'use strict';

//Ejercicio 1 del bloque 2

/*Hacer un programa que
    -Pida 6 numero por pantalla y los meta en un array
    -Tiene que mostrar todos los elementos del array en el body de la pagina y la consola
    -Sacar el array ordenado y mostrarlo en pantalla
    -Sacar el array invertido y mostrarlos en pantalla
    -Mostar cuantos elementos tiene el array
    -Hacer una busqueda de un valor introducido por el usuario y que nos diga si existe en el array y cual es su indice
*/

//Variables globales 

var numeros = [];
var numero = 0;

//Pido 6 numeros por pantalla

for(var i = 0; i < 6; i++){
    numero = getNumber("Introduce un numero");
    numberCheck(numero);
    numeros.push(numero);
}

//Muestro los numeros en el body de la pagina y en la consola


showFullArray(numeros, 'DESORDENADO');

//Sacar el array odenado y mostrarlo por pantalla


    numeros.sort((a, b) => a - b);
    showFullArray(numeros, 'ORDENADO');


//Sacar el array invertido y mostrarlos en pantalla

    numeros.reverse();
    showFullArray(numeros, ' ORDEN INVERSO');

//Mostrar cuantos elementos tiene el array

document.write('<h1> NUMERO DE ELEMENTOS DEL ARRAY</h1>');
document.write('<p>El array tiene ' + (numeros.length) + ' elementos</p>');



//Hacer una busqueda de un valor introducido por el usuario y que nos diga si existe en el array y cual es su indice

var numeroIntroducido = numberCheck(getNumber("Introduce el numero que quieres buscar en el array"));
var numeroIntroducidoVoF = numberExist (numeroIntroducido, numeros);

    if(numeroIntroducidoVoF){
        document.write('<h1> EL NUMERO ' + numeroIntroducido + ' EXISTE EN EL ARRAY EN LA POSICION:' + parseInt(numeros.indexOf(numeroIntroducido)) + '</h1>');
    }else{
        document.write('<h1> EL NUMERO ' + numeroIntroducido + ' NO EXISTE EN EL ARRAY</h1>');
    }




//Funciones auxiliares


function showFullArray(array, mensaje){
    document.write('<h1> ARRAY ' + mensaje + '</h1>');
    array.forEach((elemento, indice )=> {
        document.write('<p>'+ (indice+1) + 'º elemento ----- ' +elemento+ '</p>');
        console.log(elemento);
    }); 

}

function getNumber(mensaje){
    let number = parseInt(prompt(mensaje));
    return number;
}

function numberCheck(number){
    var number1 = parseInt(number);
    if(number1 <= 0  || isNaN(number1)){
    while(number1 <= 0  || isNaN(number1)){
        number1 = parseInt(prompt('Ops, hubo un error, recuerda que tienes que introducir un numero positivo!!'));
       }
    }
     return number1;
    
}

function numberExist(number, array){
    var exist = false;
    for(var i = 0; i < numeros.length; i++){
        if(array[i] == number){
            exist = true;
            break;
        }
    }
    return exist;
}
