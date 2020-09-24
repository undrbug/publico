/*Hacer una función que reciba un string y una palabra y luego analice: si
encuentra esa palabra en en string, devolver una nueva cadena que diga
“​ Encontré la palabra en la posición xx ” ​ , reemplazando en “xx” la posición en
la que se encontró.*/
function sTrPal(cadena,palabra){
    let pos = 0;
    cadena = cadena.toLowerCase();
    palabra = palabra.toLowerCase();
    if (cadena.includes(palabra) == true){
        pos = cadena.indexOf(palabra);
        let newCadena = "Encontre la palabra en la posicion:" + pos;
        console.log(newCadena); 
    }else{
        console.log("la palabra no se encuentra en la cadena");
    }
}sTrPal("alta en el cielo un aguila","en");