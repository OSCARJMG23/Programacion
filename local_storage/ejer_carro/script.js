class Carro {
    constructor() {
      this.cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    }
  
    mostrarCarrito() {
      var cartItemsList = document.getElementById('cartItems');
      cartItemsList.innerHTML = '';
  
      for (var i = 0; i < this.cartItems.length; i++) {
        var cartItem = document.createElement('li');
        cartItem.textContent = this.cartItems[i].nombre + ' - $' + this.cartItems[i].precio;
        cartItemsList.appendChild(cartItem);
      }
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
