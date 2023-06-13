function agregarImagen() {
    var urlInput = document.getElementById('urlInput');
    var galeria = document.getElementById('galeria');
  
    if (urlInput.value !== '') {
      var imagen = document.createElement('img');
      imagen.src = urlInput.value;
      imagen.classList.add('imagen');
      galeria.appendChild(imagen);
  
      urlInput.value = '';
    }
  }
   