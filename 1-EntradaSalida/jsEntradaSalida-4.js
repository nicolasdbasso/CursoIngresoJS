/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	input = document.querySelector("#elNombre");

	input.value = prompt("Ingrese nombre");
}

