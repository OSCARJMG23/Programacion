var listaClientes = []

const formulario = document.getElementById('formulario')
const cedula = document.getElementById('cedula')
const nombres = document.getElementById('nombres')
const apellidos = document.getElementById('apellidos')
const telefono = document.getElementById('telefono')
const correo = document.getElementById('correo')
const nacimiento = document.getElementById('nacimiento')
const nacionalidad = document.getElementById('nacionalidad')


formulario.addEventListener('submit',function(event){
    event.preventDefault();

    let nuevoCliente = {}
    nuevoCliente.cedulaN = cedula.value

})