/* Tomar tres funciones definidas de la manera tradicional y expresarlas
como funciones de flecha
 */

/* function factorial (n) {
	var total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
    return document.write(total)
} */
//Factorial tradicional
function factorial(n){
    if(n==0 || n==1){
        resultado = 1;
    }else{
        resultado = n * factorial(n-1)
    }
    return resultado
}
//Par o imapar Tradicional
function parOimpar(n){
    if(n%2==0){
        resultado = document.write(`el numero ${n} es par`)
    }else{
        resultado = document.write(`el numero ${n} es impar`)
    }
    return document.write(resultado)
}
//Raiz Tradicional
function raizC(n){
    resultado= Math.sqrt(n)
    return document.write(resultado)
}

var n= parseInt(prompt('Ingrese un numero: '))

document.write(factorial(n)) 
//Combinatoria Flecha
var combinatoria=(a,b)=factorial(a)/factorial(b)*factorial(a-b)

a = parseInt(prompt('Ingrese el valor de a: '))
b = parseInt(prompt('Ingrese el valor de b: '))

//Raiz Flecha
var raizC = n =>Math.sqrt(n);
//Impar o par Flecha
var pOm = n =>{
    if(n%2==0){
        resultado = document.write(`el numero ${n} es par`)
    }else{
        resultado = document.write(`el numero ${n} es impar`)
    }
    return document.write(resultado)
}
function contadorA(x){
    var palabra = []
    cantidadA = 0
    palabra.push(x)
    for()
}


