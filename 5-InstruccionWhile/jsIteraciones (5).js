function mostrar()
{

var sexo = prompt("ingrese f ó m .");

while (sexo != "m" && sexo != "f"){
    alert("sexo invalido: "+sexo);
    sexo = prompt("ingrese f ó m .");
}

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN