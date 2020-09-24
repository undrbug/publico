/*Hacer una función que reciba como parámetro una cadena de texto, la
función deberá retornar verdadero (true) en caso de que la cadena ingresada
sea un palíndromo, es decir, si se lee de la misma forma desde la izquierda y
desde la derecha. Ejemplo de palíndromo complejo: "La ruta nos aporto otro
paso natural". En caso contrario, deberá devolver falso. No se toman en
cuenta las tildes para el análisis.*/
function esPalindromo(cadena){
    let cadena1 = cadena.trim();
    cadena1 =  cadena1.toLowerCase();
    let cadena2 = "";
    let i = 0;
    let i2 = 0;
    while (cadena1.includes(" ") == true){
        cadena1 = cadena1.replace(" ","");    
    }
    cadena2 = cadena1;
    i2 = cadena2.length
    i2--
    while (i < cadena1.length){
        if (cadena1[i] == cadena2[i2]) {
            i++
            i2--
            if (i2 == 0){
                return("true");
            }
        }else{
            return("falso");
        }
    }


}

console.log(esPalindromo("Alli va Ramon y no maravilla"));
console.log(esPalindromo("La ruta nos aporto otro paso natural"));
console.log(esPalindromo('La ruta nos aporto otro paso natural.'));