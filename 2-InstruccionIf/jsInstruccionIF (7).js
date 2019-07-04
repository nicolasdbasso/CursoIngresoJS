function mostrar()
{
//tomo la edad  
edad = parseInt(document.querySelector("#edad").value);
estado = document.querySelector("#estadoCivil").value;

if (edad < 18 && estado != "Soltero"){
    alert("'Es muy pequeño para NO ser soltero..");
};
	


}//FIN DE LA FUNCIÓN