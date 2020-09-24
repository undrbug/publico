/*Hacer una función que dado un string o cadena de caracteres,terminada en punto, 
determine la cantidad de diptongos que aparecen.  ai,ái,au,áu,ei,eu,oi,ou,ui,uí,üí,iu,iú,ia,ua,ie,ié,ue,ué,io,ió,uo.*/
//"El periodista se dirige hacia el Congo."
function dipTongo(cadena){
    const diptongos = "aeaiáiauáueieuoiouuiuíüíiuiúiauaieiéueuéioióuo";
    let i = 0;
    let cant = 0;
    while (cadena[i] != "."){
        while (cadena[i] == " "){
            i++
        }
        while (cadena[i] != " " && cadena[i] != "."){
            let par = cadena[i] + cadena[i+1];
            let i2 = 0; 
            while (i2 < diptongos.length){
                dipt = diptongos[i2] + diptongos[i2+1];
                if (par == dipt){
                    cant++
                }
                i2++;
                i2++;
            }
            i++
        }
    }
    console.log(`La cant. de diptongos es: ${cant}`);
}
dipTongo("Llevá el paraguas y la boina porque puede llover.");