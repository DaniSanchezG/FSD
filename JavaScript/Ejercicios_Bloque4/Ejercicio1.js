'use strict';

//Ejercicio 1 del bloque 4

    //1.formulario que nos permita añadir peliculas
        //1.1 crear un formulario
        //1.2 crear un input para el nombre de la pelicula
        //1.3 crear un botón para añadir la pelicula
    //2.Recoger el nombre de la pelicula del input
    //3.Añadir el nombre de la pelicula a una lista de peliculas y mostrarla en el DOM dentro del div con id movies


var formularioAddMovie = document.querySelector('#formAddMovie');
var formularioDeleteMovie = document.querySelector('#formDeleteMovie');
var li;
var ul = document.querySelector("#movieList");

    function pintar (){
        for (var i in localStorage){
            if(typeof localStorage[i] == 'string'){
                li = document.createElement("li");
                li.append(localStorage[i]);
                ul.append(li);
            }
        }
    }  

    function borrar (){
        document.querySelector('#movieList').innerHTML = ""
    }

    formularioAddMovie.addEventListener('submit', () => {

        var tituloAdd = document.querySelector('#addMovie').value;

        if(tituloAdd.length >=1){
            localStorage.setItem(tituloAdd, tituloAdd);
            li = document.createElement("li");
            li.append(tituloAdd);
            ul.append(li);
        }
    });



    formularioDeleteMovie.addEventListener('submit', () => {

        var tituloDelete = document.querySelector('#deleteMovie').value;
        console.log(tituloDelete);
        if(tituloDelete.length >=1){
            localStorage.removeItem(tituloDelete);
            borrar();
            pintar();
        }
        
    });
    


    