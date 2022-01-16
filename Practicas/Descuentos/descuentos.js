
function calcularPrecioConDescuento(){
    //precioOriginal = precio
    //descuento = descuento a aplicar
    const input1 = document.getElementById("inputPrice");
    const precioOriginal = input1.value;
    const input2 = document.getElementById("inputDiscount");
    const descuento = input2.value;
    const input3 = document.getElementById("inputCoupon");
    const cupon = input3.value;
    //el porcentaje del precio total que se va a pagar
    var porcentajePrecioConDescuento= 100 - descuento;
    //el precio final aplicando el descuento
    var final = (precioOriginal * porcentajePrecioConDescuento) /100;
    //creacion de array con cupones
    //los cupones tienen 10% de descuento adicional
    const cupones = [
        "Holanda",
        "Holandeses",
        "ola"
    ]
    //recorremos el array de cupones para verificar si el cupon ingresado coincide con algun cupon de la lista
    for ( var i = 0; i< cupones.length; i++){
        if(cupon === cupones[i]){
            alert("Cupón válido!");
            //se aplica el cupon al precio
            var porcentajePrecioConCupon = 100 - 10;
            final= (final * porcentajePrecioConCupon) /100;
        }
    }
    //almacenamos el id en la variable result
    const result = document.getElementById("result-container");
    //la propiedad innerText nos sirve para colocar texto en la variable que contiene la ID especificada.
    result.innerText = "El precio final es : $" + final;
}
