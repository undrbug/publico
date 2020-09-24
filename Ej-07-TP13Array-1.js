/*Se ingresan datos que indican la cantidad de personas que se registran en un
hotel cada día de enero. Se necesita contar con una estadística que informe
el promedio de personas ingresadas por día, en todo el mes.*/



var cantPers = [];
var promedio = 0;
for (var i = 0; i < 31; i++){
    cantPers.push(parseInt(prompt("Ingrese la cantidad de personas que ingresan por dia:")));
    promedio = promedio + cantPers[i];
}
console.log("el promedio de ingresos por dia durante el mes de enero es: " + parseInt(promedio = promedio/i));