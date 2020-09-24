/*Hacer una función que reciba una frase y este deba calcular un código de
clave “identificación único”, como si se tratara de un hash. Para realizar la
aplicación, el “código único” se generará a partir de la concatenación de los
caracteres impares de la frase, con el valor Unicode del caracter en el índice
par siguiente. Por ejemplo: para la frase “Hola Mundo” deberá devolver
“H111l97 77u110d111”, ya que:*/

let cadena = "Hola Mundo";
let i = 0;
let newCadena = "";
while (i < cadena.length) {
        newCadena = newCadena + cadena[i++]
        if (i < cadena.length) {
            newCadena = newCadena + cadena.charCodeAt(i++);
        }    
}
console.log("la nueva cadena es: " + newCadena);
