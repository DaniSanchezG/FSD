'use strict';

//Ejercicio 1 del bloque 3

//1.Formulario con los campos: nombre, apellido y edad
//2.Boton de enviar el formulario: eventos submit
//3.Mostrar esos datos por pantalla
//4.Validar los datos


//Variables globales 

window.addEventListener('load', () => {

    console.log("DOM cargado");

    var theme;
    var btnShowData = document.querySelector("#btnShowData");
    var resultContainer = document.querySelector(".resultContainer");
    var form = document.querySelector("#form");


        form.addEventListener('submit', event => {

            let name = validatorString((form.name.value).trim());
            let surnames = validatorString((form.surnames.value).trim());
            var age = validatorAge(parseInt(form.age.value));
            
            function validatorString (namee){
                if (namee.length <= 0 || namee == null) {
                    alert("El campo no puede estar vacio");
                    elementHiddenVisible(resultContainer, "hidden");
                }
             }

             function validatorAge (age){
                if (age <= 0 || isNaN(age)) {
                    alert("El valor introducido no es valido");
                    elementHiddenVisible(resultContainer, "hidden");
                }
             }

            function elementHiddenVisible (element, visibility){
                element.style.visibility = visibility;
            }
        
            theme = `<h2>Datos recogidos del formulario</h2>
                        <p>Nombre: ${form.name.value}</p>
                        <p>Apellidos: ${form.surnames.value}</p>
                        <p>Edad: ${form.age.value}</p>`;
            document.querySelector("#result").innerHTML = theme;
        });

        btnShowData.addEventListener('click', () => {
            resultContainer.style.visibility = "visible";
        });
        

    });

