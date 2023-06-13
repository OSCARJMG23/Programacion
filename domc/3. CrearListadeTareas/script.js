function agregarTarea() {
    var tareaInput = document.getElementById('tareaInput');
    var listaTareas = document.getElementById('listaTareas');
  
    if (tareaInput.value !== '') {
      var tarea = document.createElement('li');
      tarea.textContent = tareaInput.value;
      listaTareas.appendChild(tarea);
  
      tareaInput.value = '';
    }
  }
  