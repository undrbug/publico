/*Hacer una función que, dado un string, verifique si en la misma existe una
palabra que ingresa el usuario. La función debe devolver un fragmento de la
cadena que incluya desde la palabra en cuestión hasta el final de la cadena
(en caso de que la palabra no exista deberá devolver -1).*/
function seekWord(cadena,palabra){
    cadena = cadena.toLowerCase();
    palabra = palabra.toLowerCase();
    if (cadena.includes(palabra)) {
        let inicio = cadena.indexOf(palabra);
        console.log(`El fragmento es: ${cadena.slice(inicio, cadena.length)}`);
    }else{
        console.log(cadena.indexOf(palabra));
    }
    return;
}

seekWord("pepita la pistolera anda largando tiros por toda la ciudad!.", "opa");