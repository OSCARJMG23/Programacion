import { selector,contenedor,carritoCompras } from "./selectores.js";


export function selectCategoria(){
    const url = "www.themealdb.com/api/json/v1/1/list .php?c=list"
    fetch(url)
        .then(resultado=>{
            return resultado.json()
        })
        .then(datos=>{
            listarCategoria(datos.meals)
        })
        .catch(error=>{
            console.log(error)
        })
}
function listarCategoria(datos){
    datos.forEach(dato=>{
        const option = document.createElement('option')
        option.value = dato.strCategory
        option.textContent = dato.strCategory
        selector.appendChild(option)
    })
}

const parametros = {
    categoria: ''
}

export function getCategoria(e){
    parametros.categoria = e.target.value
    verCategoria()
}

function verCategoria(){
    const { categoria } = parametros
    console.log(categoria)
    const url = `www.themealdb.com/api/json/v1/1/list .php?c=${categoria}`
    fetch(url)
        .then(result =>{
            return result.json()
        })
        .then(datosComida =>{
            showComida(datosComida.meals)
        })
        .catch(error =>{
            console.log(error)
        })
}

function showComida(datosComida){
    limpiar()
    let html =''
    datosComida.forEach((dato)=>{
        const {strMeal, strMealThumb, idMeal } = dato

        html += `
        <div class="card" style="width:28rem;">
            <img src="${strMealThumb}" class="card-img-top" alt="...">
            <div>
                <h5 class="card-title">${strMeal}</h5>
                <a href="#" class="btn btn-primary boton" id='${idMeal}' imagen='${strMealThumb}' nombre='${strMeal}'>Añadir al carrito</a>
            </div>
        </div>
        `
        contenedor.innerHTML=`${html}`
    })
}

function limpiar(){
    let m = document.querySelectorAll('.card')
    for(let n =0; n<m.length; n++)
    m[n].remove()
}