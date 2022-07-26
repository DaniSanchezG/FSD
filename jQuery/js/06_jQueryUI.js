'use strict';


$(document).ready(function(){



    //Mover elemento por la paginas
    $('.element').draggable();

    //Redimensionar elemento
    $('.element').resizable();

    //Seleccionar elementos
  //  $('.selectableList').selectable();

    //Ordenar elementos
    $('.selectableList').sortable({
        update: function(event, ui){
            console.log('Ordenando');
        }
    });

    //Droppable
    $('#movedElement').draggable();
    $('#area').droppable({
        drop: function(event, ui){
            console.log('Has soltado un elemento dentro del area');
        }
    });

    //EFECTOS
    $('#show').click(function(){
        $('.effectBox').toggle('fade');
    })

    //Tooltip

    $(document).tooltip();

	//Cuadro de dialogo
	$('#lanzapopup').click(function(){
	$('#popup').dialog();
	});

	//calendario

	$('#calendar').datepicker();

	//tabs
	$('#tabs').tabs();
});


