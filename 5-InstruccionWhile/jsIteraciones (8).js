function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';
	
	while (respuesta == "si"){
		var num = parseInt(prompt("Ingrese un numero."));
		if (num >0){
			positivo+= num;
		};
		if (num < 0){
			negativo = negativo * num;
		};
		respuesta = prompt("quiere volver a ingresar numero?");
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN