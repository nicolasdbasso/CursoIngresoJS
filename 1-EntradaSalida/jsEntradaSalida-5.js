/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	

    nombre = document.querySelector("#elNombre").value;
    edad = document.querySelector("#laEdad").value;

    alert("Usted se llama "+nombre+" y tiene "+edad+" años.");
	
}

