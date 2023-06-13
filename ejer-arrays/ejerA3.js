/* Sin usar métodos del objeto array, diseña una función llamada sumaLista() 
capaz de sumar todos los números que forman el array que se le pase como argumento. */
function sumaLista(lista){
    let ind, suma=0;
    for(ind=0; ind < lista.length; ind++)
       {
        suma += lista[ind];
       }
    return suma;
}
alert(sumaLista([9,3,1,4,6]))    //resultado 16