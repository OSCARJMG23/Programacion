const listaPokemones = document.getElementById('listaPokemons')
const botonesPag = document.getElementById('botones')
let botonNext;
let botonPrev;
console.log('⏮️⏭️')

let urlPokemon = 'https://pokeapi.co/api/v2/pokemon'

const buscarPokemon = async(url)=>{
    
    try{
        const response = await fetch(url)
        const results = await response.json()
        console.log(results)
        datosPokemon(results.results)
        botonNext= results.next ? `<button class='btn' data-url=${results.next}>⏭️</button>` : ''
        botonPrev=results.previous ?  `<button class='btn' data-url=${results.previous}>⏮️</button>` : ''
        botonesPag.innerHTML=botonPrev +''+botonNext

    }catch (error){
        console.log(error)
    }

}

buscarPokemon(urlPokemon)

const datosPokemon = async(data)=>{
    listaPokemones.innerHTML=''
    try{
        for(let pokemon of data){
            
            const resp = await fetch(pokemon.url)
            const result = await resp.json()
            console.log(result)
            const infoPokemon = `
            <div class='imagenPokemon'>
            <img src=${result.sprites.other.dream_world.front_default} alt=${result.name}
            <p>${result.name}<p>
            </div>
            `
            listaPokemones.innerHTML += infoPokemon
        }
    }catch (error){
        console.log(error)
    }
}

botonesPag.addEventListener('click', (e)=>{
    if(e.target.classList.contains('btn')){
        let value = e.target.dataset.url
        console.log(value)
        buscarPokemon(value)    
    }
})
