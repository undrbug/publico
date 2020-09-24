/*1. Considerando que se tene un array de números (Por ej: [5, 9, 0, -5, 9, 7, 63, ...]). 
Usted debe:
• Realizar una función que imprima la posición de aquellos números que son iguales a 0.
• Realizar una función que imprima los números almacenados en las componentes de índice
impar.
• Realizar una función que retorne la posición en que se encuentra el primer elemento
negatvo. Si no hay ningún componente negatvo deberá devolver 0.
• Realizar una función que reciba un valor N como parámetro y retorne la cantdad de veces
que aparece ese valor en el vector.
Nota: a cada función recibe un vector cargado con 15 números (además de los parámetros
que se indican en cada caso).*/

let nArray = [17,39,2,12,3,-9,0,1,15,24,2,45,-1,22,0];
function cero(nArray){
    var flag = true;
    for (var i=0; i < 15; i++){
        if (nArray[i] == 0) {
            console.log('el valor del indice: + ${i} ');
            flag = false;
        } 
    }
    if (flag == true){
        console.log("En el arrary no existe el numero 0");
    }
}
function imPar(nArray){
    for (var i=1; i < 15; i = i + 2){
            console.log(`el valor de la posicion: ${i} es: ${nArray[i]}`);
    }
}
function PrimerNegativo(nArray){
    var flag = true;
    for (var i=0; i < 15; i++){
        if (nArray[i] < 0) {
            console.log(`el primer valor negativo se encontro en la posicion: ${i} `);
            return;
        } 
    }
    if (flag == true) {
        console.log('0');
    } 
}
function CantVeces(nArray,valorN){
    var cont = 0;
    for (var i=0; i < 15; i++){
        if (nArray[i] == valorN) {
            cont++
        } 
    }
    console.log(cont);
}
CantVeces(nArray,2);