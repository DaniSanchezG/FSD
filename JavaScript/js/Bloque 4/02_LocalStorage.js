'use strict';

// LocalStorage

    // LocalStorage es una variable que se guarda en el navegador
    // y que se puede acceder desde cualquier parte del mismo
    // sin necesidad de recargar la página.

    if(typeof(localStorage) !== "undefined"){
        console.log("LocalStorage disponible");
    }else{
        console.log("LocalStorage no disponible");
    }

    // Guardar una variable en el localStorage

    localStorage.setItem("pelicula", "Harry Potter y las reliquias de la muerte");

    // Obtener una variable del localStorage

    document.querySelector("#movies").innerHTML = localStorage.getItem("pelicula");

    // Eliminar una variable del localStorage

    localStorage.removeItem("pelicula");

    // Guardar objeos en el localStorage

    var usuario ={
        nombre : "Daniel Sánchez", 
        email : "danielsanchez@gmail.com",
        web : "www.danielsanchez.com"
    }

    localStorage.setItem("usuario", JSON.stringify(usuario));

    // Obtener un objeto del localStorage

        usuario = JSON.parse(localStorage.getItem("usuario"));
        document.querySelector("#usuarios").appendChild(document.createTextNode(`Nombre de usuario: ${usuario.nombre} Email: ${usuario.email} Web: ${usuario.web}`));
        localStorage.removeItem("usuario");