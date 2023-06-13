var productos = [
    { id: 1, nombre: 'Camiseta', precio: 20 },
    { id: 2, nombre: 'Pantalón', precio: 40 },
    { id: 3, nombre: 'Zapatos', precio: 60 }
  ];
  
  var listaProductos = document.getElementById('listaProductos');
  var formularioEdicion = document.getElementById('formularioEdicion');
  var nombreInput = document.getElementById('nombreInput');
  var precioInput = document.getElementById('precioInput');
  
  // Función para mostrar los productos en la lista
  function mostrarProductos() {
    listaProductos.innerHTML = '';
  
    productos.forEach(function(producto) {
      var elementoProducto = document.createElement('li');
      elementoProducto.innerHTML = `
        <span>${producto.nombre}, Precio: $${producto.precio}</span>
        <button onclick="editarProducto(${producto.id})">Editar</button>

      `;
      listaProductos.appendChild(elementoProducto);
    });
  }
  
  // Función para editar un producto
  function editarProducto(id) {
    var producto = productos.find(function(p) {
      return p.id === id;
    });
  
    if (producto) {
      nombreInput.value = producto.nombre;
      precioInput.value = producto.precio;
  
      formularioEdicion.onsubmit = function(event) {
        event.preventDefault();
  
        producto.nombre = nombreInput.value;
        producto.precio = parseFloat(precioInput.value);
  
        mostrarProductos();
        formularioEdicion.reset();
      };
    }
  }
  
  mostrarProductos();
  