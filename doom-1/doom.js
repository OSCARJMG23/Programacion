const eliminar = document.getElementById("eliminar");
const agregar = document.getElementById("agregar")
const contenedor = document.getElementById("contenedor");

/* var elim = document.getElementById('eliminar');
elim.parentNode.removeChild(elim);
 */

agregar.addEventListener("click",function(){
    let parrafo = document.createElement('p');
    let contenido = document.createTextNode('Hola Mundo');
    parrafo.appendChild(contenido);
    contenedor.appendChild(parrafo);
});

eliminar.addEventListener("click",function(){
    let elim = document.querySelector('p');
   /*  contenedor.querySelector.removeChild(elim); */
    contenedor.removeChild(elim)
});