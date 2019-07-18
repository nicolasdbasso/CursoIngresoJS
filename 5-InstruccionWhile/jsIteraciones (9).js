function mostrar()
{

	var contador=0;
	// declarar variables
	var max = 0;
	var min = 0;
	var respuesta='si';

	while(respuesta!='no')
	{
		var num = parseInt(prompt("Ingrese un numero."));
		if (num > max){
			max = num;
		};

		if (num < min){
			min = num;
		}
		respuesta = prompt("quiere volver a ingresar numero?");
	}




}//FIN DE LA FUNCIÓN