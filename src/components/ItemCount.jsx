import React, {useState} from 'react'
import styled from 'styled-components'

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Button = styled.button`
width: 30px;
height: 25px;
border-radius: 35%;
margin: 15px;
`;

const ItemCount = () => {
const [contador, setContador] = useState(0)
let stock = 10
let sinStock = 0
const AgregarContador = () => contador === stock ? <Button disable={true}></Button> : setContador(contador+1);
const RestarContador = () => contador === sinStock ?  <Button disable={true}></Button> : setContador(contador - 1);

    return (
        <>
        <Div>
        <div>ItemCount</div>
        <div>
            <Button onClick={AgregarContador}>+</Button>
            {contador}
            <Button onClick={RestarContador}>-</Button>
        </div>
        <div>Stock: 10</div>
        </Div>
        </>
    )
}

export default ItemCount
