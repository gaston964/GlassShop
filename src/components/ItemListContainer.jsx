import React from 'react'
import styled from 'styled-components'
import ItemCount from './ItemCount';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: auto;
    color: black;
    font-family:'Source Sans Pro', sans-serif;
    height: 100vh;
`;
const ItemListContainer = ({greeting}) => {
    return (
        <>
            <Container>
            <h2>{greeting}</h2>
            <ItemCount/>
            </Container>
        </>
    )
}

export default ItemListContainer