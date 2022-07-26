'use strict';

$(document).ready(function () {

    reloadLinks();
    $('#addButton').click(function(){
        $('#lista').append('<li><a href="' + $('#addText').val() + '"/></li>');
        reloadLinks();
    });
    



});

function reloadLinks(){
    $('a').each(function(){
        let enlaces = $(this);
        let atributo = enlaces.attr("href");
        enlaces.attr('target', '_blank');
        enlaces.text(atributo);
    });
}