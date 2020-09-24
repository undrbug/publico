/*Escribir un programa que permita ingresar una frase y un caracter cualquiera.
En caso que el caracter exista dentro de esa cadena, se imprimirá la posición
en que se encuentre y se repetirá todo otra vez (es decir, se ingresará otra
cadena y otro caracter a buscar). El programa termina cuando una búsqueda
devuelve cero. Para resolver el ejercicio, se deberá usar un módulo que
reciba ambos datos y devuelva la posición en que se encuentre el carácter (o
cero si no existe).*/

function seekCar(frase, caracter){
    var i = 0;
    while (i < frase.length){
        while (frase[i] ==" "){
            i++
        }
        var resultado = "";
        if (frase[i] == caracter){
            resultado = "Se encontro el caracter en la pasicion: " + i;
            return(resultado);
        }
        i++
    }
    if (resultado === ""){
        return(0);
    }
}


var valor = seekCar(prompt("Ingrese una frase"),prompt("Ingrese un caracter"));
while (valor !== 0){
    console.log(valor);
    valor = seekCar(prompt("Ingrese una frase"),prompt("Ingrese un caracter"));
}