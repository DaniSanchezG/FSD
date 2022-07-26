'use strict';

$(document).ready(function(){


    //LOAD
    //$("#data").load("https://reqres.in/");

    //GET Y POST
    /*$.get("https://reqres.in/api/users", {page: 2}, function(response){
        console.log(response);
        response.data.forEach((element, index) => {
            $("#data").append("<p>" + (index+1) + "º " + element.first_name + " " + element.last_name + "</p>");
        });
    });*/

    $("#form").submit(function(e){
        e.preventDefault();
        var user = {
            name: $('input[name="name"]').val(),
            mail: $('input[name="mail"]').val()
        }

        console.log(user);

     /*   $.post($(this).attr("action"), user, function(response){
            console.log(response);
        }).done(function(){
            alert("Usuario añadido correctamente");
        }); */

        $.ajax({
            type: 'POST',
            url: $(this).attr("action"),
            data: user,
            beforeSend: function(){
                console.log("Enviando usuario...");
            },
            success: function(response){
                console.log(response);
            },
            error: function(){
                console.log("Ha ocurrido un error");
            },
            timeout : 10000

        });
        return false;
    });


});