var listaClientes = []
let contador = 1
let editando = false

const formulario = document.getElementById('formulario')
const cedula = document.getElementById('cedula')
const nombres = document.getElementById('nombres')
const apellidos = document.getElementById('apellidos')
const telefono = document.getElementById('telefono')
const correo = document.getElementById('correo')
const nacimiento = document.getElementById('nacimiento')
const nacionalidad = document.getElementById('nacionalidad')
const tablaPadre = document.getElementById('padreClientes')


formulario.addEventListener('submit', function(event){
    event.preventDefault();

    var nuevoCliente = {}
    nuevoCliente.numeroN = contador
    nuevoCliente.cedulaN = cedula.value
    nuevoCliente.nombresN = nombres.value
    nuevoCliente.apellidosN = apellidos.value
    nuevoCliente.telefonoN = telefono.value
    nuevoCliente.correoN = correo.value
    nuevoCliente.nacimientoN = nacimiento.value
    nuevoCliente.nacimientoN = nacionalidad.value

    listaClientes.push(nuevoCliente)

    listarDatos()
})



function listarDatos(){
    tablaPadre.innerHTML = '';

    listaClientes.forEach((e,index) =>{
        let hijo = document.createElement('tr')
        hijo.classList.add('table-secondary', 'tabla')

        let numero = document.createElement('td')
        numero.textContent = `${e.numeroN}`
        hijo.appendChild(numero)

        let cedula = document.createElement('td')
        cedula.textContent = `${e.cedulaN}`
        hijo.appendChild(cedula)

        let nombres = document.createElement('td')
        nombres.textContent = `${e.nombresN}`
        hijo.appendChild(nombres)

        let apellidos = document.createElement('td')
        apellidos.textContent = `${e.apellidosN}`
        hijo.appendChild(apellidos)

        let telefono = document.createElement('td')
        telefono.textContent = `${e.telefonoN}`
        hijo.appendChild(telefono)

        let correo = document.createElement('td')
        correo.textContent = `${e.correoN}`
        hijo.appendChild(correo)

        let nacimiento = document.createElement('td')
        nacimiento.textContent = `${e.nacimientoN}`
        hijo.appendChild(nacimiento)

        let nacionalidad = document.createElement('td')
        nacionalidad.textContent = `${e.nacionalidadN}`
        hijo.appendChild(nacionalidad)


        let opcionB = document.createElement('td')
        botonEditar = document.createElement('button')
        botonEditar.textContent = 'Editar'
        botonEditar.classList.add('btn', 'btn-primary')
        botonEliminar = document.createElement('button')
        botonEliminar.textContent = 'Eliminar'
        botonEliminar.classList.add('btn', 'btn-danger')
        opcionB.appendChild(botonEditar)
        opcionB.appendChild(botonEliminar)
        hijo.appendChild(opcionB)

        tablaPadre.appendChild(hijo)
        contador++

        botonEliminar.addEventListener('click', function(){
            eliminarCLiente(index)
        })
    })
}

function eliminarCLiente(index){
    listaClientes.splice(index, 1)
    listarDatos()
}


function editarDatos(){

    nuevoCliente.cedulaN = cedula.value
    nuevoCliente.nombresN = nombres.value
    nuevoCliente.apellidosN = apellidos.value
    nuevoCliente.telefonoN = telefono.value
    nuevoCliente.correoN = correo.value
    nuevoCliente.nacimientoN = nacimiento.value
    nuevoCliente.nacimientoN = nacionalidad.value

    listaClientes.map(cliente =>{

        if(cliente.cedulaN == nuevoCliente.cedulaN){
            cliente.cedulaN = nuevoCliente.cedulaN
            cliente.nombresN = nuevoCliente.nombresN
            cliente.apellidosN = nuevoCliente.apellidosN
            cliente.telefonoN = nuevoCliente.telefonoN
            cliente.correoN = nuevoCliente.correoN
            cliente.nacimientoN = nuevoCliente.nacimientoN
            cliente.nacionalidadN = nuevoCliente.nacionalidadN
        }
        listaClientes()
        formulario.reset()
    })
    editando = false
}