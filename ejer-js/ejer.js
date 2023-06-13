/* En el siguiente ejercicio vamos a generar otra pirámide

Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50)

Ejemplo:

1

12

123

1234


12345

123456

…… */


var nr = parseInt(prompt('Ingrese el numero de repiticiones: '))
var i,rep;

if(nr > 0 && nr <= 50){
    for (i=0;i<=nr;i++){
        for(rep=1;rep<=i;rep++){
            document.write(rep)
        }
    document.write("<br>")
    }
}else{
    alert('El numero que ingreso no es valido')}