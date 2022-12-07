import Item from './Item'

const ItemList = ({productList}) => {
    return (
        <>
            <div className='itemList'>
                {productList.map(pr => <li>{pr.name}</li>)}
            </div>
        </>
    )
}

export default ItemList

{/* <Item key={pr.id} {...productList} /> */}
/* const [personajes, setPersonajes] = useState([])
useEffect(() => {
    setTimeout(() => {
        getCharacter()
    }, 2000);
}, [])
const getCharacter = () => {
    fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => {
            setPersonajes(data.results)
            console.log(data.results);
        })
} */