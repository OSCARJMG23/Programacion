// Crear nodo de tipo Element
// Crear nodo de tipo Text
// Añadir el nodo Text como hijo del nodo tipo Element
// Añadir el nodo Element como hijo del cuerpo de la pagina
// VER en INSPECCIONAR


// Crear nodo de tipo Element
var parrafo = document.createElement("p");
parrafo.id="paraEliminar"    //* ****************************** */
// Crear nodo de tipo Text
var contenido = document.createTextNode("Hola Mundosss!");

// Añadir el nodo Text como hijo del nodo tipo Element
parrafo.appendChild(contenido);

// Añadir el nodo Element como hijo del cuerpo de la pagina
document.body.appendChild(parrafo);


//Para agregar a un elemento ya existente
var contenedor = document.getElementById("primerDiv");
contenedor.appendChild(parrafo);

// Para eliminar un elemento
var elim = document.getElementById("paraEliminar");
elim.parentNode.removeChild(elim);

