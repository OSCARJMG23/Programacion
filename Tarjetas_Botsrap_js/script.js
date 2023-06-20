const formularioServi = document.getElementById('formularioServicio')
const nombreServi = document.getElementById('nombreServi')
const valorServi = document.getElementById('valorServi')
const descServi = document.getElementById('descripcionServi')
const punstosServi = document.getElementById('puntosServi')
const tarjetasServicios = document.getElementById('lista-servicios')


formularioServi.addEventListener('submit', function(event){
    event.preventDefault()

    agregarServicio()
    formularioServi.reset()
})

var servicios = []

function agregarServicio(){
    var nuevoServicio = {}

    nuevoServicio.nombreServiN = nombreServi.value
    nuevoServicio.valorServiN = valorServi.value
    nuevoServicio.descripSN = descServi.value
    nuevoServicio.puntosServiN = punstosServi.value

    servicios.push(nuevoServicio)
    listarSevicios()
}

function listarSevicios(){
    tarjetasServicios.innerHTML = '';

    servicios.forEach((e, index)=>{
        let tarjeta = `<div class="tarjetaRuta">
        <h4>${e.nombreServiN}</h4>
        <img src="icono_lavado.png" alt="destino" class="img-avion">
        <p><b>Descripción:</b> ${e.descripSN}</p>
        <p>$${e.valorServiN}</p>
        <div class="estrella"><img src="estrella.png" alt="Puntos" class="img-puntos"></div>
        <p><b>Puntos:</b>${e.puntosServiN}</p>
        
        <button class="eliminarRuta">
            <img src="papelera.png" alt="eliminar" class="imgBorrarRuta">
        </button>
        </div>`

        tarjetasServicios.insertAdjacentHTML('beforeend', tarjeta)

    })
    var eliminarServicios = document.getElementsByClassName('eliminarRuta');

    Array.from(eliminarServicios).forEach((boton, index) => {
      boton.addEventListener('click', function() {
        eliminarServicio(index);
      });
    });
}

function eliminarServicio(index){
    servicios.splice(index, 1)
    listarSevicios()
}