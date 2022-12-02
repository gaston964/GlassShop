import React, { useEffect, useState } from 'react'

const ItemDetailContainer = () => {

    const [personajes, setPersonajes] = useState()
    useEffect(() => {
        getCharacter()
    }, [])
    const getCharacter = () => {
        fetch("https://rickandmortyapi.com/api/character")
            .then(response => response.json())
            .then(data => {
                setPersonajes(data.results)
                console.log(data.results);
            })
    }
    return (
        <>
            <div>
                <h3>ItemDetailContainer</h3>
                {personajes.map(m => <li>{m.name}</li>)}
            </div>
        </>
    )
}

export default ItemDetailContainer