
const botonClient = document.getElementById('b-clien')
const secClientes = document.getElementById('sec-clientes')
const botonConsult = document.getElementById('btnConsult')
const listaClien = document.getElementById('listaClientes')

//Buscador
const buscador = document.getElementById('buscador')
buscador.addEventListener('input', e => {
    const textoBuscado = e.target.value.toLowerCase(); //.tolowerCase()

    document.querySelectorAll('#filaPasajero').forEach(fila => {
        const primeraCelda =  fila.querySelector('#identiElem');
        const nonmbreBus = fila.querySelector('#idNombres')
        console.log(primeraCelda);
      const textoCelda = primeraCelda.textContent.toLowerCase();
      const textoNombre = nonmbreBus.textContent.toLowerCase();

      if (textoCelda.includes(textoBuscado)||textoNombre.includes(textoBuscado)) {
        fila.classList.remove('filtro');
      } else {
        fila.classList.add('filtro');
      }
    });
  });


botonClient.addEventListener('click',function(){
    secClientes.classList.remove('edit')
})

botonConsult.addEventListener('click',function(){
    listaClien.classList.remove('editT')
})


var listaClientes = [];
let editando = false;
let indiceEditando = -1;

const formulario = document.getElementById('formulario');
const cedula = document.getElementById('cedula');
const nombres = document.getElementById('nombres');
const apellidos = document.getElementById('apellidos');
const telefono = document.getElementById('telefono');
const correo = document.getElementById('correo');
const nacimiento = document.getElementById('nacimiento');
const nacionalidad = document.getElementById('nacionalidad');
const tablaPadre = document.getElementById('padreClientes');
const botonSubmit = formulario.querySelector('button[type="submit"]');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    if (editando) {
        actualizarCliente();
    } else {
        agregarCliente();
    }

    formulario.reset();
    botonConsult.classList.remove('btnCon')
});

function agregarCliente() {
    var nuevoCliente = {};
    nuevoCliente.cedulaN = cedula.value;
    nuevoCliente.nombresN = nombres.value;
    nuevoCliente.apellidosN = apellidos.value;
    nuevoCliente.telefonoN = telefono.value;
    nuevoCliente.correoN = correo.value;
    nuevoCliente.nacimientoN = nacimiento.value;
    nuevoCliente.nacionalidadN = nacionalidad.value;
    nuevoCliente.pF = 0

    listaClientes.push(nuevoCliente)
    listarDatos();
    crearSelect()
}

function actualizarCliente() {
    var clienteEditando = listaClientes[indiceEditando];
    clienteEditando.cedulaN = cedula.value;
    clienteEditando.nombresN = nombres.value;
    clienteEditando.apellidosN = apellidos.value;
    clienteEditando.telefonoN = telefono.value;
    clienteEditando.correoN = correo.value;
    clienteEditando.nacimientoN = nacimiento.value;
    clienteEditando.nacionalidadN = nacionalidad.value;

    listarDatos();
    editarFin();
    crearSelect()
    puntosCliente()
}

function editarCliente(index) {
    indiceEditando = index;
    var clienteEditando = listaClientes[indiceEditando];

    cedula.value = clienteEditando.cedulaN;
    nombres.value = clienteEditando.nombresN;
    apellidos.value = clienteEditando.apellidosN;
    telefono.value = clienteEditando.telefonoN;
    correo.value = clienteEditando.correoN;
    nacimiento.value = clienteEditando.nacimientoN;
    nacionalidad.value = clienteEditando.nacionalidadN;

    botonSubmit.innerHTML = 'Actualizar';
    editando = true;
}

function editarFin() {
    indiceEditando = -1;
    botonSubmit.innerHTML = 'Registrar';
    editando = false;
}


