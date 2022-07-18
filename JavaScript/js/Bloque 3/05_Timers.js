'use strict';



window.addEventListener('load', () => {

    //timers
    function intervalo(){
        let time = setInterval(() => {
            let btn = document.querySelector("#btn");
            let bgColor = btn.style.background;
            console.log("Set interval ejecutado");
            bgColor == "red" ? btn.style.background = "green" : btn.style.background = "red";
        }, 500);
        return time;
    }

    let time = intervalo();

    var start = document.querySelector('#start');
    start.addEventListener('click', () => {
        time = intervalo();
        });

    var stop = document.querySelector('#stop');
    stop.addEventListener('click', () => {
        clearInterval(time);
        });
    }
);