import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Div = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
`;



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
            <Div>
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
            </Div>
        </>
    )
}

export default PracticaFetch