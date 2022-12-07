import React, {useState} from 'react'

const ItemCount = () => {
const [contador, setContador] = useState(0)

const AgregarContador = () => {
    if (contador < 10) {
        setContador(contador +1);
    }
}
const RestarContador = () => {
    if (contador >= 1) {
        setContador(contador - 1);
        
    }
}

    return (
        <>
        <div className='contenedor'>
        <div>ItemCount</div>
        <div>
            <button className='buttonCount' onClick={AgregarContador}>+</button>
            {contador}
            <button className='buttonCount' onClick={RestarContador}>-</button>
        </div>
        <div>Stock: 10</div>
        </div>
        </>
    )
}

export default ItemCount
