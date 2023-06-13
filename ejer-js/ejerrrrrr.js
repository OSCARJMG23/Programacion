/* Continuando lo visto en el ejercicio anterior, vamos a realizar uno nuevo añadiendo un poco más de complejidad

Genera 3 números aleatorios entre 1 y 99 pero que no se repita ninguno */
var i =0;
var num ;
var uno = 0;
var dos = 0;
var tres = 0;
do{
    num = Math.floor((Math.random()*99)+1);
    if((num!=uno) && (num!=dos) && (num!=tres)){
        document.write(num + '<br>');
        i++;
        if(i==1){
            uno = num;
        }
        if(i==2){
            dos = num;
        }
        if(i==3){
            tres = num;
        }
    }
}while(i<3);