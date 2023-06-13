/* En el siguiente ejercicio usaremos los números aleatorios para rellenar una quiniela

Realiza un script que imprima 14 resultados aleatorios de una quiniela 1 X 2.

Ej:

Resultado 1: 1


Resultado 2: X

Resultado 3: 2

…..

Resultado 14: 2 */

var res;
var i;

for(i=1;i<=14;i++){
    num = Math.floor(Math.random()*3);
    if(num==0){
        num='x';
    }
    document.write('resultado ' + i + '; '+ num + '<br>');
}