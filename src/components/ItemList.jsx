import Item from './Item'

const ItemList = ({productList}) => {
    return (
        <>
            <div className='itemList'>
                {productList.map(pr => <Item key={pr.id} {...pr} />)}
            </div>
        </>
    )
}

export default ItemList

