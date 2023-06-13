/* Un nuevo ejercicio para seguir practicando con el método charAt

Realiza un script que cuente el número de vocales que tiene un texto. */
var cadena = prompt('Ingrese una cadena de texto: ')
var numChar = cadena.length;
cadena =cadena.toUpperCase();
var car;
var contador = 0;
var i;
for(i=0;i<numChar;i++){
    car=cadena.charAt(i);
    if((car == 'A')||(car == 'E')||(car == 'I')||(car == 'O')||(car == 'U')){
        contador++;
    }
}
document.write('Numero de vocales: ' + contador + '.')