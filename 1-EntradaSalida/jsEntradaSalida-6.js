/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    num1 = parseInt(document.querySelector("#numeroUno").value)
    num2 = parseInt(document.querySelector("#numeroDos").value)
    total= num1+num2;

    alert("La suma de los numeros ingresados es: "+total);
}

