import React, { useState, useEffect } from 'react';
import './App.css';
import DexesComponent from './components/DexesComponent';

import PokedexComponent from './components/PokedexComponent';
import Pokemons from './components/Pokemons';

function App() { 
const [selectedPokedex, setSelectedPokedex] = useState("");
const [selectedPokemon, setSelectedPokemon] = useState("");

function goHome() {
  setSelectedPokedex("");
  setSelectedPokemon("");
}
console.log("debug", selectedPokemon)

  if (selectedPokedex== "") {
    return(
      <PokedexComponent setSelectedPokedex={setSelectedPokedex} />
      )
  } else if (selectedPokedex !== "" && selectedPokemon === "") {
    return(
      <DexesComponent setSelectedPokemon={setSelectedPokemon} selectedPokedex={selectedPokedex} />  
    )
  } else if (selectedPokedex !== "" && selectedPokemon !== "") {
    return (
      <Pokemons selectedPokemon={selectedPokemon} />
    )
  } 

}

export default App;
