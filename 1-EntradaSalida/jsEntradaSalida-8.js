/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    num1 = parseInt(document.querySelector("#numeroDividendo").value)
    num2 = parseInt(document.querySelector("#numeroDivisor").value)
    total = num1%num2;

    alert("El resto de los números ingresados es: "+total);
}