/* function listarDatos() {
    tablaPadre.innerHTML = '';

    listaClientes.forEach((e, index) => {
        let hijo = document.createElement('tr');
        hijo.classList.add('table-secondary', 'tabla');
        hijo.id= 'filaPasajero'

        let numero = document.createElement('td');
        numero.textContent = `${e.numeroN}`;
        hijo.appendChild(numero);

        let cedulaCelda = document.createElement('td');
        cedulaCelda.textContent = `${e.cedulaN}`;
        hijo.appendChild(cedulaCelda);
        cedulaCelda.id = 'identiElem';

        let nombresCelda = document.createElement('td');
        nombresCelda.textContent = `${e.nombresN}`;
        hijo.appendChild(nombresCelda);
        nombresCelda.id = 'idNombres';

        let apellidosCelda = document.createElement('td');
        apellidosCelda.textContent = `${e.apellidosN}`;
        hijo.appendChild(apellidosCelda);

        let telefonoCelda = document.createElement('td');
        telefonoCelda.textContent = `${e.telefonoN}`;
        hijo.appendChild(telefonoCelda);

        let correoCelda = document.createElement('td');
        correoCelda.textContent = `${e.correoN}`;
        hijo.appendChild(correoCelda);

        let nacimientoCelda = document.createElement('td');
        nacimientoCelda.textContent = `${e.nacimientoN}`;
        hijo.appendChild(nacimientoCelda);

        let nacionalidadCelda = document.createElement('td');
        nacionalidadCelda.textContent = `${e.nacionalidadN}`;
        hijo.appendChild(nacionalidadCelda);

        let opcionB = document.createElement('td');
        let botonEditar = document.createElement('button');
        botonEditar.textContent = 'Editar';
        botonEditar.classList.add('btn', 'btn-primary');
        let botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.classList.add('btn', 'btn-danger');
        opcionB.appendChild(botonEditar);
        opcionB.appendChild(botonEliminar);
        hijo.appendChild(opcionB);

        tablaPadre.appendChild(hijo);

        botonEliminar.addEventListener('click', function() {
            eliminarCliente(index);
        });
        botonEditar.addEventListener('click', function() {
            editarCliente(index);
        });
    });
} */
function listarDatos() {
    tablaPadre.innerHTML = '';

    listaClientes.forEach((e, index) => {
        let hijo = document.createElement('tr');
        hijo.classList.add('table-secondary', 'tabla');
        hijo.id = 'filaPasajero';

        let numero = document.createElement('td');
        numero.textContent = index + 1;
        hijo.appendChild(numero);

        let cedulaCelda = document.createElement('td');
        cedulaCelda.textContent = e.cedulaN;
        hijo.appendChild(cedulaCelda);
        cedulaCelda.id = 'identiElem';

        let nombresCelda = document.createElement('td');
        nombresCelda.textContent = e.nombresN;
        hijo.appendChild(nombresCelda);
        nombresCelda.id = 'idNombres';

        let apellidosCelda = document.createElement('td');
        apellidosCelda.textContent = e.apellidosN;
        hijo.appendChild(apellidosCelda);

        let telefonoCelda = document.createElement('td');
        telefonoCelda.textContent = e.telefonoN;
        hijo.appendChild(telefonoCelda);

        let correoCelda = document.createElement('td');
        correoCelda.textContent = e.correoN;
        hijo.appendChild(correoCelda);

        let nacimientoCelda = document.createElement('td');
        nacimientoCelda.textContent = e.nacimientoN;
        hijo.appendChild(nacimientoCelda);

        let nacionalidadCelda = document.createElement('td');
        nacionalidadCelda.textContent = e.nacionalidadN;
        hijo.appendChild(nacionalidadCelda);

        let opcionB = document.createElement('td');
        botonEditar = document.createElement('button');
        botonEditar.textContent = 'Editar';
        botonEditar.classList.add('btn', 'btn-primary');
        botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.classList.add('btn', 'btn-danger');
        opcionB.appendChild(botonEditar);
        opcionB.appendChild(botonEliminar);
        hijo.appendChild(opcionB);

        tablaPadre.appendChild(hijo);

        botonEliminar.addEventListener('click', function() {
            eliminarCliente(index);
        });
        botonEditar.addEventListener('click', function() {
            editarCliente(index);
        });
    });
}
function eliminarCliente(index) {
    listaClientes.splice(index, 1);
    listarDatos();
    crearSelect()
    puntosCliente()
}

//Rutas
const botonTarget = document.getElementById('botonTarget')
const mainTarget = document.getElementById('mainTarget')
const btnAgg = document.getElementById('b-agregar-ruta')
const secTargets = document.getElementById('targetSec')

botonTarget.addEventListener('click',function(){
    mainTarget.classList.remove('targets')
    listaRutas(rutas)
})
btnAgg.addEventListener('click',function(){
    secTargets.classList.remove('main2Edit')
})

var rutas = [
    {
        id:12345,
        nombreRuta: 'Bucaramanga-Bogotá',
        ciudadOrigen: 'Bucaramanga',
        ciudadDestino: 'Bogotá',
        valorTiquete: 125000,
        puntosRuta: 50,
    },
    {
        id:456789,
        nombreRuta: 'Bucaramanga-Cartagena',
        ciudadOrigen: 'Bucaramanga',
        ciudadDestino: 'Cartagena',
        valorTiquete: 200000,
        puntosRuta: 80,
    },
    {
        id:142345,
        nombreRuta: 'Bucaramanga-Barranquilla',
        ciudadOrigen: 'Bucaramanga',
        ciudadDestino: 'Barranquilla',
        valorTiquete: 125000,
        puntosRuta: 90,
    },
    {
        id:456536789,
        nombreRuta: 'Bucaramanga-Tunja',
        ciudadOrigen: 'Bucaramanga',
        ciudadDestino: 'Tunja',
        valorTiquete: 200000,
        puntosRuta: 60,
    },
    {
        id:142345,
        nombreRuta: 'Bucaramanga-Barranquilla',
        ciudadOrigen: 'Bucaramanga',
        ciudadDestino: 'Barranquilla',
        valorTiquete: 125000,
        puntosRuta: 90,
    }
]
const $mRutas = document.getElementById('modulo-rutas');
//Formulario Rutas
let $nombreRuta = document.getElementById('nombre-ruta');
let $valorTRuta = document.getElementById('valorT-ruta');
let $origenRuta = document.getElementById('origen-ruta');
let $destinoRuta = document.getElementById('destino-ruta');
let $puntosRuta = document.getElementById('puntos-ruta');
const $formularioRuta = document.getElementById('formulario-rutas')
/* let $vAgregarRuta = document.getElementById('formulario-rutas') */

