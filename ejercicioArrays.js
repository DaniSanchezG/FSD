'use strict'

/*
Programa que:
1. Pida 6 números en pantalla y los meta en un array -- 
2. MOstrar el array entero/todos los elemntos en el cuerpo de la pagina y en la consola --
3. Mostrarlo ordenado
4. Invertir su orden y mostrarlo
5. mostrar cuantos elemntos tiene el array
6. Busqueda d eun valor introducido por el usuario y que nos diga si está en el array y su índice. 
*/

var numeros = [];

//Pide los 6 numeros al usuario y metelos en el array

for(var i = 0; i < 6; i++){
    var numero = parseInt(prompt("Introduce un numero: "));
    numeros.push(numero);
}

//Muestra el array entero/todos los elemntos en el cuerpo de la pagina y en la consola

    document.write("<h1>Array original</h1>");
for(var i=0; i < numeros.length; i++){
    document.write(numeros[i] + "<br>");
}
    console.log(numeros);

//Ordena el array

document.write("<h1>Array ordenado</h1>");
   numeros.sort((a, b) => a - b);
    for(var i=0; i < numeros.length; i++){
        document.write(numeros[i] + "<br>");
    }


//Invertir orden del array

document.write("<h1>Array invertido</h1>");
for(var i=numeros.length-1; i >= 0; i--){
    document.write(numeros[i] + "<br>");
}

//mostar cuantos elemntos tiene el array

document.write("<h1>Array tiene " + numeros.length + " elementos</h1>");


//Busqueda de un valor introducido por el usuario y que nos diga si está en el array y su índice.

    var busqueda = parseInt(prompt("Introduce un numero para buscarlo: "));
    var encontrado = false;

    for(var i=0; i < numeros.length; i++){
        if(numeros[i] == busqueda){
            document.write("El numero " + busqueda + " esta en el array en el indice " + i);
            encontrado = true;
            break;
        }
    }
    
    if(!encontrado){
        document.write("El numero " + busqueda + " no esta en el array");
    }

