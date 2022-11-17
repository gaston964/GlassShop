import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin: auto;
    background-color: lightgray;
    color: black;
    font-family:'Source Sans Pro', sans-serif;
    height: 500px;
    width: 500px;
`;
const ItemListContainer = ({greeting}) => {
    return (
        <>
            <Container>
            <h2>{greeting}</h2>
            </Container>
        </>
    )
}

export default ItemListContainer