/*Realizar un script que incluya dos funciones.
● Función "ingresarDatos": permite cargar en un array las notas de los
15 exámenes finales de los alumnos que cursaron la cátedra
“Introducción a la Informática” durante el 1er cuatrimestre de 2020.
● Función “procesarNotas": recibe el array y deberá procesar las notas
para informar: el promedio, la nota más baja, la nota más alta y las
cantidades de aprobados y desaprobados (considerar que se aprueba
con 6).*/

let notas = [];
function ingresarDatos(notas){
    var nota_temp = 0;
    for (var i = 0; i < 15; i++){
        notas.push(parseInt(prompt("ingrese la nota:")));
    }
    return(notas);
}
ingresarDatos(notas);

function procesarNotas(notas){
    var aprobados = 0;
    var desaprobados = notas.length;
    var promedio = 0;
    var masBaja = 11;
    var masAlta = -1
    for (var i = 0; i < 15; i++){
        promedio = promedio + notas[i];
        if (notas[i] < masBaja){
            masBaja = notas[i];
        }
        if (notas[i] > masAlta){
            masAlta = notas[i];
        }
        if (notas[i] >= 6){
            aprobados++;
        }
    }
    promedio = promedio/i;
    desaprobados = desaprobados - aprobados;
    console.log("La nota mas alta es: " + masAlta);
    console.log("La nota mas baja es: " + masBaja);
    console.log("La cantidad de aprobados es: " + aprobados);
    console.log("La cantidad de desaprobados es: " + desaprobados);
    console.log("el promedio es: " + promedio);
}

procesarNotas(notas);