'use strict';

//DOM Document Object Model

function colorChange(color){
    caja.style.backgroundColor = color;
}

//var caja = document.getElementById("micaja"); //get element by id
var caja = document.querySelector("#micaja"); //get element by id con query selector
    caja.innerHTML = "Hola soy otra caja";
    caja.style.padding = "20px";
    caja.style.color = "white";
    caja.style.width = "200px";
console.log(caja.innerHTML);