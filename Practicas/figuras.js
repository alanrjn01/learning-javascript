
function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}

function perimetroTriangulo(lado1,lado2,base){
    return parseInt(lado1) + parseInt(lado2) + parseInt(base);
}
function alturaTriangulo(base, altura){
    return (base * altura) / 2;
}

function perimetroCirculo(radio){
    return 2 * Math.PI * radio
}

function areaCirculo(radio){
    return Math.PI * Math.pow(radio,2);
}


//funcion de calcular el perimetro de cuadrado
//la variable input busca en el documento el id inputLadoCuadrado
//que corresponde al formulario en la página
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputLadoCuadrado");
    //almacenamos en una variable el valor el elemento html encontrado
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("inputLadoCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo(){
    const lado1 = document.getElementById("inputLado1Triangulo");
    const value1 = lado1.value;
    const lado2 = document.getElementById("inputLado2Triangulo");
    const value2 = lado2.value;
    const base = document.getElementById("inputBaseTriangulo");
    const value3 = base.value;
    const perimetro = perimetroTriangulo(value1,value2,value3);
    alert(perimetro);
}
function calcularAreaTriangulo(){
    const base = document.getElementById("inputBaseTriangulo");
    const value1 = base.value;
    const altura = document.getElementById("inputAlturaTriangulo");
    const value2 = altura.value;
    const area = alturaTriangulo(value1,value2);
    alert(area);
}

function calcularPerimetroCirculo(){
    const radio = document.getElementById("inputRadioCirculo");
    const value = radio.value;
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const radio = document.getElementById("inputRadioCirculo");
    const value = radio.value;
    const area = areaCirculo(value);
    alert(area);
}

function alturaIsoceles(lado1,lado2,base){
    if(lado1 != base && lado2 != base && lado1===lado2 ){
        return Math.sqrt(Math.pow(lado1,2) - (Math.pow(base,2) / 4),2);
    }
    else{
        return 0;
    }
}

function calcularAlturaIsoceles(){
    const lado1 = document.getElementById("inputLado1Isoceles");
    const value1 = lado1.value;
    const lado2 = document.getElementById("inputLado2Isoceles");
    const value2 = lado2.value;
    const base = document.getElementById("inputBaseIsoceles");
    const value3 = base.value;
    const altura = alturaIsoceles(value1,value2,value3);
    alert(altura);
}