class Pregunta {
    constructor(enunciadoP, opcA, opcB, opcC, opcD, respuestaC){
        this.enunciadoP = enunciadoP;
        this.opcA = opcA;
        this.opcB = opcB;
        this.opcC = opcC;
        this.opcD = opcD;
        this.respuestaC = respuestaC;
    }
}

class GestionPreguntas {
    constructor(){
        this.listaP = []
    }
    
    agregarP(pregunta){
        this.listaP.push(pregunta)
    }
    eliminarPregunta(index){
        this.listaP.splice(index, 1)
        listarPreg()
    }
}

const preguntaN = new GestionPreguntas()

let indiceEdicion = -1;

const formularioQuiz = document.getElementById('formularioQuiz')
const enunciadoPregunta = document.getElementById('enunciadoPregunta')
const opcionA = document.getElementById('rtaA')
const opcionB = document.getElementById('rtaB')
const opcionC = document.getElementById('rtaC')
const opcionD = document.getElementById('rtaD')
const rCorrecta = document.getElementById('rtaCorrecta') 

formularioQuiz.addEventListener('submit', function(event){
    event.preventDefault()

    const enunciadoP = enunciadoPregunta.value
    const opcA = opcionA.value
    const opcB = opcionB.value
    const opcC = opcionC.value
    const opcD = opcionD.value
    const respuestaC = rCorrecta.value

    if (indiceEdicion !== -1) {
        const preguntaEditada = preguntaN.listaP[indiceEdicion];
        preguntaEditada.enunciadoP = enunciadoP;
        preguntaEditada.opcA = opcA;
        preguntaEditada.opcB = opcB;
        preguntaEditada.opcC = opcC;
        preguntaEditada.opcD = opcD;
        preguntaEditada.respuestaC = respuestaC;
    
        indiceEdicion = -1;
    
        // Cambia el texto del botón a "Agregar"
        const btnAgregarEditar = document.getElementById('btnAgregarEditar');
        btnAgregarEditar.textContent = 'Agregar';
      } else {
        const nuevaPregunta = new Pregunta(enunciadoP, opcA, opcB, opcC, opcD, respuestaC);
        preguntaN.agregarP(nuevaPregunta);
      }

    listarPreg()
    formularioQuiz.reset()
})

const padreQuiz = document.getElementById('quiz')

/* p${pregunta.enunciadoP}
<div class = 'from' */

function listarPreg(){

    padreQuiz.innerHTML=''

    preguntaN.listaP.forEach((pregunta, index) => {
        const hijoQuiz = document.createElement('div')
        hijoQuiz.className = 'card';
        hijoQuiz.style.width = '18rem';

        hijoQuiz.innerHTML = `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${pregunta.enunciadoP}
        <button class="eliminarPregunta" onclick="editPreg(${index})">
        <img src="iconoeditar.png" alt="eliminar" class="imgBorrarRuta">
        </button></h5>
        <div class="card-text">
        <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
            <label class="form-check-label" for="flexRadioDefault1">
            ${pregunta.opcA}
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
            <label class="form-check-label" for="flexRadioDefault2">
            ${pregunta.opcB}
            </label>
        </div>
        <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
        <label class="form-check-label" for="flexRadioDefault2">
            ${pregunta.opcC}
        </label>
        </div>
        <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
        <label class="form-check-label" for="flexRadioDefault2">
        ${pregunta.opcD}
        </label>
        </div>
        </div>
        <button class="eliminarPregunta" onclick="deletePreg(${index})">
        <img src="papelera.png" alt="eliminar" class="imgBorrarRuta">
        </button>
        </div>
        </div>`
        padreQuiz.appendChild(hijoQuiz)
    })

}

function deletePreg(index){
    preguntaN.eliminarPregunta(index)
    listarPreg
}

function editPreg(index) {
    const pregunta = preguntaN.listaP[index];
    indiceEdicion = index;
  
    // Cambia el texto del botón a "Editar"
    const btnAgregarEditar = document.getElementById('btnAgregarEditar');
    btnAgregarEditar.textContent = 'Editar';
  
    // Llena los campos del formulario con los valores de la pregunta a editar
    enunciadoPregunta.value = pregunta.enunciadoP;
    opcionA.value = pregunta.opcA;
    opcionB.value = pregunta.opcB;
    opcionC.value = pregunta.opcC;
    opcionD.value = pregunta.opcD;
    rCorrecta.value = pregunta.respuestaC;
  }

