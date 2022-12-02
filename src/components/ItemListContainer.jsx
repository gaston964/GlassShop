import React from 'react'
import styled from 'styled-components'
import ItemList from './ItemList';
import ItemCount from './ItemCount';
import ItemDetailContainer from './ItemDetailContainer';
import PracticaFetch from './PracticaFetch';

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
const ItemListContainer = ({greeting}) => {
    return (
        <>
            <Container>
            <h2>{greeting}</h2>
{/*             <ItemList/> */}
            {/* <ItemCount stock={item.stock}/> */}
            {/* <ItemDetailContainer/> */}
            <PracticaFetch/>
            <ItemCount/>
            </Container>
        </>
    )
}

export default ItemListContainer