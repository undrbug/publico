/*Debe modificarse el desarrollo del punto anterior para permitir:
● Cargar un array con x múltiplos del número n, siendo que x y n son
valores que ingresa el usuario por teclado. Se deben imprimir los
valores calculados.
● Repetir el proceso hasta que el usuario ingrese 0 para la cantidad de
múltiplos a generar, es decir, cuando x = 0.*/


let Array = [];
function multiplos(numN,numX){
    for (var i = 0; i < numX; i++){
        Array.push(numN * i);
        console.log(Array[i]);
    }
    return(Array)
}
let numN = 2 //prompt("ingrese un numero para multiplicar");
let numX = 5 //prompt("ingrese un limite de multiplos");
Array = multiplos(numN,numX);
