/*Hacer una función que reciba un string o cadena de caracteres. La secuencia
está dividida en oraciones que terminan en '.'. Para cada oración se pide
contar la cantidad de veces que aparece la subsecuencia 'TE'. Como
resultado se deberá retornar la cantidad de oraciones en las que la secuencia
ha aparecido más de dos (2) veces.*/

function contarTE(cadena){
    let i = 0;
    let contOr = 0;
    let canToracion = 0;
    let conTE = 0;
    let palabra = "";
    while (i < cadena.length){ //controlo que el indice sea menor que la longitud de la cadena
        while ((cadena[i] != ".") && (i < cadena.length)){ //controlaria una oracion. mietras sea distinto de un punto y no termine la cadena
            palabra = cadena[i] + cadena[i+1]; //concateno una silaba de la cadena controlo si es igual a Te o te
            if (palabra == "Te" || palabra == "te"){ //controlo sila silaba es igual a "Te" o "te"
                conTE++; //en el caso de que encuentre un "TE" aumento mi contador en 1
                console.log(conTE); //no es necesario. lo uso para ver cuantas silabas "te" va encontrando
            }
            i++; //incremento mi indice
        }
        if (conTE > 2){ //controlo si conTE (contador de te) es mayor que dos para informar
            contOr++ //de ser verdadero aumento el contador para informar que al menos en una oracion se encotro la secuencia "TE" mas de dos veces
        }
        conTE = 0; //vuelvo a poner en 0 el contador para volver a controlar si es que existe otra oracion
        i++; //aumento el indice 

    }
    return(contOr); //retorno la cantidad de oraciones que tienen mas de dos "te" 
} 
let canToracion = contarTE("Hacerte. una función que teresa un string o cadena de caracteres. Late secuencia. Este dividida en oraciones que terminante en.");
console.log(`La cant. de veces que aparece la subcadena TE es: ${canToracion}`);