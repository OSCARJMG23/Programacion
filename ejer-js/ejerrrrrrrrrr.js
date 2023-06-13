/* En el siguiente ejercicio vamos a recorrer los caracteres de un string usando un bucle y el método charAt
Realiza un script que pida una cadena de texto y la muestre poniendo el signo – entre cada carácter sin usar el método replace.

Ej: si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”. */

var cadena = prompt('Ingrese un texto: ');
var numChar = cadena.length;
var caracter;
var i;

for(i=0;i<numChar;i++){
    caracter = cadena.charAt(i);
    if(i == numChar - 1){
        document.write(caracter);
    }
    else{
        document.write(caracter + '-')
    }
}