/* Diseña un script que vaya leyendo números y guardándolos en un array. Una vez lleno mostrará el array y deberá decir cuantos números son pares y cuantos son impares. 
La entrada de datos termina cuando el usuario teclea 0 o un valor no numérico.
Intenta resolverlo sin usar métodos del objeto array, solo indices y longitudes de arrays.
No debe aceptar valores no numéricos (isNaN(valor) permite detectar valores no numéricos). */

var lista = []
var indice = 0
var pares = 0
var impares = 0

do{
    nums = parseInt(prompt('Ingrese un numero: '))
    lista.push(nums)
    indice++
}while(nums != 0)
document.write(`La lista de numeros que ingresó es: ${lista}` +'<br>')
for(indice = 0; indice < lista.length; indice++){
    if(lista[indice]%2==0){
        pares++
    }else{
        impares++
    }
}
document.write(`La cantidad de numeros pares es: ${pares}` +'<br>')
document.write(`La cantidad de numeros impares es: ${pares}`)