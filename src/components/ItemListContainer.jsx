import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ItemList from './ItemList';
import Item from './Item';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    padding: 1rem;
    align-items: center;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: auto;
    color: black;
    font-family:'Source Sans Pro', sans-serif;
    background-color: lightgray;
`;
const ItemListContainer = ({ greeting }) => {

    const [personajes, setPersonajes] = useState([])
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
            <Container>
                <h2>{greeting}</h2>
                <ItemList />
                <Item/>
                {personajes.map(p =>
                    <Div key={p.id}>
                        {p.name}
                        <img src={p.image} alt={p.name} />
                    </Div>)}
            </Container>
        </>
    )
}

export default ItemListContainer