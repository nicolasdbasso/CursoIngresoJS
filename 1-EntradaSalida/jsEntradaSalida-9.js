/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

    var sueldo = parseInt(document.querySelector("#sueldo").value);
    var resultado = document.querySelector("#resultado");

    var total = sueldo * 1.10;

    resultado.value = total;
}
