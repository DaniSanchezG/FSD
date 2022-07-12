'use strict';

//BOM - Browser Object Model

function getBomHeightWidth(){
    console.log(window.innerHeight + "x" + window.innerWidth + " : Navegador");
}

function getScreenHeightWidth(){
    console.log(window.innerHeight + "x" + window.innerWidth + " : Pantalla");
}

function redirect(url){
    window.location.href = url;
}

function openWindow(url){
    window.open(url, "", "width=400,height=300");
}

getBomHeightWidth();
getScreenHeightWidth();
console.log(window.location.href);

