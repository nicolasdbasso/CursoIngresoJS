/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var sueldo = parseInt(document.querySelector("#sueldo").value);
    var resultado = document.querySelector("#resultado");

    var total = sueldo * 0.75;

    resultado.value = total;
}
