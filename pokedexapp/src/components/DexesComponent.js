import React, { useState, useEffect } from 'react';
const Pokedex = require("pokeapi-js-wrapper")


const DexesComponent = (props) => {
    let {setSelectedPokemon, selectedPokedex} = (props) 
    const [selectedRegion, setSelectedRegion] = useState([]);
    const [errorMessage, seterrorMessage] = useState(false);

    useEffect (function () {
        const P = new Pokedex.Pokedex();
        async function fetchData() {
            await P.getPokedexByName(selectedPokedex).then(response => setSelectedRegion(response.pokemon_entries))
                .catch(err => seterrorMessage(err))
        }
        fetchData();
    }, [])
console.log(selectedRegion)

    if (!errorMessage ) {
        return (
            <ul >
                {selectedRegion.map((pokemon) => <li key={pokemon.pokemon_species.name}><p>{pokemon.pokemon_species.name}</p> 
                    <button onClick={() => setSelectedPokemon(pokemon.pokemon_species.name)}> view </button> </li>)}
            </ul >
        )
    } else {
        return(
        <h1> There is an error calling the Pokemon Database </h1>
        )
    }
}

export default DexesComponent;