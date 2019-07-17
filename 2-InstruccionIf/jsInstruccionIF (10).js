function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
num = Math.floor(Math.random()* 10 +1)

if (num > 8){
	alert("EXCELENTE");
}else if(num > 3){
	alert("APROBÓ");
}else{
	alert("Vamos, la proxima se puede.");
}

}//FIN DE LA FUNCIÓN