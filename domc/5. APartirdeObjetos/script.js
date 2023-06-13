var usuarios = [
    { cod: 8, nombre: 'Juan', edad: 25 },
    { cod: 9, nombre: 'María', edad: 30 },
    { cod: 10, nombre: 'Pedro', edad: 28 }
  ];
  
  var listaUsuarios = document.getElementById('listaUsuarios');
  
  usuarios.forEach(function(usuario) {
    var elementoUsuario = document.createElement('li');
    if (usuario.cod!==9)
    {
      elementoUsuario.textContent = `Código: ${usuario.cod}, Nombre: ${usuario.nombre}, Edad: ${usuario.edad}`;
      listaUsuarios.appendChild(elementoUsuario);
    }
  });
  