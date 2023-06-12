const moviesContainer = document.getElementById('movies-container');
const movieForm = document.getElementById('movie-form');
const findMovieButton = document.getElementById('find-movie-button');

let movies = [];

// Función para crear una película
function createMovie(titulo, genero, duracion, director, imagen) {
  const movie = {
    titulo,
    genero,
    duracion,
    director,
    imagen
  };
  movies.push(movie);
}

// Función para eliminar una película
function deleteMovie(eliminar) {
  movies.splice(eliminar, 1);
  renderMovies();
}

// Función para actualizar los datos de una película
function updateMovie(index, updatedTitle, updatedGenre, updatedDuration, updatedDirector, updatedImagen) {
  movies[index].titulo = updatedTitle;
  movies[index].genero = updatedGenre;
  movies[index].duracion = updatedDuration;
  movies[index].director = updatedDirector;
  movies[index].imagen = updatedImagen;
  renderMovies();
}

// Función para consultar una película por título
function findMovieByTitle(title) {
  const movie = movies.find(movie => movie.titulo === title);
  return movie;
}

// Función para renderizar las películas en tarjetas
function renderMovies() {
  moviesContainer.innerHTML = '';

  movies.map((movie, index) => {
    const card = document.createElement('div');
    card.classList.add('card', 'col');

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const image = document.createElement('img');
    image.classList.add('card-img-top');
    image.src = movie.imagen;

    const title = document.createElement('h5');
    title.classList.add('card-title');
    title.textContent = movie.titulo;

    const genre = document.createElement('p');
    genre.classList.add('card-text');
    genre.textContent = `Género: ${movie.genero}`;

    const duration = document.createElement('p');
    duration.classList.add('card-text');
    duration.textContent = `Duración: ${movie.duracion}`;

    const director = document.createElement('p');
    director.classList.add('card-text');
    director.textContent = `Director: ${movie.director}`;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('btn', 'btn-danger');
    deleteButton.textContent = 'Eliminar';
    deleteButton.addEventListener('click', () => {
      deleteMovie(index);
    });

    cardBody.appendChild(image);
    cardBody.appendChild(title);
    cardBody.appendChild(genre);
    cardBody.appendChild(duration);
    cardBody.appendChild(director);
    cardBody.appendChild(deleteButton);

    card.appendChild(cardBody);

    return card;
  }).forEach(card => {
    moviesContainer.appendChild(card);
  });
}

// Evento de envío del formulario
movieForm.addEventListener('submit', event => {
  event.preventDefault();

  const titulo = document.getElementById('titulo').value;
  const genero = document.getElementById('genero').value;
  const duracion = document.getElementById('duracion').value;
  const director = document.getElementById('director').value;
  const imagenInput = document.getElementById('imagen');
  const imagen = imagenInput.files[0];

  // Leer la imagen seleccionada
  const reader = new FileReader();
  reader.onload = function(event) {
    const imagenDataUrl = event.target.result;

    createMovie(titulo, genero, duracion, director, imagenDataUrl);
    renderMovies();

    // Limpiar los campos del formulario
    movieForm.reset();
  };
  reader.readAsDataURL(imagen);
});

// Evento de clic en el botón de consultar
findMovieButton.addEventListener('click', () => {
  const movieTitle = prompt('Ingrese el título de la película a consultar');
  if (movieTitle) {
    const foundMovie = findMovieByTitle(movieTitle);
    if (foundMovie) {
      alert(`Título: ${foundMovie.titulo}\nGénero: ${foundMovie.genero}\nDuración: ${foundMovie.duracion}\nDirector: ${foundMovie.director}`);
    } else {
      alert('No se encontró ninguna película con ese título');
    }
  }
});