//Posicion tarjetas
const $tarjetasRutas = document.getElementById('lista-rutas')



$formularioRuta.addEventListener('submit',function(event){
    event.preventDefault(); // Evitar el envío del formulario
    event.stopPropagation();

    //Creación de objeto cliente
    let newRuta ={};
    newRuta.id = uuid.v1(); //ID aleatorio
    newRuta.nombreRuta= $nombreRuta.value; 
    newRuta.valorTiquete= $valorTRuta.value; 
    newRuta.ciudadOrigen= $origenRuta.value; 
    newRuta.ciudadDestino= $destinoRuta.value; 
    newRuta.puntosRuta = $puntosRuta.value;

    //Asignación a Rutas
    rutas.push(newRuta);

    //Función para visualizar las rutas 
    //pendientee
    listaRutas(rutas);

    /* $mRutas.style.filter='none'; */
   /*  $vAgregarRuta.style.display='none'; */
   /*  $mRutas.style.filter='blur(3px)'; */
    /* $vAgregarRuta.style.display='flex'; */
    $formularioRuta.reset()
    crearSelectR()
});



//Función lista de rutas+
function listaRutas(rutas){
    $tarjetasRutas.innerHTML = "";

    rutas.forEach(e =>{
        let html= `<div id="${e.id}" class="tarjetaRuta">
                <h4>${e.nombreRuta}</h4>
                <img src="avionBlack1.png" alt="destino" class="img">
                <p><b>Ciudad de origen: </b>${e.ciudadOrigen}</p>
                <p><b>Ciudad de destino:</b> ${e.ciudadDestino}</p>
                <p>$${e.valorTiquete}</p>
                <div class="estrella"><img src="estrella.png" alt="Puntos" class="img-puntos"></div>
                <p><b>Puntos:</b>${e.puntosRuta}</p>
                
                <button class="eliminarRuta" id="eliminarRuta">
                    <img src="papelera.png" alt="eliminar" class="imgBorrarRuta" id="D${e.id}">
                </button>
            </div>`
            /*  */
        console.log(rutas);
        $tarjetasRutas.insertAdjacentHTML("beforeend", html);
    });   
}
//Eliminar ruta
document.addEventListener('click',function(event){
    try{
        if(document.getElementById(event.target.id).className == 'imgBorrarRuta'){

            let targetId = document.getElementById(event.target.id).parentNode.parentNode.id;
            rutas = rutas.filter(function(element){
                return element.id != targetId
            });
            listaRutas(rutas);
            crearSelectR()
        }
    } catch (error) {

    }
});


//Compras
const selectP = document.getElementById('selectPasajero')
const formCom = document.getElementById('compras')

formCom.addEventListener('submit', function(event){
    event.preventDefault()

    let cedula = ''
    let valorR = 0
    let puntosF = 0

   
    for(let ruta of rutas){
        if(ruta.nombreRuta == selectR.value){
            valorR = parseFloat(ruta.valorTiquete)
            puntosF = parseFloat(ruta.puntosRuta)
        }   
    }
    for(let cliente of listaClientes){
        if(cliente.nombresN == selectP.value){
            cedula = cliente.cedulaN
            cliente.pF += puntosF
        }
    }
    alert(`****** Travel Exp ******
         Id Usuario: ${cedula}
         Nombre: ${selectP.value}
         Nombre Ruta: ${selectR.value}
         Valor total con Tax: ${valorR * 1.20}
         Puntos Recibidos por compra: ${puntosF}
    `)

    
    puntosCliente()
})

function crearSelect(){
    selectP.innerHTML = '<option selected>Pasajero</option>'
    for(let cliente of listaClientes){
        if(listaClientes.length === 0){
            return
        }
        const crearOP = document.createElement('option')
        crearOP.textContent = cliente.nombresN
        selectP.appendChild(crearOP)
    }
}

const selectR = document.getElementById('selectR')
function crearSelectR(){
    selectR.innerHTML = '<option selected>Ruta</option>'
    for( let ruta of rutas){
        if(rutas.length === 0){
            return
        }
        const crearR = document.createElement('option')
        crearR.textContent = ruta.nombreRuta
        selectR.appendChild(crearR)
    }
}


const padrePu = document.getElementById('puntos-Clientes')
function puntosCliente(){
    padrePu.innerHTML = ''

    for(let cliente of listaClientes){
        if(cliente.pF !=0){
            const filaPuntos = document.createElement('tr')
            filaPuntos.innerHTML = `<td>${cliente.nombresN}</td>
            <td>${cliente.apellidosN}</td>
            <td>${cliente.pF}</td>`
            padrePu.appendChild(filaPuntos)
        }
    }
}