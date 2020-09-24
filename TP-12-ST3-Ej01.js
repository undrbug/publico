/*Hacer una función que, dado un string o cadena de caracteres, genere una
nueva cadena con las mismas palabras pero no pueden haber espacios en
blanco antes de la primera palabra y después de la última. Y debe haber un
solo espacio en blanco entre palabras.*/


function sinEspacios(cadena){
    cadena = cadena.trim();
    let i = 0;
    let cadSEsp = "";
    console.log(`-${cadena}-`);
    while (i < cadena.length) {
        while (cadena[i] == " "){
            i++;
        }
        while ((cadena[i] != " ") && (i < cadena.length)) {
            cadSEsp += cadena[i];
            i++
        }
        if (cadena[i] == " "){
            cadSEsp += " "
        }
    }
    return(cadSEsp)
}

let polaco = (sinEspacios(" vamos a   probar con espacios!  "));
console.log("la nueva cadena;", polaco);