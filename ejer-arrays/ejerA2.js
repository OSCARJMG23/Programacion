/* Crea un array booleano con dos valores 'verdadero' y 'falso'. Este array te sirve para traduicr los valores true y false. 
Usalo para que el script muestre un alert con el nombre vedadero si un usuario teclea un valor entre 0 y 9 y falso en el caso contrario. */

var vOf = [true,false]
var num = parseInt(prompt('Ingrese un numero: '))

if(num >0 && num <=9){
    document.write(vOf[0])
}else{
    document.write(vOf[1])
}

//otra solucion

/* let booleano = ['falso', 'verdadero'], test, indice;
test = parseInt(prompt("Teclear un número"));
indice = (test <= 9 && test >= 0 )? 1:0;
alert(booleano[indice]); */