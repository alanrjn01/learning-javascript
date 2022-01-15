
//vamos a usar Jquery para conectarnos a un servidor y obtener información de este, en este caso será swapi.dev

//declaramos la constante de la url de la página y de las personas
const API_URL= 'https://swapi.dev/api/';
const PEOPLE_URL= 'people/:id';
const opts={ crossDomain:true };
//hacer un request con jquery
//ALT+96 para comillas invertidas
//mandamos a llamar nuestra url de la api y de las personas.
//reemplazaremos dentro de la variable PEOPLE_URL el string "id" por un 
//número.

//$.get(`${API_URL}${PEOPLE_URL.replace('id',1)}`,{ crossDomain:true });

//para simplificar podemos armar todo el palabrerío dentro de una 
//constante para esta ocasión


//funcion que se ejecutara
const onResponse = function(person){
    console.log(`Hola, yo soy  ${person.name}`);
}

function obtenerPersonaje(id){
    const url= `${API_URL}${PEOPLE_URL.replace(':id',id)}`;
    //esto solo se ejecuta cuando el request sea exitoso
    $.get(url,opts,onResponse);
}
obtenerPersonaje(2);

//Los métodos son asincrónicos por lo cual en el orden que lleguen las respuestas es algo imposible de saber

for (var i =0 ; i<10 ; i++){
    obtenerPersonaje(i);
}

//_________________________________________

//---------------------------------------
//Manejando orden y asincronismo en Javascript

//---------------------------------------
const API_URL= 'https://swapi.dev/api/';
const PEOPLE_URL= 'people/:id';
const opts={ crossDomain:true };


function obtenerPersonaje(id,callback){
    const url= `${API_URL}${PEOPLE_URL.replace(':id',id)}`;
    
    $.get(url,opts,onResponse,function(person){
        console.log(`Hola, yo soy  ${person.name}`);
    });
}

//CALLBACKS:
