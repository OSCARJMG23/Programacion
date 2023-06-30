class Carro {
    constructor() {
      this.cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    }
  
    mostrarCarrito() {
      var cartItemsList = document.getElementById('cartItems');
      cartItemsList.innerHTML = '';
  
      for (var i = 0; i < this.cartItems.length; i++) {
        var cartItem = document.createElement('li');
        cartItem.className = 'itemcarro'
        cartItem.textContent = this.cartItems[i].nombre + ' - $' + this.cartItems[i].precio;
        
        var deleteButton = document.createElement('button');
        deleteButton.className = 'btn-elim'
        deleteButton.textContent = 'Eliminar';
        deleteButton.dataset.index = i; // Guardar el índice del elemento en el atributo "data-index" del botón
        deleteButton.addEventListener('click', this.eliminarDelCarrito.bind(this)); // Agregar un evento click al botón
        cartItem.appendChild(deleteButton);
        cartItemsList.appendChild(cartItem);
        
      }
      this.mostrarTotal()
    }
  
    agregarAlCarrito(item) {
      if (item) {
        this.cartItems.push(item);
        this.mostrarCarrito();
        localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
      }
    }
  
    vaciarCarrito() {
      this.cartItems = [];
      this.mostrarCarrito();
      localStorage.removeItem('cartItems');
    }
    mostrarTotal() {
      var total = 0;
      for (var i = 0; i < this.cartItems.length; i++) {
        total += parseFloat(this.cartItems[i].precio);
      }
  
      var totalElement = document.getElementById('total');
      totalElement.textContent = 'Total: $' + total.toFixed(2);
    }
    eliminarDelCarrito(event) {
      var index = event.target.dataset.index;
      this.cartItems.splice(index, 1);
      this.mostrarCarrito();
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    }
  }
  
  const carrito = new Carro();
  const formulario = document.getElementById('formulario');
  const productoInput = document.getElementById('compraInput');
  const precioInput = document.getElementById('precioInput');
  
  formulario.addEventListener('submit', function(event) {
    event.preventDefault();
  
    item = {
      nombre: productoInput.value,
      precio: precioInput.value
    };
  
    productoInput.value = '';
    precioInput.value = '';
  
    carrito.agregarAlCarrito(item);
  });

carrito.mostrarCarrito()
const botonVaciar = document.getElementById('btn-vaciar')
botonVaciar.addEventListener('click',function(){
    carrito.vaciarCarrito()
})

const btnCompra = document.getElementById('compra')

btnCompra.addEventListener('click', function(){
  swal("Compra Exitosa!", "Tu compra a sido aceptada!", "success");
})
