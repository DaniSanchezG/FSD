$(document).ready(function(){
    console.log("jQuery funcionando");

    //Selector de id

    $("#rojo").css("background-color", "red")
              .css("color", "white");
    
    $("#amarillo").css("background-color", "yellow")
                  .css("color", "green");

    $("#morado").css("background-color", "purple")
                .css("color", "white");

    $("#verde").css("background-color", "green")
               .css("color", "white");

    //Selector de clase
    var miclase = $(".zebra");

    //console.log(miclase.eq(1)); Muestra el segundo elemento de la clase con metodos de jQuery

   /* $(".sin_borde").click(function(){
        $(this).addClass("zebra");
    });

    $(".sin_borde").dblclick(function(){
        $(this).addClass("zebra");
    });

    //Selector de etiqueta


*/
var parrafos = $("p").css("cursor", "pointer");
    parrafos.click(function(){
        var that = $(this);
        if(that.hasClass("zebra")){
            $(this).removeClass("zebra");
        }else{
            $(this).addClass("zebra");
        }
        
    });

//Selector de atributo

$('[title="Google"]').css("background-color", "#ccc");
$('[title="Facebook"]').css("background-color", "blue");

//find y parent

//$('p, a').addClass('margen_superior');

// var busqueda = $('#caja').find('.resaltado'); para buscar
var busqueda = $('#elemento2').parent().parent().find('.resaltado');
console.log(busqueda);

});