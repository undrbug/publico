/*Hacer una función parcial que, dada una cadena de caracteres que se pasa como parámetro, 
devuelva cuántas palabras finalizan en “n”, “s” o vocal. 
No se deben discriminar mayúsculas ni minúsculas.*/

function parcial(cadena){
    let txt = cadena.toLowerCase();
    let cont = 0;
    let palabra = "";
    let i = 0;
    while (i < txt.length){
        palabra = "";
        while (txt[i] == " "){
            i++;
        }
        while ((txt[i] != " ") && (i < txt.length)) {
            palabra += txt[i];
            i++
        }
        if (palabra.endsWith("n") || palabra.endsWith("s") || palabra.endsWith("a") || palabra.endsWith("e") || palabra.endsWith("i") || palabra.endsWith("o") || palabra.endsWith("u")  == true) {
            cont++; 
        }
    }
    return(cont);
}


let txt = "polaco en la casa de pepe";
console.log(`Ejemplo: ${parcial(txt)}`);