import { selector,contenedor,carritoCompras } from "./selectores.js";


export function selectCategoria(){
    const url = "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
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
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`
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
        <div class="card">
            <div class="card_landing" style="--i:url(${strMealThumb})">
                <h5 class="card-title">${strMeal}</h5>
                <a href="#" class="btn  boton" id='${idMeal}' imagen='${strMealThumb}' nombre='${strMeal}'>Añadir al carrito</a>
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

let arrayComida = []

export function agregarCarrito(e){
    e.preventDefault()
    if(e.target.classList.contains('boton')){
        const nombre = e.target.getAttribute('nombre')
        const imagen = e.target.getAttribute('imagen')
        const idUnico = e.target.getAttribute('id')

        let comida = {
            id: idUnico,
            imagen: imagen,
            nombre: nombre,
        }
        arrayComida=[...arrayComida,comida]
        console.log(arrayComida)
        injectarComida()
    }
}

function injectarComida(){
    limpiarHtml()
    let html = ''
    arrayComida.forEach((array)=>{
        const { imagen, nombre, id} = array
        html +=`
        <tr>
            <td><img src="${imagen}" style="width: 10rem;"></td>
            <td>${nombre}</td>
            <td>
                <a id="${id}" class="btn btn-danger eliminar">X</a>
            </td>
        </tr>
        `
        carritoCompras.innerHTML=`${html}`
    })
    addStorage()
}

function addStorage(){
    localStorage.setItem('comida', JSON.stringify(arrayComida))
}

document.addEventListener('DOMContentLoaded',()=>{
    arrayComida= JSON.parse(localStorage.getItem('comida')) || [];
    injectarComida()
})

function limpiarHtml(){
    carritoCompras.innerHTML=''
}

export function eliminarUno(e){
    if(e.target.classList.contains("eliminar")){
        const tarjetaEliminar = e.target.getAttribute("id")
        console.log(tarjetaEliminar)
        arrayComida=arrayComida.filter((te)=>te.id !== tarjetaEliminar)
        console.log(arrayComida)
        injectarComida()
    }
}

export function vaciarCarrito(){
    arrayComida=[]
    localStorage.setItem('comida',JSON.stringify(arrayComida))
    limpiarHtml()
}