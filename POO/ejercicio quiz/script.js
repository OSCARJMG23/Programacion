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
const botonStart = document.getElementById('btn-empezar')

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

    botonStart.classList.remove('btnstart')
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
            <input class="form-check-input" type="radio" name="flexRadioDefault${index}" id="flexRadioDefault1">
            <label class="form-check-label" for="flexRadioDefault1">A.
            ${pregunta.opcA}
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault${index}" id="flexRadioDefault2" >
            <label class="form-check-label" for="flexRadioDefault2">B.
            ${pregunta.opcB}
            </label>
        </div>
        <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault${index}" id="flexRadioDefault2" >
        <label class="form-check-label" for="flexRadioDefault2">C.
            ${pregunta.opcC}
        </label>
        </div>
        <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault${index}" id="flexRadioDefault2" >
        <label class="form-check-label" for="flexRadioDefault2">D.
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


//Formulario para validar
const padrePreguntas = document.getElementById('positionQuestions')
const formularioPreguntas = document.getElementById('form-rta')

botonStart.addEventListener('click',function(){
    formularioPreguntas.classList.remove('formRta')
    listarPregForm()
})

function listarPregForm(){
    padrePreguntas.innerHTML = ''

    preguntaN.listaP.forEach((pregunta, index) =>{
        const hijoPreguntas = document.createElement('div')
        hijoPreguntas.className = 'preguntas'

        hijoPreguntas.innerHTML=`
        <h3>${index+1}.${pregunta.enunciadoP}</h3>
        <input type="radio" name="respuesta${index}" value="A"> A.${pregunta.opcA}<br/>
        <input type="radio" name="respuesta${index}" value="B"> B.${pregunta.opcB}<br/>
        <input type="radio" name="respuesta${index}" value="C"> C.${pregunta.opcC}<br/>
        <input type="radio" name="respuesta${index}" value="D"> D.${pregunta.opcD}<br/>
        `
        padrePreguntas.appendChild(hijoPreguntas)
    })
}

formularioPreguntas.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario
  
    // Lógica de validación de respuestas aquí
    const respuestasSeleccionadas = [];
  
    preguntaN.listaP.forEach((pregunta, index) => {
      const opciones = document.getElementsByName(`respuesta${index}`);
      let respuestaSeleccionada = null;
  
      opciones.forEach(opcion => {
        if (opcion.checked) {
          respuestaSeleccionada = opcion.value;
        }
      });
  
      respuestasSeleccionadas.push(respuestaSeleccionada);
    });
  
  
    // Lógica para comparar las respuestas seleccionadas con las respuestas correctas y mostrar los resultados
    
    let puntaje = 0;
    preguntaN.listaP.forEach((pregunta, index) => {
      if (pregunta.respuestaC === respuestasSeleccionadas[index]) {
        puntaje++;
      }
    });
  
    const resultado = document.createElement('p');
    resultado.textContent = `Obtuviste un puntaje de ${puntaje} de ${preguntaN.listaP.length}.`;
    padrePreguntas.appendChild(resultado);
  });