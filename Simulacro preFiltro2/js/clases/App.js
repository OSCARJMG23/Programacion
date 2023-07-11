import { selector,contenedor,modal,limpiarCarrito } from "../selectores.js";
import { selectCategoria, getCategoria,agregarCarrito,eliminarUno,vaciarCarrito } from "../funciones.js";

class App{
    constructor(){
        this.initApp()
    }
    initApp(){
        selectCategoria()
        selector.addEventListener('input', getCategoria)
        contenedor.addEventListener('click', agregarCarrito)
        modal.addEventListener('click', eliminarUno)
        limpiarCarrito.addEventListener('click', vaciarCarrito)
    }
}

export default App;