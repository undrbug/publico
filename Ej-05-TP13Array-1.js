/*Realizar una función que permita cargar un array de 20 posiciones con
números enteros. Se debe retornar aquellas posiciones en las que el valor
contenido sea múltiplo de 3.*/

    var numero = 0;
    var nArray = [];
    var posiciones = []; 
    for (var i = 0; i < 20; i++){
        numero = prompt("ingrese un valor para cargar el array");  //falta controlar q ingresen solos enteros
        console.log(numero);
        nArray.push(numero);
        if (nArray[i]%3 == 0){
            posiciones.push(i);
        }
    }
    console.log("Estas son las posiciones en los que los valores son multimos de 3:" + posiciones);