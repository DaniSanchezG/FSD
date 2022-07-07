'use strict';

// Switch

var edad = 27;
var imprime = '';

switch(true) {
    case 18:
        imprime = 'Eres mayor de edad';
    break;
    case edad > 25 && edad < 40:
        imprime = 'Ya eres adulto';
    break;
    case 40: 
        imprime = 'Tienes la crisis de los 40';
    break;
    default:
        imprime = 'Tu edad es ' + edad;
    break;
}

console.log(imprime);