/*
Elabore una pagina web para gestionar datos de una lista de peliculas 
(crear, eliminar y consultar)
teniendo en cuenta los siguinetes datos por pelicula:
Titulo   |
Genero     |                        lista[0] = mapaPeli
Duracion    }mapaPeli
Director  |

use map() para el almacenamiento de una pelicula
No hay requisitos preestablecidos para la interfaz web, excepcion de 
sea atractiva y facilmente utilizable
 */


const contenedorPeliculas = document.getElementById('containerPeliculas')
const formularioPelicula = document.getElementById('formulario')
const aggPeli = document.getElementById('aggNpelicula');
const formDIv = document.getElementById('formularioDiv');

let listaPeliculas = []

//Crear nueva pelicula
function crearPelicula(titulo,genero,duracion,director,imagen){
    const pelicula = {
        titulo,
        genero,
        duracion,
        director,
        imagen,
    }
    listaPeliculas.push(pelicula)
}

//Eliminar pelicula 
function eliminarPelicula(eliminar){
    listaPeliculas.splice(eliminar, 1)
    cargarPelicula();
}

//Cargar peliculas en tarjetas
function cargarPelicula(){
    contenedorPeliculas.innerHTML = '';
    listaPeliculas.map((pelicula, index) =>{
        const tarjeta = document.createElement('div')
        tarjeta.classList.add('card', 'col');

        const tarjetaBody = document.createElement('div')
        tarjetaBody.classList.add('card-body');

        const imagen = document.createElement('img')
        imagen.classList.add('card-img-top');
        imagen.src = pelicula.imagen;

        const titulo = document.createElement('h5');
        titulo.classList.add('card-title');
        titulo.textContent = pelicula.titulo;

        const genero = document.createElement('p');
        genero.classList.add('card-text');
        genero.textContent = `Gènero: ${pelicula.genero}`;

        const duracion = document.createElement('p');
        duracion.classList.add('card-text');
        duracion.textContent = `Duración: ${pelicula.duracion}`;

        const director = document.createElement('p');
        director.classList.add('card-text');
        director.textContent = `Director: ${pelicula.director}`;

        //Boton eliminar
        const botonEliminar = document.createElement('button');
        botonEliminar.classList.add('btn', 'btn-dark')
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.addEventListener('click', () => {
            eliminarPelicula(index);
        });
        tarjetaBody.appendChild(imagen)
        tarjetaBody.appendChild(titulo)
        tarjetaBody.appendChild(genero)
        tarjetaBody.appendChild(duracion)
        tarjetaBody.appendChild(director)
        tarjetaBody.appendChild(botonEliminar)

        tarjeta.appendChild(tarjetaBody)

        return tarjeta
    }).forEach(tarjeta => {
        contenedorPeliculas.appendChild(tarjeta)
    });
}

//EVento Boton nueva pelicula
aggPeli.addEventListener('click',function(){
    formDIv.classList.remove('pantalla')
})

//Evento formulario
formularioPelicula.addEventListener('submit', event =>{
    event.preventDefault();

    const titulo = document.getElementById('titulo').value;
    const genero = document.getElementById('genero').value;
    const duracion = document.getElementById('duracion').value;
    const director = document.getElementById('director').value;
    const imagenInput = document.getElementById('imagen');
    const imagen = imagenInput.files[0];

    //Leer la imagen Seleccionada
    const lecturaImg = new FileReader();    
    lecturaImg.onload = function(event){
        const imagenDataUrl = event.target.result;

        crearPelicula(titulo,genero,duracion,director,imagenDataUrl);
        cargarPelicula();

        //Limpiar formulario
        formularioPelicula.reset();
    }
    lecturaImg.readAsDataURL(imagen)
})