/*Escribir una función que permita cargar un vector de 10 elementos y los
imprima en orden inverso al de la carga.*/

let nArray = [0,1,2,3,4,5,6,7,8,9];
function carga(nArray){
    var i = 0;
    for (var i = 0; i <= 9; i++){
    //  nArray[i] += prompt("ingrese un valor para cargar el array"); 
        console.log('los valores a la inversa son:'+ nArray[i]); 
    }
    i = nArray.length - 1;
    for (i = nArray.length - 1; i >= 0 ; i--){
        console.log('los valores a la inversa son:'+ nArray[i]); 
    }

}

carga(nArray);