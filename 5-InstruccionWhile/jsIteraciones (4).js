function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");

	while(numero > 10 || numero < 0 || isNaN(numero)){
		numero = prompt("ingrese un número entre 0 y 10.");

	}

	document.querySelector("#Numero").value = numero;

}//FIN DE LA FUNCIÓN