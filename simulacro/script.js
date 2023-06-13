var selectedRow = null
const botonClient = document.getElementById('b-clien')
const secClientes = document.getElementById('sec-clientes')
const botonConsult = document.getElementById('btnConsult')
const listaClien = document.getElementById('listaClientes')

botonClient.addEventListener('click',function(){
    secClientes.classList.remove('edit')
})

botonConsult.addEventListener('click',function(){
    listaClien.classList.remove('editT')
})
const formulario = document.getElementById('formulario')

function onFormSubmit(){
    if(validate()){
        var formData = readFormData();
        if(selectedRow == null)
            insertNewRecord(formData);
            else
            updateRecord(formData)
        resetform();
    }
}
var listaClientess = []

var contador = 1;

function readFormData(){
    var formData = {};
    
    formData['id'] = contador
    formData['cedula'] = document.getElementById('cedula').value;
    formData['nombres'] = document.getElementById('nombres').value;
    formData['apellidos'] = document.getElementById('apellidos').value;
    formData['telefono'] = document.getElementById('telefono').value;
    formData['correo'] = document.getElementById('correo').value;
    formData['nacimiento'] = document.getElementById('nacimiento').value;
    formData['nacionalidad'] = document.getElementById('nacionalidad').value;
    formData['pF'] = 0
    formulario.reset()
    listaClientess.push(formData)
    console.log(formData)
    console.log(listaClientess)
    crearSelect()
    return formData;
    
}

function insertNewRecord(data){
    var table = document.getElementById('listaClientes').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.id;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.cedula;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.nombres;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.apellidos;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.telefono;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.correo;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.nacimiento;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.nacionalidad;
    cell9 = newRow.insertCell(8);
    cell9.innerHTML = `<a onClick="onEdit(this)" class="btn" >Edit<a/> 
                       <a onClick="onDelete(this)" class="btn">Elim<a/>`;
    contador++
}
function resetform(){
    document.getElementById('cedula').value = ''
    document.getElementById('nombres').value = ''
    document.getElementById('apellidos').value = ''
    document.getElementById('telefono').value = ''
    document.getElementById('correo').value = ''
    document.getElementById('nacimiento').value = ''
    document.getElementById('nacionalidad').value = ''
    selectedRow = null
}
function onEdit(td){
   selectedRow = td.parentElement.parentElement;
   /* document.getElementById('fullName').value = selectedRow.cells[0].innerHTML; */
   document.getElementById('cedula').value = selectedRow.cells[1].innerHTML;
   document.getElementById('nombres').value = selectedRow.cells[2].innerHTML;
   document.getElementById('apellidos').value = selectedRow.cells[3].innerHTML;
   document.getElementById('telefono').value = selectedRow.cells[4].innerHTML;
   document.getElementById('correo').value = selectedRow.cells[5].innerHTML;
   document.getElementById('nacimiento').value = selectedRow.cells[6].innerHTML;
   document.getElementById('nacionalidad').value = selectedRow.cells[7].innerHTML;
   crearSelect()
   //volver a llamar la funcion de tabla puntos
}
function updateRecord(formData){
    /* selectedRow.cells[0].innerHTML = formData.fullName; */
    selectedRow.cells[1].innerHTML = formData.cedula;
    selectedRow.cells[2].innerHTML = formData.nombres;
    selectedRow.cells[3].innerHTML = formData.apellidos;
    selectedRow.cells[4].innerHTML = formData.telefono;
    selectedRow.cells[5].innerHTML = formData.correo;
    selectedRow.cells[6].innerHTML = formData.nacimiento;
    selectedRow.cells[7].innerHTML = formData.nacionalidad;

}
function onDelete(td){
    if(confirm('Esta seguro de eliminar este registro?')){
        row = td.parentElement.parentElement;
        document.getElementById("listaClientes").deleteRow(row.rowIndex);
        console.log(document.getElementById("listaClientes").deleteRow(row.rowIndex))
        resetform();
    }
    crearSelect()   
    //volver a llamar la funcion de tabla puntos
}
function validate(){
    isValid = true
    if(document.getElementById('nombres').value == ''){
        isValid = false
        document.getElementById("fullNameValidationError").classList.remove("hide");
    }else{
        isValid = true;
        if(!document.getElementById("fullNameValidationError").classList.contains("hide"))
        document.getElementById("fullNameValidationError").classList.add("hide");
    }

    return isValid
}

formulario.addEventListener('submit', event=>{
    event.preventDefault();
    validate();
    onFormSubmit();
    formulario.reset()
    botonConsult.classList.remove('btnCon')
})

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
    for(let cliente of listaClientess){
        if(cliente.nombres == selectP.value){
            cedula = cliente.cedula
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
    for(let cliente of listaClientess){
        if(listaClientess.length === 0){
            return
        }
        const crearOP = document.createElement('option')
        crearOP.textContent = cliente.nombres
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

    for(let cliente of listaClientess){
        if(cliente.pF !=0){
            const filaPuntos = document.createElement('tr')
            filaPuntos.innerHTML = `<td>${cliente.nombres}</td>
            <td>${cliente.apellidos}</td>
            <td>${cliente.pF}</td>`
            padrePu.appendChild(filaPuntos)
        }
    }
}