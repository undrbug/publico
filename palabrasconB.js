/*

function generarPalabrasB (cadena){
    var i = 0;
    var UltimaC = '';
    cadena = cadena.toLowerCase()
    while (i < cadena.length){
        while (cadena[i] == ' '){
            i++;
        }
        if (cadena[i] == "b"){
            while (cadena[i] != ' ' && i < cadena.length){
                UltimaC += cadena[i];
                i++;
            }
            UltimaC += ' ';
        }
        i++;
    }
    UltimaC = UltimaC.trim();
    UltimaC = UltimaC + '.';
    return UltimaC;
}

console.log(generarPalabrasB ("Buenos dias bienvenidos al principio bietro"));




Realizar una función parcial que reciba como parámetro una cadena de caracteres. 
El texto recibido representa a un párrafo que se compone de oraciones delimitadas por un “.” 
El párrafo finaliza en “#”. La función deberá devolver la cantidad de oraciones en las que esté 
presente una palabra que también se recibe como parámetro (no se deben discriminar mayúsculas ni minúsculas)*/

function parcial(cadena,parametro){
    let i = 0;
    cadena = cadena.toLowerCase()
    parametro = parametro.toLowerCase()
    let contOr = 0;
    let oracion = "";
    while (i < cadena.length){
        oracion = "";
        while (cadena[i] == " ") {
            i++
        }
        while ((cadena[i] != ".") && (i < cadena.length)){ 
            oracion += cadena[i]; 
            i++; 
        }
        if (oracion.includes(parametro) == true ) { 
            contOr++;
        }
        i++

    }
    return(contOr); 
} 
let parametro = "que"
let canToracion = parcial("Hacerte. una función que teresa un string o cadena de caracteres. Late secuencia. Este dividida en oraciones que terminante en#",parametro);
console.log(`La cant. de veces que aparece la subcadena TE es: ${canToracion}`);