//Variables que usamos para traer elementos del html

const inp = document.getElementById("inputPokemon")
const bttnFav = document.getElementById("SelectPoke")
let div = document.getElementById("pokemon");

//Esto pone tu nombre de usario
const txtWelcome = document.getElementById("txtWelcome")
const userNick = localStorage.getItem("user") 



document.addEventListener("DOMContentLoaded", async function () {

    txtWelcome.innerText += ` ${userNick}`


    inp.addEventListener("input", function (){
        const Pokemon = inp.value.toLowerCase();

        ShowandSePoke(Pokemon)
    })

})


//boton para agregar a favoritos
bttnFav.addEventListener("click", async()=>{

    const pokemon = {
        "pokeF": inp.value
    }


    //Hacer el fetcg a la url login para validar si existe
    await fetch(`Profile/${userNick}`,{
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(pokemon)
    }
    )
    .then(data => {localStorage.setItem("pokeFav", inp.value)
        if(data.ok === false){
            alert("no se pudo hacer el cambio de poke favorito")
        }
        else{
            pokemonFavSe(inp.value)
        }
    })


})

function pokemonFavSe(poke){
    fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`)
    .then(Response => Response.json())
    .then(data => {
        txtWelcome.innerHTML += `<img src="${data.sprites.front_default}" alt="">`
    })
}

function ShowandSePoke(pokemon){
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(Response => Response.json())
    .then(data => {
        let datas = data;    
        var typesPoke = data.types
        var abilites = data.abilities
        
            div.innerHTML += `
            <h1>Nombre del pokemon: ${data.species.name} </h1>
            <p> Tipo del pokemon: ${typesPoke[0].type.name} </p>
            <p> habilidades del pokemon: <ul>
                                        <li>${abilites[0].ability.name} </li>
                                        <li>${abilites[1].ability.name}</li>
                                            </ul> </p>
            <img src="${data.sprites.front_default}" alt="">
        `
    })

}