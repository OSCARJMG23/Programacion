let ataqueJuagdor
let ataqueEnemigo
let vidasJuagdor = 3
let vidasEnemigo = 3

function iniciarJuego(){
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display='none'

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display='none'

    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener('click', selecccionarMascotaJugador)
    
    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click',ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click',ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click',ataqueTierra)
    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click',reiniciarJuego)

}

function selecccionarMascotaJugador(){
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display='none'
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display='flex'

    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = 'Hipodoge'
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = 'Capipepo'
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = 'Ratigueya'
    } else {
        alert("Selecciona una mascota")
    }

    selecccionarMascotaEnemigo()
}

function selecccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')
    if(mascotaAleatoria == 1){
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
        ataqueAleatorioEnemigo() 
    } else if (mascotaAleatoria ==2) {
        spanMascotaEnemigo.innerHTML = 'Capipepo'
        ataqueAleatorioEnemigo() 
    } else {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
        ataqueAleatorioEnemigo() 
    }
}

function ataqueFuego(){
    ataqueJuagdor = 'FUEGO'
    ataqueAleatorioEnemigo()
}
function ataqueAgua(){
    ataqueJuagdor = 'AGUA'
    ataqueAleatorioEnemigo()
}function ataqueTierra(){
    ataqueJuagdor = 'TIERRA'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio ==1) {
        ataqueEnemigo = 'FUEGO'
    }else if(ataqueAleatorio ==2){
        ataqueEnemigo = 'AGUA'
    }else{
        ataqueEnemigo = 'TIERRA'
    }

    combate()
}

function combate() {
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')
    if (ataqueEnemigo==ataqueJuagdor){
        crearMensaje("Empate")
    }else if(ataqueJuagdor=='FUEGO' && ataqueEnemigo =='TIERRA'){
        crearMensaje("Ganaste")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML=vidasEnemigo 
    }else if(ataqueJuagdor=='AGUA' && ataqueEnemigo=='FUEGO'){
        crearMensaje("Ganaste")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML=vidasEnemigo
    }else if(ataqueJuagdor=='TIERRA' && ataqueEnemigo=='AGUA'){
        crearMensaje("Ganaste")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML=vidasEnemigo
    }else{
        crearMensaje("Perdiste")
        vidasJuagdor--
        spanVidasJugador.innerHTML=vidasJuagdor
    }

    revisarVidas()
}

function revisarVidas() {
    if (vidasEnemigo==0) {
        crearMensajeFinal("🎉🎉🎉 FELICITACIONES! GANASTE 🎉🎉🎉")
    } else if (vidasJuagdor==0) {
        crearMensajeFinal("😭😭😭 Lo siento, acabas de Perder 😭😭😭")
    }
}

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('resultado')
    let ataquesDelJugador = document.getElementById('ataques-del-jugador')
    let ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')

    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML= ataqueJuagdor
    nuevoAtaqueDelEnemigo.innerHTML= ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)

    
}

function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById('resultado')

    sectionMensajes.innerHTML=resultadoFinal



    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled =true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled =true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled =true

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display='block'

}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min,max) {
    return Math.floor(Math.random()*(max - min + 1) + min)
}


window.addEventListener('load', iniciarJuego)