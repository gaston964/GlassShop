import React, {useState} from 'react'

const ItemCount = ({stock, initial, onAdd}) => {
const [contador, setContador] = useState(0)

const AgregarContador = () => {
    if (contador < stock) {
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
        <div className='button_container'>
            <button className='buttonCount' onClick={AgregarContador}>+</button>
            <div>
            {contador}
            </div>
            <button className='buttonCount' onClick={RestarContador}>-</button>
        </div>
        <div>Stock: {stock}</div>
        <p><button onClick={()=> onAdd(contador)} className='item-det-button'>Add to Cart</button></p>
        </div>
        </>
    )
}

export default ItemCount
