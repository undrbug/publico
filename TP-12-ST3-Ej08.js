/*Hacer una función que reciba como parámetro una frase y una palabra, la
función deberá devolver verdadero en caso de encontrar la palabra indicada,
dentro de la frase proporcionada, de lo contrario, devolverá falso. Suponer
que este comportamiento es el que se espera para un analizador de correo
spam.*/
function vF(cadena,palabra){
    let pos = 0;
    cadena = cadena.toLowerCase();
    palabra = palabra.toLowerCase();
    if (cadena.includes(palabra) == true){
        console.log("verdadero")
    }else{
        console.log("falso")
    }
}
vF("alta en el cielo un aguila","mono");