/*

quando clicar no pokemon da listagem, esconder o cartão do pokemon aberto e mostrar o cartão correspondente ao que foi selecionado. Trabalhar com dois elementos 

1-listagem
2- cartão pokemon

 */

const listaSelecaoPokemons = document.querySelectorAll ('.pokemon')
console.log(listaSelecaoPokemons)
const pokemonsCard = document.querySelectorAll ('.cartao-pokemon')

function soma(numero1, numero2){
    console.log(numero1 + numero2)
}

listaSelecaoPokemons.forEach(pokemon => {

     pokemon.addEventListener('click', () => {

        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        console.log(pokemon)

        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado

        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        const pokemonSelecionadoNaListagem = document.getElementById (idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
        
     })

    })

