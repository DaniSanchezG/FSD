'use strict';

//Parametros rest y spread


//Parametro de tipo rest te guarda todo lo sobrante en un array

function listadoFrutas(fruta1, fruta2, ...restoDeFrutas) {
    console.log("Fruta 1: " +  fruta1);
    console.log("Fruta 2: " +  fruta2);
    console.log("Resto de frutas: " +  restoDeFrutas);
}

listadoFrutas("Manzana", "Pera", "Naranja", "Sandia", "Melon");

var frutas = ["Manzana", "Pera"];
listadoFrutas(...frutas, "Naranja", "Sandia", "Melon");