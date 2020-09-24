/*Hacer una función que permita contar la cantidad de veces que aparece una
palabra dentro de una cadena de caracteres. La cadena de caracteres,
terminada en punto, y la palabra buscada son ingresadas por el usuario.*/

function ContarPal(cadena,palabra){
    let i = 0;
    let cont = 0;
    while (i < cadena.length){
        while (cadena[i] == " "){
            i++;
        }
        let wordNw = "";
        while ((cadena[i] != " ") && (cadena[i] != ".")){
            wordNw += cadena[i];
            i++
        }
        if (palabra == wordNw){
            console.log(wordNw);
            cont++
        }
        i++
    }
    return(cont);
}

let palabra = "lo" //prompt("ingrese una palabra para buscar:");
let cantidad = ContarPal("Entre lo que sos.",palabra);
console.log(cantidad);