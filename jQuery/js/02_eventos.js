'use strict';

$(document).ready( () => {
    
var box = $("#caja");

    // MouseOver y MouseOut
    /*
    box.mouseover(function () { 
        $(this).css("background", "red");
    });

    box.mouseout(function () { 
        $(this).css("background", "purple");
    });
*/
    //Hover

    function changeRed(){
        $(this).css("background", "red");
    }

    function changePurple(){
        $(this).css("background", "purple");
    }

    box.hover(changeRed, changePurple); //se le pueden pasar dos parametro y funciones (¿callbacks?)

    // Click , Doble click

    box.click(function (){
        $(this).css("background", "green").css("color", "white");
    });

    box.dblclick(function (){
        $(this).css("background", "pink").css("color", "yellow");
    });

    //Eventos Focus y Blur
var name = $("#name");
var data = $("#data");
var data2 = $("#data2");



    $("#name").focus(function (){
        $(this).css("border", "5px solid green");
        data.hide(4000);
    });

    $("#name").blur(function (){
        $(this).css("border", "1px solid #ccc");

        data.text($(this).val()).show(400);
    });

    // Mousedown y mouseup
    data.mousedown(function(){
        $(this).css("border", "4px dashed blue");
    });

    data.mouseup(function(){
        $(this).css("border", "4px dashed gray");
    });

    //Mousemove

    $(document).mousemove(function(e){
        $("body").css("cursor","none");
        $("#parrafoUno").text("Coordenadas X: " + e.clientX);
        $("#parrafoDos").text("Coordenadas Y: " + e.clientY);

        let followMe = $("#followMe");

        followMe.css("left", e.clientX).css("top", e.clientY);
    });


});