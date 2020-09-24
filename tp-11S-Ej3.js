/*Hacer una función que permita contar la cantidad de palabras de una cadenade caracteres, terminada en punto,
y devolver la longitud de la palabra más larga que comienza con 'a'.*/

//let cadena = "Hacer una función que permita contar los antecedentes acentados."
//let contPal = 1;

function palabraLargaA(cadena){
    let contPal = 1;
    let palabraLarga = "";
    let i = 0;
    while (cadena[i] == " "){
        i++;
    }
    while (i < cadena.length){
        let palabraA = "";
        if (((i == 0) && (cadena[i] == "a" || cadena[i] == "A")) || ((cadena[i] == "a" || cadena[i] == "A") && (cadena[i-1] == " "))) {
            while (cadena[i] != " " && cadena[i] != "."){
                palabraA += cadena[i];
                i++
            }
        }
        if (palabraA.length > palabraLarga.length){
            palabraLarga = palabraA;
        }
        if (cadena[i] == " "){
            contPal++;
        }
        i++;
    }
    console.log(palabraLarga.length);
}
let MayCantCarc = palabraLargaA("hacer una función que permita contar los accidentes antecedentes acentados.");
//sconsole.log(`La cant. de palabras es: ${contPal}, la mas larga es: ${palabraLarga} con ${MayCantCarc} caracteres.`);