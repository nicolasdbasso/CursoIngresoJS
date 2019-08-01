/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {
    var precio = 35;
    var cantidad = document.querySelector("#Cantidad");
    var marca = document.querySelector("#Marca");
    var precioConDesc = document.querySelector("#precioDescuento");
    var descuento = 1;
    var precioFinal;
    var IIBB = 0;

    switch (cantidad) {
        case 1:
        case 2:
            precioConDesc = cantidad * descuento;
            break;
        case 3:
            if (marca == "ArgentinaLuz") {
                descuento = 0.85;
                precioConDesc.value = precio * descuento;
            } else if (marca == "FelipeLamparas") {
                descuento = 0.9;
                precioConDesc.value = precio * descuento;
            };
            break;
        case 4:
            if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
                descuento = 0.75;
                precioConDesc.value = precio * descuento;
            } else {
                descuento = 0.95;
                precioConDesc.value = precio * descuento;
            };
            break;
        case 5:
            if (marca == "ArgentinaLuz") {
                descuento = 0.6;
                precioConDesc.value = precio * descuento;
            } else {
                descuento = 0.7;
                precioConDesc.value = precio * descuento;
            };
            break;
        default:
            descuento = 0.5;
            precioConDesc = precio * descuento;
    }

    precioFinal = cantidad * precio * descuento;

    if (precioFinal > 120) {
        IIBB = precioFinal * 0.1;
        //FLAGGGGGGGGGGG
    }

    alert("El importe final es de: " + precioFinal + ". Y pagó de IIBB: " + IIBB);

}
