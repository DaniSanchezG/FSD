'use strict';

//Eventos del ratón

window.addEventListener('load', () => {
    function changeColor(){
        let bg = btn.style.background;
        bg == "green" ? btn.style.background = "red" : btn.style.background = "green";
    
        btn.style.padding = "10px";
        btn.style.border = "1px solid #ccc";
        return true;
    }
    
    var btn = document.querySelector("#btn");
    
    //evento click
    
        btn.addEventListener('click', evento => {changeColor()});
    
    //Mouse over
    
        btn.addEventListener('mouseover', evento => {btn.style.background = "#ccc"});
        btn.addEventListener('mouseout', evento => {btn.style.background = "yellow"});
    
    // Focus
        let input = document.querySelector("#fieldName");
       // input.addEventListener('focus', evento => {console.log("Has entrado en el input");});
    
    // Blur
    
      //  input.addEventListener('blur', evento => {console.log("Has salido del input");});
    
    // Keydown
    
        input.addEventListener('keydown', evento => {console.log("KEYDOWN  = Estas pulsando la tecla", String.fromCharCode(evento.keyCode));});
    
    
    // Keypress
    
        input.addEventListener('keypress', evento => {console.log("KEYPRESS = Has pulsado una tecla", String.fromCharCode(evento.keyCode));});
    
    // Keyup
    
        input.addEventListener('keyup', evento => {console.log("KEYUP = Has soltado una tecla", String.fromCharCode(evento.keyCode));});
});

