'use strict';

var fecha = new Date();
var textoHora = ` Hoy es ${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()} y son las ${fecha.getHours()}:${fecha.getMinutes()}`;
    
console.log(textoHora);
console.log(parseInt(Math.random()*100));