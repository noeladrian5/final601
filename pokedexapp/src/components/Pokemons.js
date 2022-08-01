import React, { useState, useEffect } from 'react';
const Pokedex = require("pokeapi-js-wrapper")


const Pokemons = (props) => {
    const {selectedPokemon, pokemonBack} = props;
  //const [selectedPokemons, setSelectedPokemons] = useState([]);
    const [pokeImg, setPokeImg] = useState([]);
    const [pokeAbilities, setPokeAbilities] = useState([]);
    const [pokeStats, setPokeStats] = useState([]);
    const [pokeType, setPokeType] = useState([]);
    const [errorMessage, seterrorMessage] = useState(false);

    useEffect (function () {
        const P = new Pokedex.Pokedex();
        async function fetchData() {
            await P.getPokemonByName(selectedPokemon).then(response =>{
                 setPokeImg(response.sprites.front_default)
                 setPokeAbilities(response.abilities)
                 setPokeStats(response.stats)
                 setPokeType(response.types)
            })
                .catch(err => seterrorMessage(err))
        }
        fetchData();
    }, [])

    if (!errorMessage ) {
        return (
            <div>
                <button onClick={pokemonBack}>back </button>
                <br />
                <img src={pokeImg} />
                <h1>{selectedPokemon}</h1>
                <h2>Abilities:</h2>
                <p>{pokeAbilities.map(ability => <li key={ability.ability.name}>{ability.ability.name}</li>)}</p>
                <h3>Stats:</h3>
                <p>{pokeStats.map(({stat, base_stat}) => <li key={stat.name}>{stat.name} : {base_stat}</li>)}</p>
                <h4>Type:</h4>
                <p>{pokeType.map(type => <li key={type.type.name}>{type.type.name}</li>)}</p>
            </div>
        )
    } else {
        return(
        <h1> There is an error calling the Pokemon Database </h1>
        )
    }
}

export default Pokemons;