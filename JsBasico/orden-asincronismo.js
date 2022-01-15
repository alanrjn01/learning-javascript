//---------------------------------------
//Manejando orden y asincronismo en Javascript

//---------------------------------------
const API_URL= 'https://swapi.dev/api/';
const PEOPLE_URL= 'people/:id';
const opts={ crossDomain:true };

const onResponse = function(person){
    console.log(`Hola, yo soy  ${person.name}`);
}

function obtenerPersonaje(id){
    const url= `${API_URL}${PEOPLE_URL.replace(':id',id)}`;
    //esto solo se ejecuta cuando el request sea exitoso
    $.get(url,opts,onResponse);
}

function obtenerPersonaje(id,callback){
    const url= `${API_URL}${PEOPLE_URL.replace(':id',id)}`;
    
    $.get(url,opts,onResponse,function(person){
        console.log(`Hola, yo soy  ${person.name}`);
        if (callback){
            
        }
    });
}
for (var i =0 ; i<10 ; i++){
    obtenerPersonaje(i, function(){

    });
}