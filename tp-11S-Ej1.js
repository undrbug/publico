/*Hacer una función que dado un string o cadena de caracteres, terminada en
punto, genere una nueva cadena con las mismas palabras pero no pueden
haber espacios en blanco antes de la primera palabra y después de la última.
Y debe haber un solo espacio en blanco entre palabras.*/

function Nwcadena(cadenaO){
    let i = 0;
    let Ncadena = ""
    while (i < cadenaO.length){
        while (cadenaO[i] == " "){
            i++;
        }
        let palabra = ""
        while ((cadenaO[i] != " ") && (cadenaO[i] != ".")){
            palabra += cadenaO[i];
            i++;
        }
        if (cadenaO[i] != ".") {
            Ncadena += palabra + " ";
        } else{
            Ncadena += palabra + ".";
        }
        i++
    }
    return(Ncadena);
}

let nuevacadena = Nwcadena("        Entre lo     que        sos.")
console.log(nuevacadena);
