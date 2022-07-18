'use strict';

// JSON - JavaScript Object Notation

var movie ={
    tittle : "Harry potter y las reliquias de la muerte",
    year : 2001,
    country : "EEUU",
}

var loadMovieInBody = document.createElement("p");
    loadMovieInBody.innerHTML = `tittle: ${movie.tittle} <br>
                             year: ${movie.year}    <br>
                             country: ${movie.country}`; 
    document.querySelector("body").appendChild(loadMovieInBody);
