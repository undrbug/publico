/*Hacer una función que permita completar una frase de dichos populares,
como por ejemplo “Quien madruga, Dios lo ayuda”. La función deberá recibir
dos parámetros, el primero es una parte de la frase, en el ejemplo es “Quien
madruga, ”, el segundo parámetro es un valor que ingresa el usuario para
completar la frase, en el caso concreto del ejemplo, sería “Dios lo ayuda”.
La función deberá retornar verdadero si la concatenación de ambos
parámetros es igual a la frase escogida.*/
function dichPopu(priPart,SecPart){
    let fraseOrig = "Al que madruga, Dios lo ayuda";
    fraseOrig = fraseOrig.toLowerCase();
    console.log(fraseOrig);
    priPart = priPart.toLowerCase();
    SecPart = SecPart.toLowerCase();
    SecPart = SecPart.trim();
    priPart = priPart.trim();
    let priSec = priPart + ", " + SecPart;
    console.log(priSec);
    if (fraseOrig == priSec){
        return("verdadero");
    }else{
        return("falso");
    }
}

console.log(dichPopu("Al qUe mAdruga","Dios Lo Ayuda"))