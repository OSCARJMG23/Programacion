/* En en siguiente ejercicio vamos a practicar bucles y múltiplos de números

Realiza un script que escriba los números del 1 al 500, que indique cuales son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal.

Ejemplo:

1

2

3

4 (Múltiplo de 4)

5-

————————————————————-

6

7

8 (Múltiplo de 4)

9 (Múltiplo de 9)

10 */
document.write('<hr>')
var i;
var j = 500;
var rep = 0;

for(i = 1; i < j; i++){
    document.write(i);
    if(i % 4 == 0){
        document.write('(Multiplo de 4)')
    }
    if(i % 9 == 0){
        document.write('(Multiplo de 9)')
    }
    document.write('<br>')
    if(i % 5 == 0){
        document.write('<hr>')
    }
}