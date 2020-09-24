/*Escribir una función que reciba un vector y un número “​ n ​ ” y lo retorne
cargado con los primeros 20 múltiplos del número n.*/

let Array = [];
function multiplos(Array,numN){
    for (var i = 0; i < 20; i++){
        Array.push(numN * i);
        console.log(Array[i]);
    }
    return(Array)
}
numN = 2 //prompt("ingrese un valor para multiplicar");
Array = multiplos(Array,numN);
