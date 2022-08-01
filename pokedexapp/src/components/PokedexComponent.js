import React, { useState, useEffect } from 'react';
const Pokedex = require("pokeapi-js-wrapper")


const PokedexComponent = (props) => {
    let {setSelectedPokedex} = props
    const [allDexes, setAllDexes] = useState([]);
    const [errorMessage, seterrorMessage] = useState(false);
    

    useEffect (function () {
        const P = new Pokedex.Pokedex();
        async function fetchData() {
            await P.resource("api/v2/pokedex").then(response => setAllDexes(response.results))
                .catch(err => seterrorMessage(err))
        }

        fetchData();
    }, [])

    if (!errorMessage ) {
        return (
            <ul >
                {allDexes.map((dexName) => <li key={dexName.name}><p>{dexName.name}</p> <button onClick={(
                    ) => setSelectedPokedex(dexName.name)}> view </button> </li>)}
            </ul >
        )
    } else {
        return(
        <h1> There is an error calling the Pokemon Database </h1>
        )
    }

    
}  

export default PokedexComponent