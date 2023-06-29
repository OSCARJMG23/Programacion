import { temperatura } from "./temeratura.js"; 
import { distancia } from "./distancia.js";
import { peso } from "./peso.js";

const formulario = document.getElementById('formuCover')
const opcionConver = document.getElementById('opcionConver')
const valorConver = document.getElementById('valorConver')
const mostrarResultado = document.getElementById('resultado')

formulario.addEventListener('submit', function(event){
    event.preventDefault()

    const opcion = opcionConver.value

    if(opcion==='temperatura'){
        const resultadoTemp = temperatura(parseFloat(valorConver.value))
        const resultTemp = document.createElement('p')
        resultTemp.textContent= `La temperatura en Fahrenheit es ${resultadoTemp}`;
        mostrarResultado.appendChild(resultTemp)
    }else if(opcion ==='distancia'){
        const resultadoDist = distancia(parseInt(valorConver.value))
        const resltDist = document.createElement('p')
        resltDist.textContent=`${resultadoDist} miles`;
        mostrarResultado.appendChild(resltDist);
    }else if(opcion==='peso'){
        const resultadoPeso = peso(parseInt(valorConver.value))
        const resltPeso = document.createElement('p');
        resltPeso.textContent = `El peso equivale a: ${resultadoPeso}`;
        mostrarResultado.appendChild(resltPeso);
    }else{
        alert("No se ha seleccionado una opción");
    }

    formulario.reset()
})