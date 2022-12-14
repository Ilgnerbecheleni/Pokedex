
const pokemonName = document.querySelector('.pokemon_name');
const pokemonNumber = document.querySelector('.pokemon_number');
const pokemonImage = document.querySelector('.pokemon_image');

const form = document.querySelector('.form');
const input = document.querySelector('.input_search');

const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');

let searchPokemon = 1;


const fetchPokemon = async (pokemon)=>{
const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);  // await espera o fetch terminar

if(APIresponse.status ===200){//verifica se OK
    const data = await APIresponse.json()
    return data ;
}



}

renderPokemon = async(pokemon) =>{
    pokemonName.innerHTML = 'Loading ....';
const data = await fetchPokemon(pokemon);

if(data){
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    pokemonImage.style.display= 'block';
    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    console.log(data);
    input.value = '';
    searchPokemon = data.id;
}else{
    pokemonName.innerHTML = 'Not Found  :C';
    pokemonNumber.innerHTML = '';
    pokemonImage.style.display= 'none';
}

}


form.addEventListener('submit',(event)=>{

event.preventDefault();

renderPokemon(input.value.toLowerCase());

});


buttonPrev.addEventListener('click',()=>{
  
  
    if(searchPokemon>1){
    searchPokemon -=1;
    renderPokemon(searchPokemon);
   }
   
 
});

buttonNext.addEventListener('click',()=>{
searchPokemon +=1;

renderPokemon(searchPokemon);
});




renderPokemon(searchPokemon);