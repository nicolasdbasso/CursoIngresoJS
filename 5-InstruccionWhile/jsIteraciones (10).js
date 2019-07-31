function mostrar() {

	var contador = 0;
	var contadorceros = 0;
	var contadorpares = 0;
	var contadorpositivo = 0;
	var contadornegativo = 0;
	var sumanegativos = 0;
	var sumapositivos = 0;
	var promediopositivos = 0;
	var promedionegativos = 0;
	var diferenciapositivosnegativos = 0;

	//declarar contadores y variables 

	var respuesta = "si";

	while (respuesta != "no") {

		var num = parseInt(prompt("Ingrese un numero."));
		while (isNaN(num)) {
			num = parseInt(prompt("Ingrese un numero."));
		}

		if (num == 0) {
			contadorceros++;
		}

		if (num % 2 == 0) {
			contadorpares++;
		}

		if (num > 0) {
			contadorpositivo++;
			sumapositivos += num;
		} else {
			contadornegativo++;
			sumanegativos -= num;
		}

		respuesta = prompt("quiere volver a ingresar numero?");
	}

	promedionegativos = sumanegativos / contadornegativo;
	promediopositivos = sumapositivos / contadorpositivo;
	diferenciapositivosnegativos = sumapositivos - sumanegativos;


	document.write = "La suma de los numeros negativos es: " + sumanegativos + ". La suma de los numeros positivos es: " + sumapositivos + ". La cantidad de números positivos es: " + contadorpositivo + ". La cantidad de números negatviso es: " + contadornegativo + ". La cantidad de ceros es: " + contadorceros + ". La cantidad de números pares es: " + contadorpares + ". El promedio de los positivos es: " + promediopositivos + ". El promedio de los negativos es: " + promedionegativos + ". La diferencia entre los positivos y negativos es: " + diferenciapositivosnegativos + ".";


}//FIN DE LA FUNCIÓN