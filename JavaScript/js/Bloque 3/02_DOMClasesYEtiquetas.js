'use strict';

//DOM Document Object Model Clases y Etiquetas

function colorChange(color){
    caja.style.backgroundColor = color;
}
//Conseguir elementos con id unicos
//var caja = document.getElementById("micaja"); //get element by id
var caja = document.querySelector("#micajaId"); //get element by id con query selector
    caja.innerHTML = "Hola soy otra caja";
    caja.style.padding = "20px";
    caja.style.color = "black";
    caja.style.width = "200px";
    caja.style.backgroundColor = "red";


//Conseguir elementos por su etiqueta

  /*  var todosLosDivs = document.getElementsByTagName("div");
    todosLosDivs[2].innerHTML = "He cambiado el contenido del 2º div";
  var valor = 0; 
  for ( valor in todosLosDivs ) {
    if (typeof todosLosDivs[valor].textContent == "string"){
        console.log(todosLosDivs[valor].textContent);
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.appendChild(texto);
        document.querySelector("#miseccion").appendChild(parrafo);
    }
  }*/

      var todosLosDivs = document.querySelectorAll("div");  //selecciono todos los divs ( se puede hacer con document.getElementByTagName ("div") )
          todosLosDivs[2].innerHTML = "He cambiado el contenido del div2"; // Cambia el contenido del div 2
           
          
          for( let valor = 0 ; valor < todosLosDivs.length; valor++){
           // if(typeof todosLosDivs[valor].textContent == "string"){
              let parrafo = document.createElement("p");
              let texto = document.createTextNode(todosLosDivs[valor].textContent);
              parrafo.appendChild(texto);
              document.querySelector("#miseccion").appendChild(parrafo);
          //  }
          }

          let hr = document.createElement("hr");
          document.querySelector("#miseccion").appendChild(hr);



//Conseguir elementos por su clase css

  //  var divsRojos = document.querySelectorAll(".rojo");   usando QuerySelector
      var divsRojos = document.getElementsByClassName("rojo"); // obtengo lo mismo usando getElemenetByClassName

         for (let valor=0; valor<divsRojos.length; valor++){
            divsRojos[valor].style.backgroundColor = "red";
          }
        