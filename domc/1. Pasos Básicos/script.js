
/*
Preparación del archivo HTML
Crea el archivo JavaScript

Accede al contenedor en JavaScript
Crea el elemento a agregar
Agrega contenido al elemento
Agrega el elemento al contenedor

-*/
var contenedor = document.getElementById('contenedor');

var parrafo = document.createElement('p');
parrafo.textContent = '1. Este es un párrafo creado dinámicamente.';
contenedor.appendChild(parrafo);

var otroParrafo = document.createElement('p');
otroParrafo.textContent = '2. Este es otro párrafo creado dinámicamente.';
contenedor.appendChild(otroParrafo);
