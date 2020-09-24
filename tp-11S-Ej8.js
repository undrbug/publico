/*Hacer una función que reciba un string o cadena de caracteres y determine si
la misma se trata de una dirección de correo electrónico bien definida.
Considerar para esto las siguientes reglas:
a. Debe comenzar con al menos tres (3) caracteres indicando el nombre
del usuario,
b. Debe contener el caracter “@” para separar nombre de usuario del
dominio,
c. El texto del dominio debe tener al menos tres (3) caracteres
inicialmente, luego un punto “.” y dos caracteres al menos para
determinar el final del dominio,
d. Considerar que no puede finalizar en punto y que podría haber más de
un punto para un dominio más largo, por ejemplo: fceqyn.unam.edu.ar undrbug@gmail.com           */

function strMail(dirmail){
    var i=0;
    var posarroba = 0;
    var user = false;
    var arroba = false;
    var dominio = false;
    var punto = 0;
    let dotEnd = false;
    while (i < dirmail.length){
        while (i < dirmail.length && dirmail[i] != "@"){
            arroba = true;         
            posarroba = i+1;
            i++
        }
        if (posarroba >= 3){
            user = true;
        } else {
            return("Revisar usuario")
        }
        let finDom = dirmail.length;
        finDom--
        if (dirmail[finDom] == "."){
            return("Revisar dominio, termina en punto");
        }else {
            dotEnd = true;
        }
        posarroba++;
        finDom++;
        while (dirmail[finDom] != "."){
            finDom--;
        }
        var contCarDom = 0;
        while (posarroba < finDom){
            while (dirmail[posarroba] != "." && posarroba < finDom){
                contCarDom++
                posarroba++
            }
            if (contCarDom >= 3){
                dominio = true;
            } else {
                return("Controlar dominio.");
            }
            contCarDom = 0;
            posarroba++;
        }
        if (dominio && dotEnd && user){
            return("direccion de correo bien definida");
        } else {
            return("Revisar el dominio");
        }
    }
}
//strMail(prompt("Infrese una direccion de correo valida"))
let respueta = strMail("123@gmai.laa.com.ar");
console.log(respueta);
