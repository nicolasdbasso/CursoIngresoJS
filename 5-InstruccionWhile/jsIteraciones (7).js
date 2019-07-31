function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta="si";

	/*while (confirm("quiere ingresar un numero?")){
		var num = parseInt(prompt("Ingrese un numero."));
		acumulador += num;
	}*/

	while (respuesta == "si"){
		var num = parseInt(prompt("Ingrese un numero."));
		while (isNaN(num)){
			num = parseInt(prompt("Ingrese un numero."));
		}
		acumulador += num;
		respuesta = prompt("quiere volver a ingresar numero?");
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN