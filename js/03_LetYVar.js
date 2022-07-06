'use strict';

//Prueba de let y var

    //prueba con var

var numero = 40;

console.log(numero);

    if(true){
        var numero = 50;
        console.log(numero);
    }

console.log(numero);

    //prueba con let

var texto = "Cursillo Js";
console.log(texto);

    if(true){
        let texto = "Curso de JavaScript";
        console.log(texto);
    }

    console.log(texto);