'use strict';

// Ejercicio 7 bloque 1
/* 
Hacer la tabla de multiplicar de un numero introducido por pantalla


var number = parseInt(prompt('¿De que numero quieres la tabla?:') ,1);

while(isNaN(number)){
    number = parseInt(prompt('Ops, parece que no introdujistes un numero, prueba de nuevo:') ,0);
}

document.write("<h1>Tabla del " + number + "</h1>");

for(var i=1; i<=10; i++){
    document.write(number + ' x ' + i + ' = ' + number*i + '<br>');
}
*/

// Todas las tablas de multiplicar de los numeros del 1 al 10

for(var i=1; i<=10; i++){
    document.write("<h3>La tabla del " + i + "<br><br></h3>");
    for(var j=1; j<=10; j++){
        if(j == 10){
            document.write(i + " x " + j + " = " + i*j + "<br><br>");
        }else{
            document.write(i + " x " + j + " = " + i*j + "<br>");
        }
    }
}