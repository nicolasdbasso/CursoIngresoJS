/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var p1;
    var p2;
    var p3;
    var suma;

    p1 = parseFloat(document.querySelector("#PrecioUno").value);
    p2 = parseFloat(document.querySelector("#PrecioDos").value);
    p3 = parseFloat(document.querySelector("#PrecioTres").value);

    suma = p1+p2+p3;
    
    alert("La suma de los precios es: "+suma+".");

}
function Promedio () 
{
    var p1;
    var p2;
    var p3;
    var prom;

    p1 = parseFloat(document.querySelector("#PrecioUno").value);
    p2 = parseFloat(document.querySelector("#PrecioDos").value);
    p3 = parseFloat(document.querySelector("#PrecioTres").value);

    prom = (p1+p2+p3) / 3;
    
    alert("El promedio de los precios es: "+promedio+".");

	
}
function PrecioFinal () 
{
    var p1 = parseFloat(document.querySelector("#PrecioUno").value);
    var p2 = parseFloat(document.querySelector("#PrecioDos").value);
    var p3 = parseFloat(document.querySelector("#PrecioTres").value);
    
    var preciofinal = (p1+p2+p3) * 1.21;
    
    alert("El precio final de los productos + IVA es: "+preciofinal+".");

}