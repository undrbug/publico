/*Hacer una función que, dado un string y un carácter, devuelva una cadena de
caracteres con todas las palabras que comienzan y terminan con ese
caracter.*/
function StrCar(cadena, caracter){
    let i = 0;
    let newcad = "";
    if (cadena.includes(caracter)) {
        while (i < cadena.length){
            while (cadena[i] == " "){
                i++
            }
            let palabra = "";
            while ((cadena[i] != " ") && (i < cadena.length)){
                palabra += cadena[i];
                i++
            }
            if (palabra.startsWith(caracter) && palabra.endsWith(caracter)){
                newcad = newcad + palabra + " ";
            }
        }
    }else{
        console.log("la cadena no contiene ese caracter")
    }
    console.log(newcad)
}
//cadena.search
StrCar("ancla ultima ocurrencio !de una! persona","o");