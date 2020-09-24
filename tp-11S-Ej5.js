/*Hacer una función que reciba un string o cadena de caracteres ​ terminada en
"#"​ . Devolver la cantidad de palabras que cumplen todas las siguientes
condiciones: a. Comienzan con “a”, b. Terminan con “s” y c. Tienen ​ 5 caracteres de longitud​ .*/
function procesarPalabras(cadena){
    let i = 0;
    let palabrasaS5 = 0;
    while (i < cadena.length) { 
        if (((i == 0) && (cadena[i] == "a" || cadena[i] == "A")) || ((cadena[i] == "a" || cadena[i] == "A") && (cadena[i-1] == " "))){
            let palabra = "";
            while (cadena[i] != " " && cadena[i] != "#"){ //guardo en "palabra" una palabra q comienza con "A"
                palabra += cadena[i];
                i++
            }
            let i2 = palabra.length;
            if ((i2 == 5) && (palabra[i2-1] == "s" || palabra[i2-1] == "S")){ //controlo que tenga 5 caracteres y termine con "s"
                palabrasaS5++;
            }
        }
        if (i < cadena.length){ 
            i++;
        }
    }
    //return(palabrasaS5);
    console.log(`la cantidad de palabras que cumplen con los 3 requisitos son: ${palabrasaS5}`);
//return;
}
procesarPalabras("ALTAS Y BAJAS#");
