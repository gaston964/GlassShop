import React, { useEffect, useState } from 'react'

const PracticaFetch = () => {

    const [pokemons, setPokemons] = useState()

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/ditto')
            .then(response => response.json())
            .then(data => setPokemons(data))
            .catch(err => console.error(err))
    }, [])
    console.log(pokemons.sprites.front_default)
    return (
        <>
            <div>
                <h3>PracticaFetch</h3>
                {pokemons
                    ?
                    <div>
                        {pokemons.name}
                        <img src={pokemons.sprites.front_default} />
                    </div>

                    :
                    <div>Cargando...</div>
                }
            </div>
        </>
    )
}

export default PracticaFetch