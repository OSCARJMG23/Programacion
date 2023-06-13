var numeros = []
let lista1 = Array.from({length: 3}, () => Math.floor(Math.random() * 100));
let lista2 = Array.from({length: 3}, () => Math.floor(Math.random() * 100));
let lista3 = Array.from({length: 3}, () => Math.floor(Math.random() * 100));
numeros[0]= lista1;
numeros[1]= lista2
numeros[2]= lista3;

let numerosC = numeros.flat();


let orden1 = numerosC.sort(function(a,b){return a-b});

let array1 = orden1.splice(0,3);
let array2 = orden1.splice(0,3)
let array2Inversa = array2.sort(function(a,b){return b-a});
let array3 = orden1.splice(0,3)

let resultado = [array1,array2Inversa,array3]
console.log(resultado)

