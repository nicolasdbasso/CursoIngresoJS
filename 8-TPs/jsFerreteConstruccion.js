/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo = parseInt(document.querySelector("#Largo").value);
    var ancho = parseInt(document.querySelector("#Ancho").value);
    var perimetro =  (largo + ancho) * 2;
    var alambre = perimetro * 3;
    alert("Se necesitan comprar: "+alambre+" metros de alambre.");


}
function Circulo () 
{
	var radio = parseInt(document.querySelector("#Radio").value);
    var alambre = ((radio * 2)   * Math.PI)*3;

    alert("Se necesitan comprar: "+alambre.toFixed+" metros de alambre.");




}
function Materiales () 
{
    var largo = parseInt(document.querySelector("#Largo").value);
    var ancho = parseInt(document.querySelector("#Ancho").value);
    var areaRectangulo = largo * ancho;
    
    var radio = parseInt(document.querySelector("#Radio").value);
    var areaCirculo = (radio * Math.PI)^2;


    var cementoRectangulo = areaRectangulo * 2;
    var calRectangulo = areaRectangulo * 3;

    alert("Para cubrir "+areaRectangulo+" mt2, necesito "+cementoRectangulo+" bolsas de cemento y "+calRectangulo+" bolsas de cal");


}