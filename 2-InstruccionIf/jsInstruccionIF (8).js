function mostrar()
{
//tomo la edad  
edad = parseInt(document.querySelector("#edad").value);
estado = document.querySelector("#estadoCivil").value;

if (edad > 18 && estado == "Soltero"){
    alert("Es soltero y no es menor.");
};
	


}//FIN DE LA FUNCIÓN