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
}

const preguntaN = new GestionPreguntas()

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

    const nuevaPregunta = new Pregunta(enunciadoP , opcA, opcB, opcC, opcD, respuestaC)
    preguntaN.agregarP(nuevaPregunta)
    listarPreg()
    formularioQuiz.reset()
})

const padreQuiz = document.getElementById('quiz')

/* p${pregunta.enunciadoP}
<div class = 'from' */

function listarPreg(){

    padreQuiz.innerHTML=''

    preguntaN.listaP.forEach(pregunta => {
        const hijoQuiz = document.createElement('div')
        hijoQuiz.className = 'card';
        hijoQuiz.style.width = '18rem';

        hijoQuiz.innerHTML = `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${pregunta.enunciadoP}</h5>
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
        </div>
        </div>`
        padreQuiz.appendChild(hijoQuiz)
    })


}

