import React, { useState, useEffect } from 'react';
import './App.css';
import DexesComponent from './components/DexesComponent';

import PokedexComponent from './components/PokedexComponent';
import Pokemons from './components/Pokemons';

function App() {
  const [selectedPokedex, setSelectedPokedex] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState("");

  function pokedexBack(){
    setSelectedPokedex("");
  }
  function pokemonBack() {
    setSelectedPokemon("");
  }

  function goHome() {
    setSelectedPokedex("");
    setSelectedPokemon("");
  }

  console.log("debug", selectedPokemon)

  if (selectedPokedex == "") {
    return (
      <div>
        <PokedexComponent setSelectedPokedex={setSelectedPokedex} />
      </div>)
  } else if (selectedPokedex !== "" && selectedPokemon === "") {
    return (
      <div>
        <button onClick={goHome}> home </button>
        <DexesComponent setSelectedPokemon={setSelectedPokemon} selectedPokedex={selectedPokedex}
        pokedexBack={pokedexBack} />
      </div>)
  } else if (selectedPokedex !== "" && selectedPokemon !== "") {
    return (
      <div>
        <button onClick={goHome}> home </button>
        <Pokemons selectedPokemon={selectedPokemon} pokemonBack={pokemonBack} />
      </div>)
  }

}

export default App;
