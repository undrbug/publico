/*Hacer una función llamada shacaleLoEspacioLoco(frase) que dado una secuencia de caracteres 
finalizada en un "." lo devuelva sin espacios en blanco al principio y al final de la frase, 
con un único espacio en blanco y con la primera letra de cada palabra en mayúscula.*/


function shacaleLoEspacioLoco(frase){
    let i = 0;
    frase = frase.toLowerCase();
    frase = frase.trim();
    let palabra = "";
    while (i < frase.length) {
        while (frase.includes("  ") == true){
            frase = frase.replace("  "," ");    
        }
        while (frase[i] == " "){
            i++;
        }
        while ((frase[i] != " ") && (i < frase.length)) {
            if (palabra == ""){
                palabra += frase[i].toUpperCase();
                i++;
            }else{
                palabra += frase[i];
                i++;
            }
        }
        if ((frase[i] == " ") && (frase[i+1] != ".")){
            palabra += " ";
        }
    }
    return(palabra);
}
console.log(shacaleLoEspacioLoco('   Estoy   re   pirado de la cabeza     ameo .'));