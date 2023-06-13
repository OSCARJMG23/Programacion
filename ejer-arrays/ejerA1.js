/* En este script deberás crear un array para guardar los nombres de los días de la semana, empezando por 0 para el domingo. 
Para comprobar el funcionamiento pide al usuario un número entre 0 y 6 y devuelve el nombre del día. 
Se supone que el dato tecleado estará entre 0 y 6 */

var dias = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo']

var dia = parseInt(prompt('Ingrese un numero del 0 al 6: '))

if(dia==0){
    document.write(`El numero ${dia} corresponde al dia ${dias[0]}` )
}else if(dia==1){
    document.write(`El numero ${dia} corresponde al dia ${dias[1]}`)
}else if(dia==2){
    document.write(`El numero ${dia} corresponde al dia ${dias[2]}`)
}else if(dia==3){
    document.write(`El numero ${dia} corresponde al dia ${dias[3]}`)
}else if(dia==4){
    document.write(`El numero ${dia} corresponde al dia ${dias[4]}`)
}else if(dia==5){
    document.write(`El numero ${dia} corresponde al dia ${dias[5]}`)
}else if(dia==6){
    document.write(`El numero ${dia} corresponde al dia ${dias[6]}`)
}   
//otra solucion
/*
let dias = new Array(7), num;        
dias[0] = "Domingo";
dias[1] = "Lunes";
dias[2] = "Martes";
dias[3] = "Miércoles";
dias[4] = "Jueves";
dias[5] = "Viernes";
dias[6] = "Sábado";
num = parseInt(prompt("Número del día"));
alert("El dia es "+dias[num]); */