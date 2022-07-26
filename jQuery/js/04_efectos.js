'use strict';

$(document).ready(function(){

    var box = $("#box");
/*   $("#show").hide();

    $("#hide").click(function() {
        $(this).hide();
        $("#show").show();
        box.fadeTo('slow', 0);
    });

    $("#show").click(function() {
        $(this).hide();
        $("#hide").show();
        box.fadeTo('slow', 1);
    });*/

    $("#showHide").click(function(){
        console.log($(this).text());
        if($(this).text() == 'Ocultar'){
            box.fadeTo('slow', 0);
            $(this).text('Mostrar');
        }else{
            box.fadeTo('slow', 1);
            $(this).text('Ocultar');
        }
    });

    $("#animame").click(function(){
        box.animate({})
    });

});