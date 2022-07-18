'use strict';

//Ejercicio 1 del bloque 4

    //1.formulario que nos permita añadir peliculas
        //1.1 crear un formulario
        //1.2 crear un input para el nombre de la pelicula
        //1.3 crear un botón para añadir la pelicula
    //2.Recoger el nombre de la pelicula del input
    //3.Añadir el nombre de la pelicula a una lista de peliculas y mostrarla en el DOM dentro del div con id movies

var formuAddMovie = document.querySelector('#formAddMovie');
var formularioDeleteMovie = document.querySelector('#formDeleteMovie');

window.addEventListener('load', event => {
    var movies = document.querySelector('#movieList');
    var li;

    function loadList(){
        for (var i in localStorage){
            if(typeof localStorage[i] == 'string'){
                li = document.createElement("li");
                li.append(localStorage[i]);
                movies.append(li);
            }
        }
    }

    function deleteList(){
        movies.innerHTML = "";
    }

    function reloadList(){
        deleteList();
        loadList();
    }
        
    formuAddMovie.addEventListener('submit', () => {
           let movie = document.getElementById('addMovie').value;
               li = document.createElement("li");
               li.append(movie);
               movies.append(li); 
               localStorage.setItem(movie, movie);
    });

    formularioDeleteMovie.addEventListener('submit', () => {
        let movie = document.getElementById('deleteMovie').value;
        if(movie.length >= 1){
            localStorage.removeItem(movie);
            reloadList();
        }    
 });


});    