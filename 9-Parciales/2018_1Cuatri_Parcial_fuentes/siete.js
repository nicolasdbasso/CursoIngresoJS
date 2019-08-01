function mostrar()
{
    var sexo;
    var nota;
    var cantNota = 5;
    var sumaNotas = 0;
    var prom;
    var notaBaja;
    var sexoNotaBaja;
    var cantVaronesMasSeis= 0;
    var flag = 0;

    for (i = 0 ; i < cantNota ; i++){
        do{
            nota = prompt("Ingrese nota (entre 0 y 10): ");
        }while(nota < 0 || nota > 10 || isNaN(nota));

        do{
            sexo = prompt("Ingrese sexo ('m' o 'f'): ");
        }while (sexo != 'm' && sexo != 'f');


        /*
        if (flag == 0){

            notaBaja = nota;
            flag= 1;
            
        }else{
            if (nota > notaBaja){
                notaBaja = nota;
                sexoNotaBaja = sexo;
            };
        };
*/

if (nota > notaBaja || flag == 0){
    notaBaja = nota;
    sexoNotaBaja = sexo;
    flag = 1;
}

        if ( sexo == 'm' && nota >= 6){
            cantVaronesMasSeis++;
        };

        sumaNotas+= nota;
        
    };

    prom = sumaNotas / cantNota;

    alert("El promedio de las notas totales es: "+prom+". La nota mas baja es: "+notaBaja+" y el sexo de esa persona es: "+sexoNotaBaja+". La cantidad de varones que su nota haya sido >= 6 es: "+cantVaronesMasSeis+".");



}
