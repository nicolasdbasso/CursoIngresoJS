function mostrar()
{
//tomo la edad  
edad = parseInt(document.querySelector("#edad").value);

if (edad < 13){
    alert("Eres un niño.");
}if (edad >= 13 && edad <=17){
    alert("Eres adolescente.");
}if (edad >= 18){
    alert("Eres mayor de edad.");
};



}//FIN DE LA FUNCIÓN