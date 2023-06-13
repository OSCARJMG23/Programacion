/* En el siguiente ejercicios vamos a utilizar un método de la clase Math para obtener el número mayor de una lista
Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor */
var n1 = prompt('Ingrese el primer nombre: ')
var e1 = parseInt(prompt('Ingrese la edad: '))
var n2 = prompt('Ingrese el segundo nombre: ')
var e2 = parseInt(prompt('Ingrese la edad: '))
var n3 = prompt('Ingrese el tercer nombre: ')
var e3 = parseInt(prompt('Ingrese la edad: '))

var maximo = Math.max(e1,e2,e3)
if(maximo==e1){
    document.write('El mayor es: '+ n1)
}
if(maximo==e2){
    document.write('El mayor es: '+ n2)
}
if(maximo==e3){
    document.write('El mayor es: '+ n3)
}