/*Teniendo en cuenta el siguiente string: 'La casa es de color Blanco', hacer un
una función que modifique el color en el texto según los siguientes códigos: 1
= “Verde”, 2 = “Rojo”, 3 = “Amarillo” que se reciben como parámetro.*/
function colorchange(cadena,codigo){
    if (codigo == 1){
        cadena = cadena.replace("Blanco","Verde");
    }else{
        if (codigo == 2){
            cadena = cadena.replace("Blanco","Rojo");
        }else{
            if (codigo == 3){
                cadena = cadena.replace("Blanco","Amarillo");
            }
        }
    }
    return(cadena); 
}
console.log(colorchange('La casa es de color Blanco',3))