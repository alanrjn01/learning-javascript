//---------------------------------
//Prototipos en Javascript
//---------------------------------
//...Los prototipos podemos entenderlos como clases en otros lenguajes de programación.
//creación de "clase" Persona
function Persona(nombre, segundoNombre,altura){
    //asignación de propiedades
    this.nombre=nombre;
    this.segundoNombre=segundoNombre;
    this.altura= altura;
}
//método de la "clase" Persona
//se debe especificar como prototipo y luego el nombre del método
//posteriormente se le asigna la función
Persona.prototype.saludar = function(){
    console.log("Hola soy " +this.nombre + " y mi segundo nombre es " + this.segundoNombre);
}
Persona.prototype.soyAlto = function(){
    if(this.altura >=180){
        console.log("Mido " + this.altura + ", soy alto.")
    }else{
        console.log("Mido " + this.altura + ", no soy alto :(.")
    }
}
//creación de una instancia de Persona
var alan = new Persona("Alan","Gastón",174);
//___________________________________

//---------------------------------
//Clases y herencia en Javascript ECMAScript 2015
//---------------------------------

//creación de clase Persona con constructor y métodos
//Con una estructura más parecida a Java.
class Persona{
    constructor(nombre, segundoNombre,altura){
        //asignación de propiedades
        this.nombre=nombre;
        this.segundoNombre=segundoNombre;
        this.altura= altura;
    }
    saludar(){
        console.log("Hola soy " +this.nombre + " y mi segundo nombre es " + this.segundoNombre);
    }
    soyAlto(){
        if(this.altura >=180){
            console.log("Mido " + this.altura + ", soy alto.")
        }else{
            console.log("Mido " + this.altura + "cm, no soy alto :(.")
        }
    }
}
//Herencia
//creación de clase Desarrollador que hereda de la clase padre Persona
class Desarrollador extends Persona{
    constructor(nombre,segundoNombre,altura){
        //usamos super para utilizar el constructor de la clase padre
        super(nombre,segundoNombre,altura)
    }
    saludar(){
        console.log("Hola soy " +this.nombre + " y soy un desarrollador ");
    }
}

var alan = new Persona("Alan","Gastón",174);
var gonza = new Desarrollador("Gonza","Alzugaray",150);
var raul = new Persona("Raul","Jujuy",183);
gonza.saludar();
//output : Hola soy Gonza y soy un desarrollador
raul.saludar();
// output : Hola soy Raul y mi segundo nombre es Jujuy
//___________________________________

//---------------------------------
//Funciones como parámetros
//---------------------------------
class Humano{
    constructor(nombre, segundoNombre,altura,esDev){
        //asignación de propiedades
        this.nombre=nombre;
        this.segundoNombre=segundoNombre;
        this.altura= altura;
        this.esDev=esDev;
    }
    //indicamos como parámetro una variable
    //al momento de llamar al método saludar es opcional indicarle o no algo por parámetro
    saludar(fn){
        console.log("Hola soy " +this.nombre + " y mi segundo nombre es " + this.segundoNombre);
        //comprueba si el parámetro fn es true.
        //lo será si se le indica algo por parámetro
        //posteriormente en el bloque de código se llama a su función para que se ejecute
        if(fn){
            //se llama a la funcion responderSaludo a través de fn indicando los parámetros q en este caso son las propiedades del objeto
            fn(this.nombre, this.segundoNombre,this.esDev);
        }
    }
}
//esta función puede utilizarse como parámetro que se pasa al método saludar de la clase Persona
function responderSaludo(nombre,segundoNombre,esDev){
    if(esDev){
        console.log("Buen día " + nombre + " " + segundoNombre + ", sos un gran desarrollador/a");
    }
    else{
        console.log("Buen día " + nombre + " " +  segundoNombre);
    }
}

var alan = new Humano("Alan","Gastón",175,true);
var gonza = new Humano("Gonza","Alzugaray",150,false);
//se indica por argumento la funcion responderSaludo
alan.saludar(responderSaludo);
//output: Hola soy Alan y mi segundo nombre es Gastón
//Buen día Alan Gastón, sos un gran desarrollador/a
gonza.saludar(responderSaludo);
//output: Hola soy Gonza y mi segundo nombre es Alzugaray
//Buen día GonzaAlzugaray

//_________________________________________

//---------------------------------------
//Funcionamiento del Tiempo en Javascript
//---------------------------------------

console.log("a");
//setTimeOut ejecuta algo a partir del tiempo ingresado (milisegundos)
//Declaración de función a ejecutar y posteriormente el tiempo 20000 milisegundos = 2 segundos.
setTimeout(function(){
    console.log("b");
},2000)
console.log("c");

//output: Javascript tardó 2 segundos en mostrar la letra "b":
//a
//c
//undefined
//b

console.log("a");
setTimeout(function(){
    console.log("b");
},0)
console.log("c");
//output por más que el tiempo para mostrar la "b" sea 0, Javascript primero terminará de ejecutar su programa y posteriormente quitar de la lista de espera la tarea encargada al navegador
//a
//c
//undefined
//b