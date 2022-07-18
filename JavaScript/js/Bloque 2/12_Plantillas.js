'use strict';

//Plantillas de texto

 var nombre =  prompt('Ingrese su nombre');
 var apellidos = prompt('Ingrese sus apellidos');

 //var texto = 'Hola, mi nombre es : ' + nombre + ' y mis apellidos son ' + apellidos;
var texto = `<h1>Hola, que tal?<h1>
             <h3> Mi nombre es: ${nombre}</h3>
             <h3> Mis apellidos son: ${apellidos}`;

 document.write(texto);