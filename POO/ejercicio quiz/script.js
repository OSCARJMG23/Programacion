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
    formularioQuiz.reset()
})

const padreQuiz = document.getElementById('quiz')

/* p${pregunta.enunciadoP}
<div class = 'from' */

