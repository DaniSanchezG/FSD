'use strict';

// Fetch (ajax) y peticiones a servicios / apis rest

var divUsuarios = document.querySelector('#usuarios');
var usuarioUnico = document.querySelector('#user');
var usuarioProfesor = document.querySelector('#profesor');
var cantidadUsuariso = 0;

getUsers()
    .then(data => data.json())
    .then(users => {
        userList(users.data);
        return getInfo();

    })
    .then(data => {
        usuarioProfesor.innerHTML = JSON.parse(data).nombre + ' ' + JSON.parse(data).apellido;
        return getUser();
    })
    .then(data => data.json())
    .then(user => {showUser(user.data)
    }).catch(error => console.log("error al recibir las peticiones"));


function getUsers(){
   return fetch('https://reqres.in/api/users?page=1');
}

function getUser(){
    return fetch('https://reqres.in/api/users/2');
}

function getInfo(){
  
    var profesor = {
        nombre: 'Juan',
        apellido: 'Perez',
        url: 'https://google.com'
    };

    return new Promise((resolve, reject) => {
        var profesor_string = "";
        setTimeout(() => {
            profesor_string = JSON.stringify(profesor);
            if(typeof profesor_string != 'string' || profesor_string == '' ) return reject('Error123');
            return resolve(profesor_string);
            }, 3000);
   });
    
}

function userList(usuarios){
    usuarios.map((user, i) => {
        let nombre = document.createElement('h2');
        nombre.innerHTML = (i+1)+ "º - " + user.first_name + ' ' + user.last_name;
        divUsuarios.appendChild(nombre);
        document.querySelector('#loading').style.display = 'none';
        cantidadUsuariso++;
    });
}

function showUser(user){
    let userName = document.createElement('h2');
    let avatar = document.createElement('img');
    userName.innerHTML = (cantidadUsuariso+1)+ "º - " + user.first_name + ' ' + user.last_name;
    avatar.src = user.avatar;
    avatar.width = '100';

    usuarioUnico.appendChild(userName);
    usuarioUnico.appendChild(avatar);
    document.querySelector('#loadingUser').style.display = 'none';
}