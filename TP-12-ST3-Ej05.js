/*Hacer una función que reciba una cadena de caracteres y analice: si encuentra palabras que inicien con “a”, 
finalicen con “o” y cuya longitud sea mayor a 5. En caso afirmativo, la función deberá devolver una nueva 
cadena con esas palabras convertidas en mayúsculas.*/
function nuevaFraseMayuscula(cadena) {
    let i = 0;
    let contPal = 0;
    let palabrasAS5 = "";
    cadena = cadena.toLowerCase();
    while (i < cadena.length) {
        if (cadena[i] == "a") {
            let palabra = "";
            while (cadena[i] != " " && i < cadena.length) { 
                palabra += cadena[i];
                i++            
            }
            let i2 = palabra.length;
            if ((i2 > 5) && palabra.endsWith("o")) {
                palabrasAS5 = palabrasAS5 + palabra + ".";
                contPal++
            }
        }
        if (i < cadena.length){ 
            i++;
        }
    }
    while (palabrasAS5.includes(".") == true && contPal > 1){
        palabrasAS5 = palabrasAS5.replace("."," ")
        contPal--
    }
    return(palabrasAS5.toUpperCase());
}
console.log(nuevaFraseMayuscula('Mi armario esta infestado de acaroo es una lastima porque acabo de adquirirlo'));
console.log(nuevaFraseMayuscula('Ahorro para comprarme una moto acuática, no se para que si no salgo de vacaciones'));
